import React, { useState } from "react";
import { motion } from "framer-motion";
import { Share2, Trophy, User, Home, Lightbulb, Undo2, Lock, Flame, Star, Settings, ChevronRight, Sparkles } from "lucide-react";

const theme = {
  bg: "#0D0D10",
  surface: "#16161D",
  card: "#1F1F29",
  border: "#343442",
  text: "#F4F0E8",
  muted: "#8B8A99",
  gold: "#E8C547",
  goldSoft: "rgba(232,197,71,0.14)",
  green: "#5DE89A",
  greenSoft: "rgba(93,232,154,0.12)",
  blue: "#47C5E8",
  blueSoft: "rgba(71,197,232,0.12)",
  red: "#E84747",
};

function PhoneFrame({ children, label }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">{label}</div>
      <div className="relative h-[812px] w-[375px] overflow-hidden rounded-[46px] border border-zinc-700 bg-[#0D0D10] shadow-2xl shadow-black/60">
        <div className="absolute left-1/2 top-2 z-20 h-7 w-32 -translate-x-1/2 rounded-full bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_5%,rgba(232,197,71,.12),transparent_35%),radial-gradient(circle_at_90%_85%,rgba(71,197,232,.11),transparent_38%)]" />
        <div className="relative z-10 h-full px-5 pb-5 pt-12 text-[#F4F0E8]">{children}</div>
      </div>
    </div>
  );
}

