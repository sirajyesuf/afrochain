import { Globe2, Lock } from "lucide-react";
import type { AfroChainEvent } from "@/app/data/events";

type FormatBadgeProps = {
  format: AfroChainEvent["format"];
};

/**
 * Access model of an event. All badges stay in the neutral blue family -
 * the four accent colours belong to the phase chips, not to status tags.
 * Filled tint = accessible with a pass, outlined = invitation only; the icon
 * carries the meaning too, never colour alone.
 */
export function FormatBadge({ format }: FormatBadgeProps) {
  if (format === "invite-only") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-600/30 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-600">
        <Lock className="h-3 w-3" aria-hidden="true" />
        Invite Only
      </span>
    );
  }

  if (format === "invite-or-vip") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-600/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-600">
        <Lock className="h-3 w-3" aria-hidden="true" />
        Invite Or VIP Pass
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-600/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-600">
      <Globe2 className="h-3 w-3" aria-hidden="true" />
      Open + VIP
    </span>
  );
}

type PhaseChipProps = {
  phase: string;
  /** Card topper colour of the event this phase belongs to. */
  accent?: string;
  active?: boolean;
  tone?: "light" | "dark";
};

/**
 * Text colour per accent background, chosen by measured contrast ratio
 * against the accent colour (WCAG 4.5:1 for bold small labels):
 * brand blue 7.0 (white), amber 6.2, sky 4.9 (navy), violet 5.7 (white).
 */
const accentText: Record<string, string> = {
  "#7c3aed": "text-white",
  "#f59e0b": "text-ink-900",
  "#0ea5e9": "text-ink-900",
  "#245a9a": "text-white",
};

/**
 * Programme phase. Each chip carries the accent colour of its event's card
 * topper, so the stepper and the cards read as one system. The active phase
 * (the one currently running) gets a ring so "where we are now" is readable
 * without relying on a text label alone.
 */
export function PhaseChip({
  phase,
  accent,
  active = false,
  tone = "light",
}: PhaseChipProps) {
  const base =
    "inline-flex items-center whitespace-nowrap rounded-full px-2 py-1 text-xs font-bold uppercase tracking-[0.08em] sm:px-3 sm:tracking-[0.18em]";

  if (accent) {
    // Only the selected phase carries a ring - the accent fill and the ring
    // together mark "you are here" in the stepper.
    const ring = active
      ? tone === "dark"
        ? "ring-2 ring-white/60 ring-offset-2 ring-offset-[#0f2f56]"
        : "ring-2 ring-brand-600/40 ring-offset-2 ring-offset-white"
      : "";

    return (
      <span
        style={{ backgroundColor: accent }}
        className={`${base} ${accentText[accent] ?? "text-ink-900"} ${ring}`}
      >
        {phase}
      </span>
    );
  }

  return (
    <span
      className={`${base} ${
        tone === "dark" ? "text-white/70" : "text-body"
      }`}
    >
      {phase}
    </span>
  );
}
