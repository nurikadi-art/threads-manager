import json
import os
import urllib.error
import urllib.request
from dataclasses import dataclass
from typing import Any, Dict, Tuple

DEFAULT_BASE_URL = os.getenv("INCOGNITON_API_BASE_URL", "http://127.0.0.1:35000")
START_PROFILE_ENDPOINT = "/api/v2/profile/start"
STOP_PROFILE_ENDPOINT = "/api/v2/profile/stop"
REQUEST_TIMEOUT_SECONDS = 30


class IncognitonError(RuntimeError):
    pass


@dataclass(frozen=True)
class IncognitonSession:
    profile_id: str
    remote_debugging_port: int
    puppeteer_url: str


def _build_headers() -> Dict[str, str]:
    headers = {"Content-Type": "application/json"}
    token = os.getenv("INCOGNITON_API_TOKEN")
    if token:
        headers["Authorization"] = f"Bearer {token}"
    return headers


def _post_json(path: str, payload: Dict[str, Any]) -> Dict[str, Any]:
    url = DEFAULT_BASE_URL.rstrip("/") + path
    data = json.dumps(payload).encode("utf-8")
    request = urllib.request.Request(url, data=data, headers=_build_headers(), method="POST")
    try:
        with urllib.request.urlopen(request, timeout=REQUEST_TIMEOUT_SECONDS) as response:
            body = response.read().decode("utf-8")
    except urllib.error.HTTPError as exc:
        error_body = exc.read().decode("utf-8") if exc.fp else ""
        raise IncognitonError(f"Incogniton API error {exc.code}: {error_body}") from exc
    except urllib.error.URLError as exc:
        raise IncognitonError(f"Incogniton API unreachable: {exc.reason}") from exc

    try:
        return json.loads(body)
    except json.JSONDecodeError as exc:
        raise IncognitonError(f"Invalid JSON response: {body}") from exc


def _extract_session_payload(response: Dict[str, Any]) -> Dict[str, Any]:
    if isinstance(response.get("data"), dict):
        return response["data"]
    return response


def launch_profile(profile_id: str) -> Tuple[int, str]:
    """
    Start an Incogniton profile and return connection details for Playwright.

    The returned values are intended for Playwright's connect_over_cdp() to attach
    to the existing Incogniton-managed browser instance.
    """
    response = _post_json(START_PROFILE_ENDPOINT, {"profile_id": profile_id})
    data = _extract_session_payload(response)

    remote_debugging_port = data.get("remote_debugging_port") or data.get("port")
    puppeteer_url = data.get("puppeteer_url") or data.get("ws") or data.get("wsEndpoint")

    if remote_debugging_port is None or puppeteer_url is None:
        raise IncognitonError(
            "Incogniton start response missing remote_debugging_port or puppeteer_url."
        )

    return int(remote_debugging_port), str(puppeteer_url)


def stop_profile(profile_id: str) -> None:
    _post_json(STOP_PROFILE_ENDPOINT, {"profile_id": profile_id})
