import { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Music } from "lucide-react";
import { tracks } from "@/data/tracks";

const STORAGE_KEY = "love-player-state-v1";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [muted, setMuted] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [open, setOpen] = useState(false);

  // Restore state
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const s = JSON.parse(raw);
      if (typeof s.index === "number") setIndex(Math.min(s.index, Math.max(tracks.length - 1, 0)));
      if (typeof s.volume === "number") setVolume(s.volume);
      if (typeof s.time === "number" && audioRef.current) audioRef.current.currentTime = s.time;
    } catch { /* ignore */ }
  }, []);

  // Persist
  useEffect(() => {
    const id = setInterval(() => {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ index, volume, time: audioRef.current?.currentTime ?? 0 })
      );
    }, 1500);
    return () => clearInterval(id);
  }, [index, volume]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = muted ? 0 : volume;
  }, [volume, muted]);

  const current = tracks[index];

  if (tracks.length === 0) {
    // Empty-state hint sits quietly in the corner
    return (
      <div className="fixed bottom-5 right-5 z-40 hidden md:block">
        <div className="rounded-full bg-card/80 backdrop-blur px-4 py-2 text-xs text-muted-foreground border shadow-soft font-sans">
          🎵 Add .mp3 files to <code>public/music/</code> & list them in <code>src/data/tracks.ts</code>
        </div>
      </div>
    );
  }

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) { a.play(); setPlaying(true); } else { a.pause(); setPlaying(false); }
  };
  const skip = (d: number) => {
    setIndex((i) => (i + d + tracks.length) % tracks.length);
    setPlaying(true);
    setTimeout(() => audioRef.current?.play(), 50);
  };
  const fmt = (s: number) => {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60); const r = Math.floor(s % 60);
    return `${m}:${r.toString().padStart(2, "0")}`;
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 font-sans">
      <audio
        ref={audioRef}
        src={current.src}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => skip(1)}
      />
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-card/90 backdrop-blur shadow-soft border w-12 h-12 flex items-center justify-center hover:scale-105 transition"
          aria-label="Open music player"
        >
          <Music className="h-5 w-5 text-rose" />
        </button>
      ) : (
        <div className="w-80 rounded-2xl bg-card/95 backdrop-blur border shadow-soft p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="min-w-0">
              <div className="text-sm font-medium truncate">{current.title}</div>
              {current.artist && (
                <div className="text-xs text-muted-foreground truncate">{current.artist}</div>
              )}
            </div>
            <button onClick={() => setOpen(false)} className="text-xs text-muted-foreground hover:text-foreground px-2">
              ✕
            </button>
          </div>

          <input
            type="range" min={0} max={duration || 0} value={time} step={0.1}
            onChange={(e) => { const v = Number(e.target.value); setTime(v); if (audioRef.current) audioRef.current.currentTime = v; }}
            className="w-full accent-[color:var(--gold)]"
            aria-label="Seek"
          />
          <div className="flex justify-between text-[10px] text-muted-foreground mb-3 mt-1">
            <span>{fmt(time)}</span><span>{fmt(duration)}</span>
          </div>

          <div className="flex items-center justify-between">
            <button onClick={() => skip(-1)} aria-label="Previous"><SkipBack className="h-4 w-4" /></button>
            <button
              onClick={toggle}
              className="h-10 w-10 rounded-full bg-gradient-to-br from-[color:var(--gold)] to-[color:var(--rose)] text-white flex items-center justify-center shadow-soft"
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 translate-x-0.5" />}
            </button>
            <button onClick={() => skip(1)} aria-label="Next"><SkipForward className="h-4 w-4" /></button>
            <button onClick={() => setMuted((m) => !m)} aria-label="Mute">
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
            <input
              type="range" min={0} max={1} step={0.01} value={volume}
              onChange={(e) => { setVolume(Number(e.target.value)); setMuted(false); }}
              className="w-16 accent-[color:var(--gold)]"
              aria-label="Volume"
            />
          </div>
        </div>
      )}
    </div>
  );
}
