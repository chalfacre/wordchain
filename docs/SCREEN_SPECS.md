# Wordchain Surgery — Screen Specifications

## Global UI Rules

### Safe Area
- Respect iPhone safe areas
- Dynamic Island spacing required
- Bottom nav floats above safe area

### Navigation
- Bottom tab navigation persistent
- Tabs:
  - Play
  - Daily
  - Leaderboard
  - Profile

### Visual Style
- Dark premium aesthetic
- Minimal
- Calm
- No cartoon visuals
- Focus on typography and tile motion

### Motion
- subtle spring animations
- 150–250ms duration
- no exaggerated bounce

### Haptics
- Valid move: light impact
- Invalid move: error notification
- Puzzle solved: success notification

---

# HOME SCREEN

## Purpose
Primary landing page after onboarding.

## Layout Order

1. Header
2. Stats Row
3. Daily Puzzle Hero Card
4. Level Progression List
5. Bottom Navigation

---

## Header

### Left
- Wordchain title
- Surgery subtitle

### Right
- Settings icon button

### Height
72pt

---

## Stats Row

### Cards
- Current streak
- Total solved
- Total stars

### Style
- Rounded cards
- Equal width
- Small icon above number

### Height
72pt

---

## Daily Puzzle Hero Card

### Purpose
Main engagement CTA.

### Contents
- Daily puzzle number
- Theme pill
- Start word
- Target word
- Puzzle description
- Start button

### Interaction
Tap anywhere opens puzzle.

### Style
- Gold-accented
- Highest visual prominence on screen

### Animation
- Fade/slide on screen load

---

# GAME SCREEN

## Purpose
Core gameplay loop.

## Layout Order

1. Puzzle Header
2. Target Word Card
3. Current Word Card
4. Operation Selector
5. Input Area
6. Feedback Strip
7. Chain History
8. Action Buttons

---

## Puzzle Header

### Contents
- Daily # or Level #
- Theme
- Par
- Move count

### Style
Minimal horizontal metadata row.

---

## Current Word Card

### Behavior
- Current word tiles animate on successful move
- Changed letter glows gold

### Tile Size
44x48pt

---

## Operation Selector

### Buttons
- Swap
- Add
- Remove

### Interaction
Persist selected operation.

### Active State
Gold border and glow.

---

## Input Area

### Components
- Text field
- Apply button

### Rules
- Auto uppercase
- Monospace font
- Max 10 chars

### Submit
Return key submits.

---

## Feedback Strip

### Success
Green

### Error
Red

### Info
Blue

### Behavior
Auto-dismiss after 3 sec.

---

## Chain History

### Layout
Horizontal scrolling chips.

### States
- Start word blue
- Current word gold
- Previous words gray

---

# WIN SCREEN

## Presentation
Bottom-sheet modal over blurred gameplay screen.

### Animation
Slide upward with spring.

---

## Components

1. Solved icon
2. Solved headline
3. Stats cards
4. Star rating
5. Chain visualization
6. Share CTA
7. Next Puzzle CTA

---

## Share CTA

### Importance
Highest-priority post-solve action.

### Style
Large green button.

---

# SHARE CARD

## Size
1080x1080

## Must Include
- Puzzle number
- Theme
- Chain
- Move count
- Star/par rating

## Must NOT Include
- App name
- App logo
- Download link

## Visual Goal
Generate curiosity.
