/**
 * Gallery media — your personal memories.
 * Photos are imported directly from src/assets/us/ via Vite.
 */

import img01 from "@/assets/us/c7c297e2cdfb38e2dceaff39fee6e5dd.jpg";
import img02 from "@/assets/us/IMG-20260210-WA0008.jpg";
import img03 from "@/assets/us/IMG-20260210-WA0010.jpg";
import img04 from "@/assets/us/IMG-20260221-WA0066.jpg";
import img05 from "@/assets/us/IMG-20260417-WA0006.jpg";
import img06 from "@/assets/us/IMG20250630194414.jpg";
import img07 from "@/assets/us/IMG20250723145407.jpg";
import img08 from "@/assets/us/IMG20250812111939.jpg";
import img09 from "@/assets/us/IMG20250812150548.jpg";
import img10 from "@/assets/us/IMG20250812150634.jpg";
import img11 from "@/assets/us/IMG20250827131654.jpg";
import img12 from "@/assets/us/IMG20250827131740.jpg";
import img13 from "@/assets/us/IMG20251009073439.jpg";
import img14 from "@/assets/us/IMG20251127205811.jpg";
import img15 from "@/assets/us/IMG20260217162426.jpg";
import img16 from "@/assets/us/IMG20260217162541.jpg";
import img17 from "@/assets/us/IMG20260217162844.jpg";
import img18 from "@/assets/us/IMG20260227185430.jpg";
import img19 from "@/assets/us/IMG20260401172711.jpg";
import img20 from "@/assets/us/IMG20260413135852.jpg";
import img21 from "@/assets/us/IMG20260502124547.jpg";
import img22 from "@/assets/us/IMG20260502124601.jpg";
import img23 from "@/assets/us/IMG20260506152408.jpg";
import img24 from "@/assets/us/IMG20260518165909.jpg";
import img25 from "@/assets/us/IMG_20260221_144956654_PORTRAIT.jpg";
import img26 from "@/assets/us/IMG_20260221_145046379_PORTRAIT.jpg";
import img27 from "@/assets/us/IMG_20260221_150341596.jpg";
import img28 from "@/assets/us/IMG_20260314_195720734_PORTRAIT.jpg";
import img29 from "@/assets/us/IMG_20260314_195728689_PORTRAIT.jpg";
import img30 from "@/assets/us/IMG_20260413_135740.jpg";
import img31 from "@/assets/us/MyImage-1776429468-04.jpg";
import img32 from "@/assets/us/Screenshot_2025-09-02-08-51-04-98_6012fa4d4ddec268fc5c7112cbb265e7.jpg";
import img33 from "@/assets/us/Screenshot_2026-05-16-17-33-34-96_1c337646f29875672b5a61192b9010f9.jpg";
import img34 from "@/assets/us/Screenshot_2026-05-26-14-56-41-23_6012fa4d4ddec268fc5c7112cbb265e7.jpg";
import img35 from "@/assets/us/Screenshot_2026-05-28-23-41-50-62_6012fa4d4ddec268fc5c7112cbb265e7.jpg";
import img36 from "@/assets/us/Screenshot_2026-05-30-07-25-13-67_6012fa4d4ddec268fc5c7112cbb265e7.jpg";
import img37 from "@/assets/us/Screenshot_2026-06-04-10-03-13-13_6012fa4d4ddec268fc5c7112cbb265e7.jpg";
import img38 from "@/assets/us/Screenshot_2026-06-14-10-12-06-54_6012fa4d4ddec268fc5c7112cbb265e7.jpg";

export type MediaItem = {
  src: string;
  type: "image" | "video";
  caption?: string;
  category: "Adventures" | "Silly" | "Celebrations" | "Everyday";
  ratio?: "tall" | "square" | "wide";
};

