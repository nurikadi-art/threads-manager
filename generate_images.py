#!/usr/bin/env python3
"""
AI Presentation Image Generator
Generates all 15 photorealistic images and pushes to GitHub

INSTRUCTIONS:
1. Install requirements: pip install google-generativeai Pillow gitpython
2. Set your API key below
3. Run: python generate_images.py
"""

import os
import time
import subprocess
from pathlib import Path

# ============================================
# PASTE YOUR API KEY HERE
# ============================================
API_KEY = "YOUR_GEMINI_API_KEY_HERE"
# ============================================

# Repository settings
REPO_URL = "https://github.com/nurikadi-art/threads-manager.git"
BRANCH = "claude/review-presentation-slides-Py5IS"
OUTPUT_FOLDER = "public/images/generated"

# All prompts with cinematographer-level detail
PROMPTS = {
    "compass-navigation": {
        "aspect": "1:1",
        "prompt": """A vintage brass nautical compass, approximately 80 years old, sitting on a weathered mahogany desk.

SPECIFIC DETAILS:
- Solid brass body with deep honey-gold patina from decades of handling
- Visible tiny scratches and micro-dents from years of use - lived-in, not damaged
- Glass crystal has one small chip on edge (top-right) and faint circular scratches
- Compass rose inside is hand-painted ivory with deep navy blue N, S, E, W lettering
- Needle is blued steel with small ruby bearing visible at pivot point
- Faint verdigris (green oxidation) in decorative engravings around edge
- Hinge shows brass-on-brass wear marks

ENVIRONMENT:
- Sitting on stack of vintage nautical charts, yellowed with age
- Maps have coffee ring stains and pencil annotations in faded handwriting
- Corner of leather-bound journal visible (dark brown, cracked spine)
- Single brass naval button lies nearby
- Dust particles floating in light beam

CAMERA: Hasselblad X2D 100C with 80mm f/1.9 lens
Shot from 45-degree angle above. Shallow depth of field.
Single shaft of warm afternoon light from top-left (like through ship's porthole).
Light catches brass creating warm glow on left, rich amber shadow on right.

COLOR: Warm amber highlights, cool blue-gray shadows. Like Vermeer meets National Geographic.

NOT a product photo. NOT a stock image. Photographed in grandfather's study aesthetic.
NO perfect pristine surfaces. NO dramatic HDR. NO fake bokeh."""
    },

    "data-overwhelm": {
        "aspect": "16:9",
        "prompt": """A startup founder (woman, early 30s, South Asian) at her home office desk at 11:47 PM, surrounded by information chaos.

PERSON:
- Hair in messy bun that was neat 14 hours ago, loose strands falling
- Reading glasses slightly crooked, pushed up on forehead
- Oversized faded maroon Stanford sweatshirt
- Dark circles under eyes - specific 'staring at screens too long' tiredness
- Expression: Slight frown, lips parted, "none of this makes sense" micro-expression
- One hand on temple, fingers in hair
- Other hand hovering over trackpad, frozen mid-scroll

DESK:
- MacBook Pro 16" showing dense Excel spreadsheet (cells too small to read)
- Dell 27" monitor showing Tableau dashboard with 6 charts
- iPhone face-down, notification light blinking green
- Cold Thai takeout container with plastic fork stuck in congealed sauce
- Three coffee cups: ceramic half-full, paper Starbucks empty, reusable tumbler missing lid
- Printed reports with yellow highlighter and red pen marks
- 5 Post-it notes on monitor edge, various colors
- Mechanical keyboard with some keys shinier from use
- Small succulent in concrete pot (slightly underwatered, one brown leaf)
- One AirPod on desk, other missing
- Crumpled lunch receipt

ROOM:
- Home office corner of small apartment
- IKEA Kallax shelf with books and trophies in background
- Window showing city lights (almost midnight)
- Desk lamp on (warm 2700K) creating pool of light
- Monstera plant in corner

CAMERA: Sony A7IV with 35mm f/1.4
Shot slightly above from across desk. Focus on her eyes.
f/1.8 bokeh. ISO 3200 slight natural grain. 1/60s slight motion blur on hovering hand.

LIGHTING: Desk lamp (warm left), monitor glow (cool blue front), city lights (cool behind).
Contrast between warm lamp and cool screen on her face.

COLOR: Lifted blacks, teal shadows, warm highlights. A24 film color grading.

Quiet overwhelm, not dramatic. Relatable "I've been here" moment.
NO crying or dramatic head-in-hands. NO perfect Instagram home office. NO ring light reflections."""
    },

    "lost-idea-driving": {
        "aspect": "16:9",
        "prompt": """A founder (man, late 30s, Black) driving his Tesla Model 3 during golden hour, experiencing frustration of having a brilliant idea but unable to write it down.

DRIVER:
- Clean-shaven, well-groomed (morning meeting earlier)
- Light blue button-down shirt, top button undone, sleeves rolled once
- Apple Watch on left wrist (on steering wheel)
- Wedding ring on left hand
- Expression: Eyebrows raised, mouth forming a word he's trying to remember, slight head tilt
- Eyes showing "trying to hold onto a thought" concentration
- One finger tapping steering wheel anxiously
- One AirPod in right ear

CAR INTERIOR:
- Tesla Model 3 (white seats, wood trim)
- Center screen showing navigation (destination blurred)
- Autopilot engaged (blue steering wheel icon visible)
- Phone in center console face up (can't touch it safely)
- Work badge on lanyard hanging from rearview mirror (slight swing blur)
- Half-empty water bottle in cupholder
- Sunglasses on dashboard

THROUGH WINDSHIELD:
- Highway stretching ahead with slight curve
- Other cars at comfortable distance
- Golden hour sun low on horizon (not directly visible)
- Highway signs passing (motion blur)
- California coastal hills in distance

CAMERA: GoPro Hero 12 mounted on passenger headrest
Wide angle (16mm equivalent). Focus on driver, windshield softly sharp.
Natural GoPro color. Slight rolling shutter on signs (adds authenticity).

LIGHTING: Golden hour sun streaming through driver-side window.
Beautiful warm light on face and arm. Dashboard in shadow. Small single lens flare acceptable.

COLOR: Warm golden tones (not orange). Blues in shadows. Lifted blacks. Terrence Malick film aesthetic.

Universal frustration every entrepreneur knows. NOT dangerous distracted driving. NOT car commercial lighting."""
    },

    "idea-lost-shower": {
        "aspect": "16:9",
        "prompt": """A foggy bathroom mirror with handwriting traced in condensation - the universal attempt to capture an idea before it disappears.

MIRROR:
- Standard bathroom mirror above sink
- Completely fogged from hot shower
- Someone wrote "WHAT IF WE..." in finger-traced letters (hurried, uneven)
- Below it, half-finished word already fogging back over (idea disappearing real-time)
- Finger streak marks where they tried to write more but gave up
- One clear spot where hand wiped mirror (trying to see reflection to think)

BATHROOM:
- Modern-but-not-fancy apartment bathroom
- Marble-look laminate countertop
- Electric toothbrush in holder
- One prescription bottle (label facing away)
- Aesop-style hand soap dispenser
- Small pothos plant in white pot
- Damp towel on hook
- Steam visible in air
- White shower curtain edge visible
- One rubber duck on tub edge

IN MIRROR REFLECTION (through fog):
- Vague shape of person (shoulders only, head out of frame)
- Wearing white towel/robe
- Turned away, heading to get dressed
- The moment of giving up on capturing the thought

CAMERA: iPhone 15 Pro Max
Straight at mirror, slightly below eye level. Focus on writing, steam soft.
That specific iPhone bathroom photo quality. Natural bathroom lighting, no flash.

LIGHTING: Bathroom vanity lights (warm, above). Frosted window natural light (side).
Hazy, dreamy steamy room quality. That morning bathroom softness.

COLOR: Soft, warm, slightly muted. Phone camera low contrast foggy look. Whites slightly cream.

Wistful, the one that got away. Every person has been here. Steam is literally idea evaporating.
NO horror movie mirror vibes. NO perfectly styled bathroom."""
    },

    "ai-partnership": {
        "aspect": "16:9",
        "prompt": """A founder and laptop showing Claude AI interface - genuine collaboration moment, partnership not replacement.

PERSON:
- Woman, mid-40s, East Asian, founder/CEO energy
- Silver-streaked black hair, intentionally styled (she owns it)
- Minimal makeup, confident natural look
- Structured blazer over simple t-shirt (modern CEO aesthetic)
- Reading glasses on (closely reading something)
- Expression: One eyebrow slightly raised, corner of mouth up - "huh, that's actually good" micro-expression
- Leaning forward toward screen (engaged, not passive)
- One hand on trackpad, one holding pen (ready for notes)

LAPTOP & SCREEN:
- MacBook Pro on standing desk (sitting position)
- Screen showing Claude conversation or generic AI chat
- AI response shows bullet points (not readable, clearly structured)
- Human message above shows a question
- Mid-conversation, not beginning
- Chat 2/3 of screen, notes app on side

DESK:
- Minimalist standing desk (light wood top)
- Large monitor behind laptop (showing work content)
- Small notepad with handwritten notes (her additions to AI)
- White ceramic coffee cup (good design)
- No clutter - executive keeps things clean
- One personal item: small meaningful object
- High-end mechanical keyboard pushed aside

BACKGROUND:
- Glass-walled office (her own but transparent)
- Others working in soft focus background
- Modern office (not startup chaos, not corporate sterile)
- Plant in corner
- City view through windows

CAMERA: Sony A7III with 85mm f/1.4
Over her shoulder, slightly right. She fills left third, laptop right two-thirds.
Sharp on face, laptop in focus, background very soft. About 3 feet away.

LIGHTING: Large window left (soft daylight). Screen glow (cool fill). Office ambient above.
Flattering window light plus screen glow combination.

COLOR: Clean, professional, warm. Not cold tech blue. Natural skin tones.

Partnership, not replacement. She's clearly in control - AI is her tool.
NO robot imagery. NO confusion/worry. NO glowing AI visualization."""
    },

    "chaos-to-clarity": {
        "aspect": "16:9",
        "prompt": """Genuine before/after comparison: information chaos to actionable clarity, real moment in workspace.

LEFT SIDE (CHAOS - 45%):
- Post-it notes scattered in multiple colors (some curled, stuck to each other)
- Handwriting in multiple pen colors, some crossed out
- Printed emails with annotations (some upside down)
- Spiral notebook open to messy notes
- Sticky tabs in closed book
- Phone showing multiple notification badges
- Coffee cup with rings on papers beneath
- One Post-it fell on floor (visible at edge)
- Stress ball squeezed into odd shape
- Tangled earbuds
- Dead small succulent (brown)

CENTER:
- Laptop sits in middle creating natural split
- Screen shows clean organized task management interface
- The transformation tool

RIGHT SIDE (CLARITY - 45%):
- Clean notebook with neat handwritten bullets
- Laptop showing organized Notion/task board
- Phone face-down (intentionally silenced)
- Same type coffee cup but on coaster
- One quality pen in holder
- Healthy plant (same pot type as dead one)
- Clear desk surface visible
- Small "DONE" checkbox drawn on single Post-it
- Calm, space to think

NARRATIVE:
- Same person's desk, same day
- Left is morning, right is after using AI to organize
- Coffee rings are real, chaos is human
- Clarity isn't Pinterest-perfect, just functional

CAMERA: Canon R5 with 24mm f/2.8
Directly above (flat lay). Both sides in focus (f/8). Full desk with laptop center.

LIGHTING: Single overhead ceiling light. Even, slightly warm office lighting.
Light shadows from items give depth. Realistic.

COLOR: Left warmer/cluttered. Right cooler/cleaner. Transition subtle but real. Documentary style.

Honest comparison. Chaos relatable, not embarrassing. Clarity achievable, not aspirational.
NO split-screen line. NO dramatic gray vs color difference. NO impossible organization."""
    },

    "lead-qualification": {
        "aspect": "16:9",
        "prompt": """Glass conference room in startup office showing visual metaphor: AI helping sort opportunities to find right ones.

CONFERENCE ROOM:
- Glass walls with frosted privacy strip at standing height
- Long modern table (light wood, seats 8)
- 7 gray chairs, 1 gold/yellow chair at head
- Small profile cards/papers spread on table (the "leads")
- Most cards face-down (filtered out)
- 3-4 cards face-up near gold chair (qualified)
- Laptop at head showing dashboard (abstract)
- Whiteboard with funnel diagram sketched

VISUAL METAPHOR:
- Many cards (leads) entered table
- Most turned down (not qualified)
- Few remain face-up moving toward decision-maker's seat
- Gold chair represents executive's time
- Only best opportunities reach that seat

OFFICE OUTSIDE GLASS:
- Open floor plan visible through glass
- Other employees working (soft focus)
- Natural light from windows
- Modern startup aesthetic (exposed ceiling, plants)
- Could be Austin, NYC, anywhere

CAMERA: Sony A7IV with 35mm f/1.4
From outside glass room, looking in. Glass creates slight reflection (photographer silhouette faint).
Focus through glass on table and cards. Slight depth of field.

LIGHTING: Conference room overhead on. Natural light mixing from office.
Room slightly brighter than surrounding office. No drama.

COLOR: Clean, professional. Gold chair pops against gray. Modern startup palette. Natural.

The value of filtering. Executive time precious (gold chair). AI does sorting.
NO actual people. NO cheesy funnel graphics. NO over-designed office."""
    },

    "monday-panic": {
        "aspect": "16:9",
        "prompt": """A founder (man, mid-30s, Latino) at kitchen counter at 6:47 AM Monday, experiencing weekly avalanche of unprocessed information while trying to eat breakfast.

PERSON:
- Stubble (didn't shave over weekend)
- Hair slightly messy (just woke up)
- Worn t-shirt (slept in it) and joggers
- One slipper on, one foot bare (rushed from bedroom)
- Expression: Wide eyes, mid-chew on cereal, staring at phone
- Phone at chest height, spoon frozen halfway to mouth
- Posture: Hunched, tense

KITCHEN:
- Bowl of cereal going soggy (milk turning colors from sugary cereal)
- iPhone showing email inbox: visible "47 unread" badge
- Laptop open behind: Slack with red notification badges
- Coffee maker mid-brew (hasn't gotten to it yet)
- Weekend mail stack unopened
- Calendar on fridge: Monday circled with "Q1 REVIEW"
- Kid's drawing on fridge magnet
- Fruit bowl with browning banana
- Dirty glass from last night on counter

KITCHEN ENVIRONMENT:
- Normal middle-class kitchen (not Pinterest kitchen)
- Dishes in sink
- Gray early morning window light
- Backpack by door
- Dog bowl on floor (dog not visible)
- Crayon marks on fridge
- Lived-in, real

CAMERA: iPhone 14 Pro (spouse took this)
Across kitchen island. Candid moment. 0.5x wide angle.

LIGHTING: Under-cabinet LEDs (cool white). Early morning window (gray/blue). Phone glow on face.
That specific "before sunrise" indoor lighting.

COLOR: Cool tones (early morning). Slightly desaturated. Warmth only from cereal colors. Documentary.

The weekly reset panic. "How did 47 emails happen while I slept?"
NO posed "stress" acting. NO perfect model-home kitchen."""
    },

    "cockpit-control": {
        "aspect": "16:9",
        "prompt": """Private jet cockpit at golden hour - beautiful complexity of instruments helping pilots make decisions, metaphor for AI-assisted executive tools.

COCKPIT:
- Private jet cockpit (Citation CJ4 or similar - luxury not excessive)
- Full glass cockpit (digital displays, modern)
- Main flight display showing heading, altitude, speed
- Navigation display showing route
- Engine instruments showing green (all systems good)
- Autopilot engaged (blue lit indicator)
- Weather radar showing clear ahead
- Each screen showing different organized information

PERSPECTIVE:
- From behind pilot seats
- Both seats visible (empty - focus on instruments)
- Yoke/controls visible
- Throttle quadrant in center
- Organized complexity

THROUGH WINDSCREEN:
- Golden hour sky (sun setting to right)
- Above clouds (white cloud layer below)
- Orange/pink/purple gradient sky
- Clear visibility
- Horizon line visible

INSTRUMENTS:
- Main PFD showing artificial horizon
- Airspeed tape: 420 kts
- Altitude: FL410 (41,000 feet)
- Heading: 270 (west)
- Vertical speed: level
- Navigation: "ETA: 2:47"

CAMERA: Canon R5 with 14mm f/2.8
Ultra-wide capturing full cockpit. From between seats, slightly above.
Everything sharp (f/8). HDR to capture instruments and bright sky.

LIGHTING: Golden sunset through windscreen. Green instrument glow. Blue digital displays.
Beautiful warm natural vs cool digital contrast.

COLOR: Cinematic golden hour warmth. Teal shadows. Not oversaturated. High-end aviation photo.

Control through information. Instruments help pilot, don't replace.
NO pilot visible. NO alarm lights. NOT commercial airline cockpit."""
    },

    "founder-arena": {
        "aspect": "16:9",
        "prompt": """A founder (woman, late 30s, Middle Eastern) standing alone in empty arena at dawn - "man in the arena" concept, the person who shows up.

PERSON:
- Wearing business casual (blazer, nice jeans, white sneakers)
- Hair down, slightly wind-blown
- Standing center of arena floor
- Looking up at empty seats
- Posture: Grounded, confident, not arrogant
- Expression: Contemplative, determined
- Alone but not lonely
- Wear on clothes suggests working all night

ARENA:
- Real sports arena or stadium (not corporate event space)
- Empty seats stretching up on all sides
- Dawn light through open roof or high windows
- Arena floor surface (basketball court, concert floor)
- Equipment visible at edges (real venue)
- Morning mist or dust particles in light beams
- No logos or branding

THE MOMENT:
- She arrived early, before anyone
- This is where she'll announce something today
- Just her and the challenge ahead
- Empty seats = people she needs to convince
- But she's already here, ready

CAMERA: Sony A1 with 24-70mm f/2.8 at 35mm
From behind/side (profile visible, not full face).
Wide enough for arena scope, she's not lost in frame.
Sharp on her, background seats slightly soft. About 50 feet away.

LIGHTING: Dawn light from above/behind (backlighting her).
Slight glow around silhouette. Arena work lights providing fill.
Blue/gold dawn contrast.

COLOR: Split toning: cool shadows, warm highlights. Dawn colors (blue, gold, pink).
Slightly lifted blacks. Cinematic, epic.

Theodore Roosevelt "man in the arena" energy. Showing up before ready.
NO superhero pose. NO spotlights/theatrical effects. NO crowd."""
    },

    "screen-overload": {
        "aspect": "16:9",
        "prompt": """Founder's desk with too many screens showing too much information - visual representation of modern information overload.

SCREENS (left to right):
1. Vertical monitor: Email inbox (200+ unread, scrolled to middle)
2. Main large monitor: 30+ browser tabs, Slack in corner (5+ channels with red dots)
3. Laptop: Video call grid (6 faces, big meeting)
4. Phone on stand: Messages with 12 unread badge
5. iPad propped: Twitter/X feed scrolling notifications

DESK BENEATH:
- Almost invisible under screen glow
- Empty coffee cup pushed aside
- Closed notebook (no time to write)
- Glasses on desk (gave up wearing)
- Crumpled paper ball

THE PERSON:
- Silhouette only, backlit by screens
- Sitting in chair facing away from camera
- We don't see face - we ARE them
- Hands visible at keyboard, frozen
- "Where do I even start" pose

CAMERA: Canon R5 with 35mm f/1.8
From behind person. All screens in frame.
Dark room, screens provide all light. Focus on screens, person is silhouette.

LIGHTING: Only screens. Each different color temperature.
Multi-colored chaotic light. Blue, white, warm mixing. Person in shadow.

COLOR: High contrast (dark room, bright screens). Cool, clinical, anxious.
Screen variety creates chaos. Desaturated except screens.

Modern information anxiety. All needs attention. Tyranny of inbox.
NO Matrix hacking imagery. NO green text black background."""
    },

    "voice-capture": {
        "aspect": "16:9",
        "prompt": """A founder (man, early 40s, Caucasian) speaking voice note into phone while walking outside - modern way of capturing ideas in motion.

PERSON:
- Well-dressed casual (expensive basic - Loro Piana sweater, nice jeans)
- AirPods Pro in both ears
- Phone at chest height, speaking toward it
- Expression: Animated, mid-sentence, idea-excited
- Walking slightly fast (has somewhere to be but needed to capture thought)
- Slight smile (good idea)
- Apple Watch visible

THE MOMENT:
- Leaving gym (athletic bag over shoulder) or walking from coffee meeting
- Idea hit between places
- Not stopping, capturing while moving

ENVIRONMENT:
- Urban sidewalk (any nice city)
- Morning light (10 AM-ish)
- Some foot traffic
- Nice buildings background
- Trees with dappled light
- Good weather (no coat)

PHONE SCREEN (visible):
- Voice Memos app open
- Recording waveform visible
- Duration: "0:23" (been going a bit)
- Visual proof of idea capture

CAMERA: Canon R5 with 70-200mm f/2.8 at 85mm
Street photography style. From across street or distance. Candid feel.
Shallow depth of field, background soft.

LIGHTING: Natural daylight. Dappled tree light. Warm morning sun. No flash.

COLOR: Clean natural. Slight warmth. High-end street photography. Magazine editorial.

Ideas don't wait. He'll listen later and it becomes something.
NO posed "speaking into phone" stock. NO perfect studio lighting."""
    },

    "board-prep": {
        "aspect": "16:9",
        "prompt": """Night before board meeting - founder alone in office at 11 PM, rehearsing presentation one last time.

PERSON:
- Non-binary founder, late 30s, mixed race
- Business casual disheveled (blazer off, hung on chair)
- Standing by whiteboard, marker in hand
- Expression: Focused, murmuring to themselves
- Making notes, rehearsing answers
- Alone, preparing

OFFICE (late night):
- Mostly dark floor, only their area lit
- Standing whiteboard with presentation notes
- Laptop on desk showing slide deck
- Empty conference room visible through glass (where meeting will be)
- Pizza box with 2 slices left
- Multiple coffee cups (timeline of night)
- Phone charging (ignoring it)
- Printed board materials stack
- Sticky notes with potential hard questions

WHITEBOARD:
- Key metrics written
- Bullet points for tough questions
- Some crossed out (revised thinking)
- Org chart
- "WHY?" written and circled (finding the story)

CAMERA: Sony A7III with 50mm f/1.2
Through glass wall of their office. Glass creates subtle reflection.
Focus through glass on founder. The loneliness of leadership.

LIGHTING: Desk lamp (warm). Whiteboard light. Computer glow.
Everything else dark. Small pool of light in dark office.

COLOR: Warm in their area, cool darkness around. High contrast. Cinematic.

Work that happens when no one sees. Preparation is private.
NO drama or crisis energy. NO crying/despair."""
    },

    "inbox-2am": {
        "aspect": "16:9",
        "prompt": """Laptop screen showing email inbox at 2:13 AM - just the screen, viewer is the founder who can't sleep.

SCREEN:
- Gmail or Apple Mail inbox
- Unread: 156
- Email previews visible:
  - "Re: Q4 numbers - need to discuss" (investor)
  - "URGENT: Production issue" (red flag)
  - "Your term sheet draft" (law firm)
  - "Team morale check-in?" (Head of People)
  - "Customer complaint escalation"
- Mix of read and unread
- Founder's inbox, not employee's

CONTEXT AROUND LAPTOP:
- Bedroom or home office corner
- Obviously very late
- Clock showing 2:13 AM
- Empty water glass on nightstand
- Phone face-down (tried to ignore)
- Prescription sleep aid bottle visible
- Tangled blanket (got up from bed)
- Dim lamp on

THE LAPTOP:
- MacBook Pro with 7% battery
- Charger not plugged (came to quickly check)
- The "just one more look" trap
- Screen brightness too high for 2 AM

CAMERA: iPhone 14 Pro
From bed/couch perspective. Laptop is focus. Shallow depth of field.

LIGHTING: Laptop screen main light. Small lamp dim amber fill.
Blue screen harsh against darkness. Unhealthy glow of insomnia email.

COLOR: Blue/cool screen vs warm lamp. Dark and moody.
Specific color of screen at night. Unsettling.

Founder's insomnia. "I'll just check quickly." Weight at 2 AM.
NO dramatic posing. NO face visible (we ARE the person). Honest about unhealthy side."""
    },

    "first-customer": {
        "aspect": "16:9",
        "prompt": """Two co-founders looking at laptop showing first real customer signed up - the moment that matters.

CO-FOUNDERS:
- Founder 1: Woman, early 30s, South Asian, standing
- Founder 2: Man, late 20s, Black, sitting
- Casual startup clothes (hoodies, jeans)
- Both looking at screen with controlled excitement
- Expression: Trying not to get too excited, but clearly excited
- Moment right after it happened
- Maybe one pointing at screen

THE SCREEN:
- Dashboard showing "1" customer/subscriber
- Or Stripe notification showing first payment
- Or email "Contract signed"
- Proof of concept
- Small number, huge significance

THE OFFICE:
- Early-stage startup office (or apartment/garage)
- Signs of bootstrapping (IKEA desk, mismatched chairs)
- Whiteboard with early roadmap
- Some boxes or minimal decoration
- Natural window light
- Real workspace, not fancy

OTHER DETAILS:
- Coffee cups (modest celebration)
- Phone with Slack open (about to tell someone)
- Early-stage reality
- Human moment, not corporate signing

CAMERA: Sony A7C with 35mm f/1.8
Documentary style. Candid moment. Both people and screen in frame. Natural depth of field.

LIGHTING: Natural window light. Screen glow. Nothing fancy. Real office lighting.

COLOR: Warm, optimistic. Natural documentary. Slight lift in shadows (hope).

The moment it becomes real. Quiet excitement. "Someone actually wants this."
NO cheering/jumping. NO champagne. NO corporate handshake. Emotion controlled, private."""
    }
}


