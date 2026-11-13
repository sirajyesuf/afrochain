"use client";

import { useEffect, useState } from "react";

type DaysUntilProps = {
  date: string;
};

export default function DaysUntil({ date }: DaysUntilProps) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const target = new Date(`${date}T00:00:00`).getTime();
    const now = Date.now();
    setDays(Math.ceil((target - now) / 86400000));
  }, [date]);

  // Rendered only after mount so the server and client markup stay in sync.
  // The reserved width keeps the surrounding line from reflowing once the
  // count resolves.
  if (days === null) {
    return <span className="inline-block min-w-[4.75rem]" aria-hidden="true" />;
  }

  if (days < 0) {
    return <span className="tabular-nums">underway</span>;
  }

  if (days === 0) {
    return <span className="tabular-nums">today</span>;
  }

  return (
    <span className="inline-block min-w-[4.75rem] tabular-nums">
      in {days} {days === 1 ? "day" : "days"}
    </span>
  );
}