function Tile({ letter, mode = "default", small = false }) {
  const styles = {
    default: "border-[#343442] bg-[#252530] text-[#F4F0E8]",
    changed: "border-[#E8C547] bg-[rgba(232,197,71,.14)] text-[#E8C547] shadow-[0_0_20px_rgba(232,197,71,.16)]",
    target: "border-[#5DE89A] bg-[rgba(93,232,154,.12)] text-[#5DE89A] shadow-[0_0_20px_rgba(93,232,154,.14)]",
    start: "border-[#47C5E8] bg-[rgba(71,197,232,.12)] text-[#47C5E8]",
  };
  return (
    <motion.div
      initial={{ scale: 0.94, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`${small ? "h-8 w-8 rounded-lg text-base" : "h-12 w-11 rounded-xl text-2xl"} flex items-center justify-center border font-serif font-black ${styles[mode]}`}
    >
      {letter}
    </motion.div>
  );
}

function WordTiles({ word, changedIndex, target, start, small = false }) {
  return (
    <div className="flex justify-center gap-1.5">
      {word.split("").map((l, i) => (
        <Tile key={`${word}-${i}`} letter={l} small={small} mode={target ? "target" : start ? "start" : i === changedIndex ? "changed" : "default"} />
      ))}
    </div>
  );
}

function Pill({ children, tone = "gold" }) {
  const map = {
    gold: "border-[#E8C547]/40 bg-[rgba(232,197,71,.12)] text-[#E8C547]",
    green: "border-[#5DE89A]/40 bg-[rgba(93,232,154,.12)] text-[#5DE89A]",
    blue: "border-[#47C5E8]/40 bg-[rgba(71,197,232,.12)] text-[#47C5E8]",
    red: "border-[#E84747]/40 bg-[rgba(232,71,71,.12)] text-[#E84747]",
    dark: "border-[#343442] bg-[#1F1F29] text-[#8B8A99]",
  };
  return <span className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${map[tone]}`}>{children}</span>;
}

function BottomNav({ active = "play" }) {
  const items = [
    ["play", Home, "Play"],
    ["daily", Flame, "Daily"],
    ["ranks", Trophy, "Ranks"],
    ["profile", User, "Profile"],
  ];
  return (
    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-around rounded-3xl border border-[#343442] bg-[#16161D]/95 px-3 py-3 backdrop-blur">
      {items.map(([key, Icon, label]) => (
        <div key={key} className={`flex flex-col items-center gap-1 text-[10px] ${active === key ? "text-[#E8C547]" : "text-[#686878]"}`}>
          <Icon size={18} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function HomeScreen() {
  return (
    <PhoneFrame label="01 Home / Daily Hub">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="font-serif text-3xl font-black tracking-tight">Wordchain</div>
          <div className="text-xs uppercase tracking-[0.24em] text-[#8B8A99]">Surgery</div>
        </div>
        <button className="rounded-full border border-[#343442] bg-[#1F1F29] p-3"><Settings size={18} /></button>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-2">
        <div className="rounded-2xl border border-[#343442] bg-[#16161D] p-3 text-center">
          <Flame className="mx-auto mb-1 text-[#E8C547]" size={18} />
          <div className="text-xl font-bold">12</div><div className="text-[10px] text-[#8B8A99]">Streak</div>
        </div>
        <div className="rounded-2xl border border-[#343442] bg-[#16161D] p-3 text-center">
          <Trophy className="mx-auto mb-1 text-[#47C5E8]" size={18} />
          <div className="text-xl font-bold">38</div><div className="text-[10px] text-[#8B8A99]">Solved</div>
        </div>
        <div className="rounded-2xl border border-[#343442] bg-[#16161D] p-3 text-center">
          <Star className="mx-auto mb-1 text-[#5DE89A]" size={18} />
          <div className="text-xl font-bold">91</div><div className="text-[10px] text-[#8B8A99]">Stars</div>
        </div>
      </div>

      <motion.div initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="rounded-[30px] border border-[#E8C547]/30 bg-gradient-to-br from-[#24202A] to-[#15151B] p-5 shadow-xl shadow-black/30">
        <div className="mb-4 flex items-center justify-between">
          <Pill tone="gold">Daily #47</Pill>
          <Pill tone="red">🐾 Animals only</Pill>
        </div>
        <div className="mb-2 text-xs uppercase tracking-[0.25em] text-[#8B8A99]">Today's operation</div>
        <div className="mb-5 flex items-center justify-between">
          <WordTiles word="CAT" start small />
          <div className="text-[#8B8A99]">→</div>
          <WordTiles word="JAY" target small />
        </div>
        <div className="mb-5 rounded-2xl border border-[#343442] bg-[#0D0D10]/70 p-4 text-sm leading-relaxed text-[#C7C5D1]">
          Morph the start word into the target. Every step must be an animal.
        </div>
        <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#E8C547] px-5 py-4 font-bold text-[#0D0D10] shadow-lg shadow-[#E8C547]/20">
          Start Today's Puzzle <ChevronRight size={18} />
        </button>
      </motion.div>

      <div className="mt-5 flex items-center justify-between">
        <div className="text-xs uppercase tracking-[0.22em] text-[#8B8A99]">Level Rounds</div>
        <div className="text-xs text-[#E8C547]">View all</div>
      </div>
      <div className="mt-3 space-y-3">
        {[['Intern','10/10','Free Play','★★★'],['Resident','8/10','Animals','★★☆'],['Attending','Locked','Food + Body','🔒']].map((row, idx) => (
          <div key={row[0]} className="flex items-center justify-between rounded-2xl border border-[#343442] bg-[#16161D] p-4">
            <div><div className="font-bold">{row[0]}</div><div className="mt-1 text-xs text-[#8B8A99]">{row[2]}</div></div>
            <div className="text-right"><div className={idx === 2 ? "text-[#8B8A99]" : "text-[#E8C547]"}>{row[3]}</div><div className="mt-1 text-xs text-[#8B8A99]">{row[1]}</div></div>
          </div>
        ))}
      </div>
      <BottomNav active="play" />
    </PhoneFrame>
  );
}

function GameScreen() {
  const [op, setOp] = useState("Swap");
  return (
    <PhoneFrame label="02 Active Puzzle">
      <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#8B8A99]">
        <span>Daily #47</span><span className="text-[#E8C547]">Par 3</span><span>Moves 2</span>
      </div>
      <div className="mb-4 rounded-3xl border border-[#343442] bg-[#16161D] p-4">
        <div className="mb-3 flex items-center justify-between"><span className="text-[10px] uppercase tracking-[0.25em] text-[#8B8A99]">Target</span><Pill tone="red">🐾 Animals only</Pill></div>
        <WordTiles word="JAY" target />
      </div>
      <div className="rounded-[32px] border border-[#343442] bg-[#16161D] p-5">
        <div className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#8B8A99]">Current Word</div>
        <WordTiles word="RAY" changedIndex={0} />
        <div className="mt-4 rounded-2xl border border-[#E8C547]/40 bg-[rgba(232,197,71,.09)] p-3 text-center text-xs text-[#E8C547]">Changed letter is highlighted</div>
      </div>
      <div className="mt-4 rounded-[28px] border border-[#343442] bg-[#16161D] p-4">
        <div className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#8B8A99]">Choose Operation</div>
        <div className="mb-3 grid grid-cols-3 gap-2">
          {['Swap','Add','Remove'].map(x => <button key={x} onClick={() => setOp(x)} className={`rounded-2xl border py-3 text-xs font-bold ${op===x?'border-[#E8C547] bg-[rgba(232,197,71,.12)] text-[#E8C547]':'border-[#343442] bg-[#1F1F29] text-[#8B8A99]'}`}>{x}</button>)}
        </div>
        <div className="mb-3 rounded-2xl border-l-4 border-[#E8C547] bg-[#1F1F29] p-3 text-xs text-[#B9B7C6]">{op === 'Swap' ? 'Replace one letter. RAY → JAY solves it.' : op === 'Add' ? 'Insert one letter anywhere.' : 'Remove one letter anywhere.'}</div>
        <div className="flex gap-2">
          <div className="flex-1 rounded-2xl border border-[#E8C547] bg-[#1F1F29] px-4 py-4 text-center font-mono text-xl tracking-[0.35em] text-[#F4F0E8]">JAY</div>
          <button className="rounded-2xl bg-[#E8C547] px-5 font-bold text-[#0D0D10]">Apply</button>
        </div>
        <div className="mt-3 rounded-2xl border border-[#5DE89A]/30 bg-[rgba(93,232,154,.1)] p-3 text-xs text-[#5DE89A]">✓ Valid animal. One move from target.</div>
      </div>
      <div className="mt-4 rounded-[26px] border border-[#343442] bg-[#16161D] p-4">
        <div className="mb-3 flex items-center justify-between"><span className="text-[10px] uppercase tracking-[0.25em] text-[#8B8A99]">Your Chain</span><span className="text-xs text-[#E8C547]">2 / 3 moves</span></div>
        <div className="flex items-center gap-2 overflow-hidden text-xs">
          <Pill tone="blue">CAT</Pill><span className="text-[#686878]">→</span><Pill tone="dark">RAT</Pill><span className="text-[#686878]">→</span><Pill tone="gold">RAY</Pill>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 rounded-2xl border border-[#343442] bg-[#1F1F29] py-3 text-xs text-[#8B8A99]"><Undo2 size={15}/>Undo</button>
        <button className="flex items-center justify-center gap-2 rounded-2xl border border-[#47C5E8]/40 bg-[rgba(71,197,232,.1)] py-3 text-xs text-[#47C5E8]"><Lightbulb size={15}/>Hint</button>
      </div>
      <BottomNav active="daily" />
    </PhoneFrame>
  );
}

function WinScreen() {
  return (
    <PhoneFrame label="03 Win + Share Moment">
      <div className="absolute inset-x-0 top-12 px-5 opacity-45 blur-[1px]">
        <GameScreenGhost />
      </div>
      <motion.div initial={{ y: 260 }} animate={{ y: 0 }} className="absolute bottom-0 left-0 right-0 rounded-t-[38px] border-t border-[#5DE89A]/40 bg-[#101014]/95 p-6 pb-8 shadow-2xl backdrop-blur-xl">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#5DE89A]/50 bg-[rgba(93,232,154,.13)] text-[#5DE89A] shadow-[0_0_40px_rgba(93,232,154,.18)]"><Sparkles size={30}/></div>
        <div className="text-center font-serif text-5xl font-black text-[#5DE89A]">Solved!</div>
        <div className="mt-2 text-center text-sm text-[#8B8A99]">Daily #47 complete</div>
        <div className="my-5 grid grid-cols-3 gap-2">
          {[['3','Moves'],['1:18','Time'],['150','Score']].map(x => <div key={x[1]} className="rounded-2xl border border-[#343442] bg-[#1F1F29] p-3 text-center"><div className="text-xl font-bold">{x[0]}</div><div className="text-[10px] text-[#8B8A99]">{x[1]}</div></div>)}
        </div>
        <div className="mb-4 text-center text-[#E8C547]">★★★</div>
        <div className="mb-5 rounded-3xl border border-[#343442] bg-[#16161D] p-4">
          <div className="mb-3 text-center text-[10px] uppercase tracking-[0.25em] text-[#8B8A99]">Your surgical chain</div>
          <div className="flex items-center justify-center gap-2"><Pill tone="blue">CAT</Pill><span className="text-[#686878]">→</span><Pill tone="dark">RAT</Pill><span className="text-[#686878]">→</span><Pill tone="dark">RAY</Pill><span className="text-[#686878]">→</span><Pill tone="green">JAY</Pill></div>
        </div>
        <button className="mb-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#5DE89A] py-4 font-bold text-[#0D0D10]"><Share2 size={18}/>Share Result</button>
        <button className="w-full rounded-2xl border border-[#343442] bg-[#1F1F29] py-4 font-bold text-[#F4F0E8]">Next Puzzle</button>
      </motion.div>
    </PhoneFrame>
  );
}

function GameScreenGhost() {
  return <div className="space-y-4"><div className="h-24 rounded-3xl bg-[#16161D]"/><div className="h-36 rounded-3xl bg-[#16161D]"/><div className="h-48 rounded-3xl bg-[#16161D]"/></div>;
}

function ShareCard() {
  return (
    <PhoneFrame label="04 Generated Share Card Preview">
      <div className="mt-20 rounded-[34px] border border-[#343442] bg-[#0D0D10] p-5 shadow-2xl shadow-black/40">
        <div className="mb-8 flex items-center justify-between"><div className="text-2xl font-black text-[#E8C547]">#47</div><Pill tone="red">🐾 Animals</Pill></div>
        <div className="mb-3 text-center text-xs uppercase tracking-[0.25em] text-[#8B8A99]">Solved in</div>
        <div className="mb-8 text-center font-serif text-6xl font-black text-[#F4F0E8]">3 Moves</div>
        <div className="space-y-5">
          {['CAT','RAT','RAY','JAY'].map((word, idx) => <div key={word} className="flex flex-col items-center gap-3"><WordTiles word={word} small start={idx===0} target={idx===3} changedIndex={idx>0 && idx<3 ? 0 : undefined}/>{idx<3 && <div className="text-[#686878]">↓</div>}</div>)}
        </div>
        <div className="mt-8 rounded-2xl border border-[#E8C547]/30 bg-[rgba(232,197,71,.1)] p-4 text-center text-[#E8C547]">Par 3 ★★★</div>
      </div>
      <div className="mt-5 text-center text-xs leading-relaxed text-[#8B8A99]">No app name. No download link. The chain is the hook.</div>
    </PhoneFrame>
  );
}

export default function WordchainSurgeryMockup() {
  return (
    <div className="min-h-screen bg-[#09090B] p-8 text-[#F4F0E8]">
      <div className="mx-auto mb-8 max-w-5xl text-center">
        <div className="mb-2 text-xs uppercase tracking-[0.3em] text-[#E8C547]">iOS Game Experience Mockup</div>
        <h1 className="font-serif text-5xl font-black tracking-tight">Wordchain Surgery</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-zinc-400">A premium, focused brain-teaser interface built around the signature loop: morph the word, obey the theme, celebrate the chain, and share the solve.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <HomeScreen />
        <GameScreen />
        <WinScreen />
        <ShareCard />
      </div>
      <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-950 p-6 text-sm text-zinc-400">
        <div className="mb-3 text-xs uppercase tracking-[0.25em] text-[#E8C547]">Developer Notes</div>
        <div className="grid gap-4 md:grid-cols-3">
          <div><b className="text-zinc-200">SwiftUI structure:</b> HomeView, GameView, WinView, ShareCardRenderer, and bottom TabView map directly to the mockup screens.</div>
          <div><b className="text-zinc-200">Interaction model:</b> changed letters should pop, invalid input should shake, win sheet should delay 300ms after the final submit.</div>
          <div><b className="text-zinc-200">Visual system:</b> dark surfaces, gold action/highlight, green target/success, blue start word, red theme constraint.</div>
        </div>
      </div>
    </div>
  );
}