export const media: MediaItem[] = [
  { src: img01,  type: "image", category: "Everyday",      ratio: "square", caption: "Just us" },
  { src: img02,  type: "image", category: "Everyday",      ratio: "wide",   caption: "February vibes" },
  { src: img03,  type: "image", category: "Silly",         ratio: "square", caption: "Can't stop smiling" },
  { src: img04,  type: "image", category: "Everyday",      ratio: "wide",   caption: "A quiet afternoon" },
  { src: img05,  type: "image", category: "Adventures",    ratio: "wide",   caption: "April adventure" },
  { src: img06,  type: "image", category: "Celebrations",  ratio: "square", caption: "June evening glow" },
  { src: img07,  type: "image", category: "Adventures",    ratio: "wide",   caption: "July memories" },
  { src: img08,  type: "image", category: "Adventures",    ratio: "wide",   caption: "August morning" },
  { src: img09,  type: "image", category: "Adventures",    ratio: "wide",   caption: "Golden afternoon" },
  { src: img10,  type: "image", category: "Adventures",    ratio: "wide",   caption: "Lost in the moment" },
  { src: img11,  type: "image", category: "Everyday",      ratio: "square", caption: "Late August" },
  { src: img12,  type: "image", category: "Everyday",      ratio: "wide",   caption: "Together again" },
  { src: img13,  type: "image", category: "Adventures",    ratio: "square", caption: "October sunrise" },
  { src: img14,  type: "image", category: "Celebrations",  ratio: "wide",   caption: "November nights" },
  { src: img15,  type: "image", category: "Adventures",    ratio: "wide",   caption: "February getaway" },
  { src: img16,  type: "image", category: "Adventures",    ratio: "wide",   caption: "Our favourite place" },
  { src: img17,  type: "image", category: "Adventures",    ratio: "wide",   caption: "Wandering together" },
  { src: img18,  type: "image", category: "Everyday",      ratio: "wide",   caption: "Sunday evening" },
  { src: img19,  type: "image", category: "Adventures",    ratio: "wide",   caption: "April outing" },
  { src: img20,  type: "image", category: "Adventures",    ratio: "wide",   caption: "Warm smiles" },
  { src: img21,  type: "image", category: "Adventures",    ratio: "wide",   caption: "May escape" },
  { src: img22,  type: "image", category: "Adventures",    ratio: "wide",   caption: "Side by side" },
  { src: img23,  type: "image", category: "Everyday",      ratio: "square", caption: "May afternoon" },
  { src: img24,  type: "image", category: "Everyday",      ratio: "wide",   caption: "Golden hour" },
  { src: img25,  type: "image", category: "Everyday",      ratio: "tall",   caption: "Portrait of you" },
  { src: img26,  type: "image", category: "Everyday",      ratio: "tall",   caption: "Caught you smiling" },
  { src: img27,  type: "image", category: "Adventures",    ratio: "wide",   caption: "February stroll" },
  { src: img28,  type: "image", category: "Celebrations",  ratio: "tall",   caption: "A special evening" },
  { src: img29,  type: "image", category: "Celebrations",  ratio: "tall",   caption: "Dressed up for us" },
  { src: img30,  type: "image", category: "Adventures",    ratio: "wide",   caption: "April outing" },
  { src: img31,  type: "image", category: "Silly",         ratio: "square", caption: "My favourite photo of you" },
  { src: img32,  type: "image", category: "Silly",         ratio: "square", caption: "September morning chat" },
  { src: img33,  type: "image", category: "Everyday",      ratio: "square", caption: "May screenshot memory" },
  { src: img34,  type: "image", category: "Silly",         ratio: "square", caption: "You, being you" },
  { src: img35,  type: "image", category: "Everyday",      ratio: "square", caption: "Late May night" },
  { src: img36,  type: "image", category: "Everyday",      ratio: "square", caption: "Good morning, love" },
  { src: img37,  type: "image", category: "Silly",         ratio: "square", caption: "June laughs" },
  { src: img38,  type: "image", category: "Everyday",      ratio: "square", caption: "Just this June" },
];

