"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import type { ImageFile } from "@/lib/images";

interface ImageGridProps {
  images: ImageFile[];
}

export function ImageGrid({ images }: ImageGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : images.length - 1);
  }, [selectedIndex, images.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex < images.length - 1 ? selectedIndex + 1 : 0);
  }, [selectedIndex, images.length]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    },
    [handlePrev, handleNext]
  );

  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-[var(--accent-light)] text-sm">
          No images in this category yet.
        </p>
      </div>
    );
  }

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
        {images.map((image, index) => (
          <button
            key={image.filename}
            onClick={() => setSelectedIndex(index)}
            className="block w-full overflow-hidden rounded-sm cursor-zoom-in break-inside-avoid group"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.02] group-hover:opacity-90"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center cursor-zoom-out"
          onClick={() => setSelectedIndex(null)}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          tabIndex={0}
        >
          {/* Close */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white/40 hover:text-white text-2xl transition-colors z-10"
            aria-label="Close"
          >
            &times;
          </button>

          {/* Counter */}
          <span className="absolute top-6 left-6 text-xs tracking-[0.2em] text-white/30">
            {(selectedIndex ?? 0) + 1} / {images.length}
          </span>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white text-3xl transition-colors z-10"
            aria-label="Previous image"
          >
            &#8249;
          </button>

          {/* Image */}
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={1600}
            height={1200}
            className="max-h-[85vh] max-w-[85vw] object-contain"
            sizes="85vw"
            priority
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white text-3xl transition-colors z-10"
            aria-label="Next image"
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
}
