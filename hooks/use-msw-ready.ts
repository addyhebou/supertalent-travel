"use client";

import { useEffect, useState } from "react";

// Starts the MSW browser worker once (dev only) and lets queries wait on it,
// so the first fetch after mount doesn't race an unstarted mock layer. In
// non-dev builds this is a no-op that reports ready immediately — swapping
// in the real backend means deleting this file and the `enabled` checks that
// use it, not touching the hooks themselves.
let startPromise: Promise<void> | null = null;

function startWorker(): Promise<void> {
  if (!startPromise) {
    startPromise = import("@/mocks/browser").then(async ({ worker }) => {
      await worker.start({ onUnhandledRequest: "bypass", quiet: true });
    });
  }
  return startPromise;
}

export function useMswReady(): boolean {
  const isDev = process.env.NODE_ENV === "development";
  const [ready, setReady] = useState(!isDev);

  useEffect(() => {
    if (!isDev) return;
    let cancelled = false;
    startWorker().then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [isDev]);

  return ready;
}
