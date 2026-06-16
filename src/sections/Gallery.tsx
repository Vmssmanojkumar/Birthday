import { SectionHeader } from "@/components/SectionHeader";
import { media } from "@/data/media";
import DomeGallery from "@/components/DomeGallery/DomeGallery";
import { Image as ImageIcon } from "lucide-react";

// Fallback photos in case `media` is empty — replace by adding entries to src/data/media.ts
const FALLBACK = [
  { src: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=900&auto=format&fit=crop", alt: "Sunset together" },
  { src: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=900&auto=format&fit=crop", alt: "City lights" },
  { src: "https://images.unsplash.com/photo-1529635435391-94c00e896c93?q=80&w=900&auto=format&fit=crop", alt: "Holding hands" },
  { src: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=900&auto=format&fit=crop", alt: "Adventure" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop", alt: "Celebration" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?q=80&w=900&auto=format&fit=crop", alt: "Everyday joy" },
  { src: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?q=80&w=900&auto=format&fit=crop", alt: "Laughter" },
  { src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=900&auto=format&fit=crop", alt: "Stolen moment" },
];

export function Gallery() {
  const photos = media.filter((m) => m.type === "image").map((m) => ({ src: m.src, alt: m.caption ?? "" }));
  const images = photos.length > 0 ? photos : FALLBACK;

  return (
    <section id="memories" className="relative py-32 bg-ivory">
      <SectionHeader
        eyebrow="Our Beautiful Memories"
        title="A Scrapbook of Us"
        subtitle="Pictures stop time. Here are the moments I never want to forget. Drag the dome to wander through us — tap any memory to relive it."
      />

      <div className="max-w-6xl mx-auto px-4">
        <div
          className="relative w-full rounded-3xl overflow-hidden shadow-petal"
          style={{ height: "min(85vh, 720px)", background: "#120F17" }}
        >
          <DomeGallery
            images={images}
            grayscale={false}
            fit={0.6}
            minRadius={420}
            imageBorderRadius="20px"
            openedImageBorderRadius="24px"
            overlayBlurColor="#120F17"
          />
        </div>

        {photos.length === 0 && (
          <p className="mt-6 text-center font-serif italic text-ink/60 text-sm flex items-center justify-center gap-2">
            <ImageIcon className="h-4 w-4 text-gold" />
            Showing placeholder images — drop yours into{" "}
            <code className="font-sans not-italic text-xs bg-beige/60 px-1.5 py-0.5 rounded">public/media/photos/</code>{" "}
            and list them in{" "}
            <code className="font-sans not-italic text-xs bg-beige/60 px-1.5 py-0.5 rounded">src/data/media.ts</code>.
          </p>
        )}
      </div>
    </section>
  );
}
