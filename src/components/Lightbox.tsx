import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useCallback } from "react";
import type { MediaItem } from "@/data/media";

export function Lightbox({
  items, index, onClose, onPrev, onNext,
}: {
  items: MediaItem[]; index: number | null;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  const open = index !== null;
  const item = open ? items[index!] : null;

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (!open) return;
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") onPrev();
    if (e.key === "ArrowRight") onNext();
  }, [open, onClose, onPrev, onNext]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center"
          onClick={onClose}
        >
          <button onClick={(e) => { e.stopPropagation(); onClose(); }}
                  className="absolute top-5 right-5 text-white/80 hover:text-white" aria-label="Close">
            <X className="h-7 w-7" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); onPrev(); }}
                  className="absolute left-3 md:left-8 text-white/80 hover:text-white" aria-label="Previous">
            <ChevronLeft className="h-9 w-9" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); onNext(); }}
                  className="absolute right-3 md:right-8 text-white/80 hover:text-white" aria-label="Next">
            <ChevronRight className="h-9 w-9" />
          </button>
          <motion.div
            key={index}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-[92vw] max-h-[88vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {item.type === "image" ? (
              <img src={item.src} alt={item.caption ?? ""} className="max-h-[80vh] max-w-[92vw] object-contain rounded-lg shadow-petal" />
            ) : (
              <video src={item.src} controls autoPlay className="max-h-[80vh] max-w-[92vw] rounded-lg shadow-petal" />
            )}
            {item.caption && (
              <p className="mt-4 text-white/85 font-serif italic text-center max-w-2xl">{item.caption}</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
