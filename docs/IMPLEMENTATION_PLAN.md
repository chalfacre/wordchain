You are implementing an iOS app called Wordchain Surgery.

Read all attached files first:
- wordchain-surgery-PRD.docx
- wordchain-surgery-GDD.docx
- wordchain-surgery-TAD.docx
- wordchain-marketing-plan.docx
- ws.html prototype
- React UI mockup code

Goal:
Build a production-ready native iOS SwiftUI app for Wordchain Surgery, a premium daily brain-teaser word game where players morph one word into another, one letter at a time, while obeying a theme constraint.

Primary requirements:
1. Use SwiftUI and Swift.
2. Target iOS 16+.
3. Follow MVVM architecture.
4. Implement the core game loop first before monetization or leaderboard features.
5. Match the visual direction from the React mockup:
   - near-black background
   - dark cards
   - gold changed-letter highlights
   - green target/success state
   - blue start word
   - red theme badge
   - premium, calm, focused puzzle-game feel
6. Do not use cartoon mascots or bright casual-game styling.
7. Preserve the game identity: intelligent, elegant, satisfying, shareable.

Core game rules:
- Player starts with a start word and must reach a target word.
- Each move changes the word by exactly one operation:
  - Swap: replace one letter
  - Add: insert one letter
  - Remove: delete one letter
- Every submitted word must:
  - exist in the dictionary
  - satisfy the active theme if one is active
  - differ from the previous word by the selected operation
  - not already appear in the chain
- Puzzle is solved when the submitted word equals the target word.

Implement these screens first:
1. HomeView
   - app title
   - daily puzzle card
   - streak / solved / stars stats
   - level tier preview
   - bottom tab navigation

2. GameView
   - puzzle header: Daily or Level, theme, par, move count
   - target word tiles
   - current word tiles
   - changed letter highlight
   - operation selector: Swap / Add / Remove
   - word input
   - Apply button
   - validation feedback strip
   - chain history
   - Undo button
   - Hint button

3. WinView
   - solved animation
   - moves, time, score
   - star rating
   - full chain visualization
   - Share Result button
   - Next Puzzle button

4. ShareCardRenderer
   - render a 1080x1080 image
   - dark background
   - puzzle number
   - theme badge
   - chain tiles
   - move count
   - par/star indicator
   - no app name or download link

Initial implementation scope:
Phase 1:
- Static local puzzles
- Local bundled dictionary files
- Local theme word lists
- Game engine
- Validation
- Chain state
- Undo
- Hint from predefined hintChain
- Win state
- Share card generation

Phase 2:
- Daily puzzle repository
- Local persistence
- streak tracking
- completed puzzle history
- level progression

Phase 3:
- StoreKit subscription
- leaderboard
- CloudKit sync
- analytics
- notifications

Suggested project structure:
WordchainSurgery/
  App/
  Features/
    Home/
    Game/
    Daily/
    Leaderboard/
    Profile/
    Onboarding/
  Engine/
    WordValidator.swift
    ChainBuilder.swift
    ScoreCalculator.swift
    BFSSolver.swift
  Data/
    Models/
    Repositories/
    Services/
  Resources/
    Words/
    Puzzles/
  Tests/

Build the app incrementally. After each phase:
- run tests
- fix compiler errors
- remove dead code
- keep UI consistent with the mockup
- do not proceed to later phases until the current phase works

Important:
Do not create a backend.
Do not implement Android.
Do not implement multiplayer.
Do not overbuild social features.
Do not use third-party UI frameworks.
Do not replace the game mechanic with a generic word game.

Deliverables:
1. Working Xcode project
2. SwiftUI screens matching the mockup
3. Game engine unit tests
4. Sample bundled puzzles
5. Sample bundled dictionaries
6. README with build/run instructions
7. Notes on what remains for App Store production
