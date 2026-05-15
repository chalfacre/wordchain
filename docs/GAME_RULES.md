# Wordchain Surgery — GAME_RULES.md

Version: 1.0  
Platform: iOS 16+  
Framework: SwiftUI + Swift  
Architecture: MVVM  
Status: Production Gameplay Rules Reference

---

# 1. Purpose

This document defines the complete gameplay rules and validation behavior for Wordchain Surgery.

This document is the authoritative source for:
- gameplay mechanics
- validation rules
- puzzle behavior
- scoring
- hint logic
- progression behavior
- edge-case handling

This document is intended for:
- engineers
- AI coding agents
- QA testers
- puzzle designers
- future platform ports

This document does NOT define:
- visual design system
- screen layouts
- backend architecture
- monetization UI
- App Store marketing assets

---

# 2. Game Overview

Wordchain Surgery is a premium word puzzle game where the player transforms one word into another one move at a time.

The defining mechanic:

> Every intermediate word must satisfy the active puzzle theme.

The player must simultaneously reason about:
- word adjacency
- operation legality
- category membership
- route efficiency

The experience should feel:
- intelligent
- calm
- strategic
- elegant
- satisfying
- shareable

---

# 3. Core Gameplay Loop

Each puzzle contains:
- Start word
- Target word
- Theme
- Allowed operations
- Par value
- Hint chain

The player:
1. Reviews the puzzle
2. Chooses an operation
3. Submits a valid word
4. Builds a valid chain
5. Reaches the target word
6. Receives score + stars
7. Shares result

---

# 4. Puzzle Data Structure

Each puzzle must conform to the following schema:

```json
{
  "id": "L001",
  "startWord": "CAT",
  "targetWord": "JAY",
  "theme": "animals",
  "themeMode": "strict",
  "allowedOperations": ["swap"],
  "par": 3,
  "hintChain": ["CAT", "RAT", "RAY", "JAY"],
  "difficulty": "easy"
}
```

---

# 5. Themes

## 5.1 Free Play

No theme restriction.

All valid dictionary words are allowed.

---

## 5.2 Animals

Words representing:
- mammals
- birds
- reptiles
- fish
- insects
- mythological creatures if explicitly included

Examples:
- cat
- rat
- ray
- jay
- dove
- cobra

---

## 5.3 Food

Words representing:
- foods
- ingredients
- drinks
- condiments

Examples:
- tart
- kale
- corn
- bun

---

## 5.4 Body Parts

Words representing:
- anatomy
- body regions
- medical anatomical terms

Examples:
- arm
- hip
- waist
- brain

---

# 6. Theme Modes

## 6.1 Strict Theme Mode

All words in the chain must satisfy the theme:
- start word
- intermediate words
- target word

---

## 6.2 Endpoint Theme Mode

Only:
- start word
- target word

must satisfy the theme.

Intermediate words may be unrestricted dictionary words.

---

# 7. Word Validation Pipeline

A submitted word is valid ONLY if all validation checks pass.

Validation order:

1. Non-empty
2. Character validation
3. Length validation
4. Operation validation
5. Dictionary validation
6. Theme validation
7. Duplicate-chain validation

If any validation fails:
- move is rejected
- chain remains unchanged
- feedback strip displays error
- invalid haptic triggers

---

# 8. Dictionary Rules

A valid dictionary word:
- exists in bundled dictionary
- contains alphabetic characters only
- is between 2 and 10 characters
- is normalized to lowercase internally

The dictionary is authoritative.

---

# 9. Operations

Exactly ONE operation must occur per move.

## 9.1 Swap Operation

Replace exactly one letter.

Valid Example:

```text
CAT → RAT
```

## 9.2 Add Operation

Insert exactly one letter anywhere.

Valid Example:

```text
CAT → CART
```

## 9.3 Remove Operation

Delete exactly one letter anywhere.

Valid Example:

```text
CART → CAT
```

---

