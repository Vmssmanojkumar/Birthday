// ✏️ Things I love about you — edit freely.
import {
  Smile, Heart, Shield, Clock, HandHeart, Home, Sparkles, Sun,
  type LucideIcon,
} from "lucide-react";

export type Quality = { icon: LucideIcon; title: string; body: string };

export const qualities: Quality[] = [
  { icon: Smile,     title: "Your smile",      body: "It's the first thing I look for in every room — and the last thing I think of every night." },
  { icon: HandHeart, title: "Your kindness",   body: "You move through the world gently, and it makes the world gentler in return." },
  { icon: Shield,    title: "Your strength",   body: "You carry storms most people never see, and still make space to hold mine." },
  { icon: Clock,     title: "Your patience",   body: "With me, with life, with the slow becoming of every good thing." },
  { icon: Heart,     title: "Your love",       body: "Steady, brave, unembarrassed. It taught me what love is supposed to feel like." },
  { icon: Home,      title: "Your presence",   body: "You are the room I always want to walk back into." },
  { icon: Sparkles,  title: "Our laughter",    body: "The kind that hurts the next morning. I'd be sore forever for it." },
  { icon: Sun,       title: "Your light",      body: "You make ordinary moments feel like something worth remembering." },
];
