"use client";

const TOP_KEYWORDS = [
  "citrus",
  "lemon",
  "bergamot",
  "sea salt",
  "bright",
  "fresh",
  "green",
];

const HEART_KEYWORDS = [
  "rose",
  "jasmine",
  "floral",
  "lavender",
  "chamomile",
  "blossom",
];

const BASE_KEYWORDS = [
  "vanilla",
  "sandalwood",
  "musk",
  "amber",
  "cocoa",
  "cinnamon",
  "wood",
];

interface NoteTag {
  word: string;
  tier: "top" | "heart" | "base";
}

function parseScent(scent: string): NoteTag[] {
  const raw = scent
    .split(/[,.]/)
    .flatMap((part) => part.split(/\band\b/i))
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);

  const notes: NoteTag[] = [];

  for (const chunk of raw) {
    let matched = false;
    for (const kw of TOP_KEYWORDS) {
      if (chunk.includes(kw)) {
        notes.push({ word: chunk, tier: "top" });
        matched = true;
        break;
      }
    }
    if (matched) continue;
    for (const kw of HEART_KEYWORDS) {
      if (chunk.includes(kw)) {
        notes.push({ word: chunk, tier: "heart" });
        matched = true;
        break;
      }
    }
    if (matched) continue;
    for (const kw of BASE_KEYWORDS) {
      if (chunk.includes(kw)) {
        notes.push({ word: chunk, tier: "base" });
        matched = true;
        break;
      }
    }
    // If no keyword match, skip this chunk gracefully
  }

  return notes;
}

export default function FragranceNotes({ scent }: { scent: string }) {
  const notes = parseScent(scent);

  if (notes.length === 0) {
    const allChunks = scent
      .split(/[,.]/)
      .flatMap((part) => part.split(/\band\b/i))
      .map((s) => s.trim())
      .filter(Boolean);

    return (
      <div className="p-4 rounded-xl bg-brand-gold/5 border border-brand-gold/15">
        <div className="text-[10px] tracking-[0.2em] uppercase text-brand-brown/60 mb-2">
          Signature Scent
        </div>
        <div className="flex flex-wrap gap-1.5">
          {allChunks.map((c) => (
            <span
              key={c}
              className="px-3 py-1 bg-white/10 rounded-full text-xs text-brand-gold/80"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    );
  }

  const tiers: { label: string; key: "top" | "heart" | "base"; bg: string }[] =
    [
      {
        label: "TOP NOTES",
        key: "top",
        bg: "bg-brand-gold/5 border-brand-gold/10",
      },
      {
        label: "HEART NOTES",
        key: "heart",
        bg: "bg-brand-gold/10 border-brand-gold/15",
      },
      {
        label: "BASE NOTES",
        key: "base",
        bg: "bg-brand-gold/15 border-brand-gold/20",
      },
    ];

  const grouped = {
    top: notes.filter((n) => n.tier === "top"),
    heart: notes.filter((n) => n.tier === "heart"),
    base: notes.filter((n) => n.tier === "base"),
  };

  return (
    <div className="space-y-3">
      {tiers.map((tier) => {
        const tierNotes = grouped[tier.key];
        if (tierNotes.length === 0) return null;
        return (
          <div key={tier.key} className={`p-4 rounded-xl border ${tier.bg}`}>
            <div className="text-[10px] tracking-[0.2em] uppercase text-brand-brown/60 mb-2">
              {tier.label}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tierNotes.map((n) => (
                <span
                  key={n.word}
                  className="px-3 py-1 bg-white/10 rounded-full text-xs"
                >
                  {n.word}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
