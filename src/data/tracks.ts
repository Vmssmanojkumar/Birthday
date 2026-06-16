// 🎵 Drop .mp3 files into public/music/ and list them here.
// Autoplay is intentionally disabled — playback is controlled by the user.
export type Track = { title: string; artist?: string; src: string };

export const tracks: Track[] = [
  { title: "A Thousand Years", artist: "Christina Perri", src: "/music/Thousand-Years.mp3" },
];
