import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { LoadingExperience } from "@/components/LoadingExperience";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Hero } from "@/sections/Hero";
import { ChapterOne } from "@/sections/ChapterOne";
import { Gallery } from "@/sections/Gallery";
import { WhatILove } from "@/sections/WhatILove";
import { Timeline } from "@/sections/Timeline";
import { LoveNotes } from "@/sections/LoveNotes";
import { Letter } from "@/sections/Letter";
import { Forever } from "@/sections/Forever";
import { Finale } from "@/sections/Finale";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [loaded, setLoaded] = useState(false);
  const handleDone = useCallback(() => setLoaded(true), []);

  // Lock scroll while loader is visible
  useEffect(() => {
    if (!loaded) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [loaded]);

  return (
    <main className="relative font-serif text-ink">
      <AnimatePresence>
        {!loaded && <LoadingExperience key="loader" onDone={handleDone} />}
      </AnimatePresence>

      <Hero />
      <ChapterOne />
      <Gallery />
      <WhatILove />
      <Timeline />
      <LoveNotes />
      <Letter />
      <Forever />
      <Finale />

      <MusicPlayer />

      <footer className="py-10 text-center text-xs font-sans tracking-[0.25em] uppercase text-ink/40 bg-ivory">
        Made with love · forever yours
      </footer>
    </main>
  );
}