# 10. Chain Rules

The chain:
- starts with the start word
- grows by one valid move at a time
- cannot contain duplicate words

Invalid:

```text
CAT → RAT → CAT
```

---

# 11. Puzzle Completion

A puzzle is solved when:

```text
submittedWord == targetWord
```

AND:
- all validation checks pass
- operation is valid
- theme requirements are satisfied

---

# 12. Par Rules

Par represents:
- the minimum possible move count

Par is:
- computed using BFS
- pre-generated
- immutable at runtime

---

# 13. Star Ratings

### Three Stars
moves == par

### Two Stars
moves == par + 1

### One Star
moves >= par + 2

---

# 14. Hint Rules

Hints reveal:
- the next word from the optimal BFS hint chain

Free users:
- 3 hints per day

Subscribers:
- unlimited hints

Each hint:
- subtracts 10 points

---

# 15. Undo Rules

Undo:
- removes the most recent chain word
- restores previous current word

Optional penalty:
- minus 5 score

---

# 16. Scoring Rules

Base score:
- 100 points

Par bonus:
- +50

Hint penalty:
- -10 per hint

Undo penalty:
- -5 per undo

Minimum score:
- 10

Streak multipliers:
- Day 7+: x1.5
- Day 30+: x2.0

---

# 17. Daily Puzzle Rules

The daily puzzle:
- is shared globally
- unlocks at local midnight
- is non-paywalled
- extends streak on completion
- supports sharing

---

# 18. Level Mode Rules

Levels are handcrafted and grouped into tiers:
- Intern
- Resident
- Attending
- Chief

---

# 19. Practice Mode Rules

Practice mode:
- allows arbitrary start/target words
- has no scoring
- has no streak impact
- has no leaderboard impact

---

# 20. Invalid Submission Behavior

When validation fails:
- move is rejected
- chain remains unchanged
- input field shakes
- feedback strip appears
- invalid haptic triggers

---

# 21. Win State Rules

When solved:
- gameplay freezes
- success haptic triggers
- win overlay animates in
- score calculates
- stars animate
- share CTA becomes primary action

---

# 22. Share Card Rules

Must include:
- puzzle number
- theme
- chain visualization
- move count
- par/stars

Must NOT include:
- app logo
- App Store badge
- download URL

Purpose:
- maximize curiosity
- encourage organic sharing

---

# 23. Offline Rules

Core gameplay must work fully offline.

Network-required systems:
- leaderboard
- IAP
- analytics
- daily puzzle fetch

---

# 24. Performance Rules

Validation:
- under 10ms

Hint generation:
- under 200ms

Share card rendering:
- under 500ms

Animations:
- 150–250ms

---

# 25. Accessibility Rules

Must support:
- Dynamic Type
- VoiceOver
- reduced motion
- high contrast mode

Minimum:
- WCAG AA contrast compliance

---

# 26. Audio Rules

Audio direction:
- subtle
- tactile
- calm
- minimal

Audio is OFF by default.

---

# 27. Haptic Rules

### Valid Move
light impact

### Invalid Move
error notification

### Hint
medium impact

### Puzzle Solved
success notification

---

# 28. Design Principles

Every gameplay system should reinforce:
- Clarity
- Depth
- Shareability

---

# 29. Engineering Requirements

Core gameplay engine must remain:
- deterministic
- testable
- offline-first
- UI-independent

---

# 30. QA Requirements

Every shipped puzzle must:
- have at least one valid path
- have BFS-verified par
- satisfy theme constraints
- avoid impossible states
- avoid soft-locks

---

# 31. Non-Goals

The game is NOT:
- multiplayer
- real-time competitive
- ad-driven
- backend-dependent
- mascot-focused

---

# 32. Future Compatibility

Architecture should support:
- additional themes
- additional operations
- puzzle packs
- Android port
- web version
- multiplayer races
- user-generated puzzles

without requiring game-engine rewrites.
