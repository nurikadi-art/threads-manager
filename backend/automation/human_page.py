import asyncio
import math
import random
from typing import Iterable, Optional, Tuple

from playwright.async_api import Page


class HumanPage:
    def __init__(
        self,
        page: Page,
        *,
        min_key_delay_ms: int = 50,
        max_key_delay_ms: int = 200,
        mistype_probability: float = 0.04,
        mouse_move_steps: Optional[int] = None,
    ) -> None:
        self.page = page
        self.min_key_delay_ms = min_key_delay_ms
        self.max_key_delay_ms = max_key_delay_ms
        self.mistype_probability = mistype_probability
        self.mouse_move_steps = mouse_move_steps
        self._mouse_pos = self._initial_mouse_position()

    def __getattr__(self, name):
        return getattr(self.page, name)

    def _initial_mouse_position(self) -> Tuple[float, float]:
        viewport = self.page.viewport_size
        if viewport:
            return (
                random.uniform(0, viewport["width"]),
                random.uniform(0, viewport["height"]),
            )
        return (0.0, 0.0)

    def _random_delay_seconds(self, min_ms: int, max_ms: int) -> float:
        return random.uniform(min_ms, max_ms) / 1000.0

    def _bezier_point(
        self,
        t: float,
        p0: Tuple[float, float],
        p1: Tuple[float, float],
        p2: Tuple[float, float],
        p3: Tuple[float, float],
    ) -> Tuple[float, float]:
        one_minus_t = 1 - t
        x = (
            one_minus_t**3 * p0[0]
            + 3 * one_minus_t**2 * t * p1[0]
            + 3 * one_minus_t * t**2 * p2[0]
            + t**3 * p3[0]
        )
        y = (
            one_minus_t**3 * p0[1]
            + 3 * one_minus_t**2 * t * p1[1]
            + 3 * one_minus_t * t**2 * p2[1]
            + t**3 * p3[1]
        )
        return x, y

    def _bezier_control_points(
        self, start: Tuple[float, float], end: Tuple[float, float]
    ) -> Tuple[Tuple[float, float], Tuple[float, float]]:
        distance = math.hypot(end[0] - start[0], end[1] - start[1])
        spread = max(30.0, distance * 0.25)
        angle = math.atan2(end[1] - start[1], end[0] - start[0])

        control1 = (
            start[0] + math.cos(angle) * distance * 0.3 + random.uniform(-spread, spread),
            start[1] + math.sin(angle) * distance * 0.3 + random.uniform(-spread, spread),
        )
        control2 = (
            start[0] + math.cos(angle) * distance * 0.7 + random.uniform(-spread, spread),
            start[1] + math.sin(angle) * distance * 0.7 + random.uniform(-spread, spread),
        )
        return control1, control2

    def _typable_char(self, char: str) -> bool:
        return char.isalpha()

    def _mistype_char(self, char: str) -> str:
        if char.isupper():
            return random.choice("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
        return random.choice("abcdefghijklmnopqrstuvwxyz")

    async def _move_mouse_bezier(self, end_x: float, end_y: float) -> None:
        start = self._mouse_pos
        end = (end_x, end_y)
        control1, control2 = self._bezier_control_points(start, end)
        steps = self.mouse_move_steps or random.randint(18, 32)

        for step in range(steps):
            t = step / (steps - 1)
            x, y = self._bezier_point(t, start, control1, control2, end)
            await self.page.mouse.move(x, y)
            await asyncio.sleep(self._random_delay_seconds(5, 18))

        self._mouse_pos = end

    async def human_click(self, selector: str) -> None:
        locator = self.page.locator(selector)
        await locator.scroll_into_view_if_needed()
        box = await locator.bounding_box()
        if not box:
            raise ValueError(f"Element not found for selector: {selector}")

        target_x = box["x"] + random.uniform(0.2, 0.8) * box["width"]
        target_y = box["y"] + random.uniform(0.2, 0.8) * box["height"]

        await self._move_mouse_bezier(target_x, target_y)
        await asyncio.sleep(self._random_delay_seconds(30, 120))
        await self.page.mouse.down()
        await asyncio.sleep(self._random_delay_seconds(30, 120))
        await self.page.mouse.up()

    async def human_type(self, selector: str, text: str, *, clear_first: bool = False) -> None:
        locator = self.page.locator(selector)
        await locator.scroll_into_view_if_needed()
        await locator.focus()

        if clear_first:
            await self.page.keyboard.press("Control+A")
            await asyncio.sleep(self._random_delay_seconds(80, 180))
            await self.page.keyboard.press("Backspace")

        for char in text:
            if char == "\n":
                await self.page.keyboard.press("Enter")
            else:
                if self._typable_char(char) and random.random() < self.mistype_probability:
                    await self.page.keyboard.type(self._mistype_char(char))
                    await asyncio.sleep(self._random_delay_seconds(30, 120))
                    await self.page.keyboard.press("Backspace")

                await self.page.keyboard.type(char)

            await asyncio.sleep(
                self._random_delay_seconds(self.min_key_delay_ms, self.max_key_delay_ms)
            )

    async def scroll_reading(
        self,
        *,
        rounds: int = 3,
        min_scroll: int = 200,
        max_scroll: int = 600,
        min_pause: float = 0.6,
        max_pause: float = 2.4,
    ) -> None:
        for _ in range(rounds):
            scroll_amount = random.randint(min_scroll, max_scroll)
            await self.page.mouse.wheel(0, scroll_amount)
            await asyncio.sleep(random.uniform(min_pause, max_pause))