def main():
    print("=" * 60)
    print("AI PRESENTATION IMAGE GENERATOR")
    print("=" * 60)

    # Check API key
    if API_KEY == "YOUR_GEMINI_API_KEY_HERE":
        print("\n❌ ERROR: Please set your API key!")
        print("   Open this file and replace 'YOUR_GEMINI_API_KEY_HERE'")
        print("   with your actual Gemini API key.")
        print("\n   Get your key at: https://makersuite.google.com/app/apikey")
        return

    # Install dependencies if needed
    print("\n[1/5] Checking dependencies...")
    try:
        import google.generativeai as genai
        from PIL import Image
        import git
        print("   ✓ All dependencies installed")
    except ImportError as e:
        print(f"   Installing missing dependencies...")
        subprocess.run(["pip", "install", "google-generativeai", "Pillow", "gitpython"], check=True)
        import google.generativeai as genai
        from PIL import Image
        import git

    # Configure API
    print("\n[2/5] Configuring Gemini API...")
    genai.configure(api_key=API_KEY)

    # Create output directory
    output_dir = Path("generated_images")
    output_dir.mkdir(exist_ok=True)
    print(f"   ✓ Output directory: {output_dir.absolute()}")

    # Generate images
    print("\n[3/5] Generating images...")
    print("-" * 60)

    generated_files = []

    for i, (name, data) in enumerate(PROMPTS.items(), 1):
        print(f"\n   [{i}/{len(PROMPTS)}] Generating: {name}")

        try:
            # Use Imagen model through Gemini
            model = genai.ImageGenerationModel("imagen-3.0-generate-001")

            # Set aspect ratio
            aspect = data.get("aspect", "16:9")

            # Add negative prompt
            full_prompt = data["prompt"] + """

NEGATIVE: stock photo, artificial lighting, perfect skin, HDR, oversaturated, plastic, CGI, clipart, illustration, cartoon, anime, watermark, text overlay"""

            # Generate
            result = model.generate_images(
                prompt=full_prompt,
                number_of_images=1,
                aspect_ratio=aspect,
                safety_filter_level="block_only_high",
                person_generation="allow_adult"
            )

            # Save
            output_path = output_dir / f"{name}.png"
            result.images[0].save(str(output_path))
            generated_files.append(output_path)
            print(f"       ✓ Saved: {output_path}")

            # Rate limiting
            time.sleep(2)

        except Exception as e:
            print(f"       ✗ Error: {str(e)}")
            print(f"         Trying alternative approach...")

            try:
                # Fallback: Use Gemini Pro Vision with text-to-image
                model = genai.GenerativeModel('gemini-1.5-pro')
                # This won't generate images but will indicate the issue
                print(f"         Note: Image generation may require Vertex AI")
                print(f"         See: https://cloud.google.com/vertex-ai/docs/generative-ai/image/generate-images")
            except:
                pass

    # Clone/update repo and copy files
    print("\n[4/5] Preparing to push to GitHub...")

    if generated_files:
        repo_dir = Path("threads-manager-temp")

        try:
            # Clone if not exists
            if not repo_dir.exists():
                print(f"   Cloning repository...")
                git.Repo.clone_from(REPO_URL, repo_dir)

            repo = git.Repo(repo_dir)

            # Checkout branch
            print(f"   Checking out branch: {BRANCH}")
            repo.git.fetch("origin", BRANCH)
            repo.git.checkout(BRANCH)

            # Copy images
            target_dir = repo_dir / OUTPUT_FOLDER
            target_dir.mkdir(parents=True, exist_ok=True)

            import shutil
            for f in generated_files:
                shutil.copy(f, target_dir / f.name)
                print(f"   ✓ Copied: {f.name}")

            # Commit and push
            print("\n[5/5] Pushing to GitHub...")
            repo.index.add([str(OUTPUT_FOLDER)])
            repo.index.commit("Add generated photorealistic images for slides")
            repo.remote("origin").push(BRANCH)
            print("   ✓ Successfully pushed to GitHub!")

        except Exception as e:
            print(f"\n   ⚠ Git error: {str(e)}")
            print(f"\n   Manual push instructions:")
            print(f"   1. cd {repo_dir.absolute()}")
            print(f"   2. git add {OUTPUT_FOLDER}")
            print(f'   3. git commit -m "Add generated images"')
            print(f"   4. git push origin {BRANCH}")

    print("\n" + "=" * 60)
    print("COMPLETE!")
    print("=" * 60)
    print(f"\nGenerated {len(generated_files)} images")
    print(f"Location: {output_dir.absolute()}")
    print(f"\nRepository: {REPO_URL}")
    print(f"Branch: {BRANCH}")


if __name__ == "__main__":
    main()
