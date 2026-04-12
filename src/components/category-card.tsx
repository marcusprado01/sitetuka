import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  imageCount: number;
  coverImage?: string;
}

export function CategoryCard({
  slug,
  title,
  subtitle,
  imageCount,
  coverImage,
}: CategoryCardProps) {
  return (
    <Link
      href={`/categoria/${slug}`}
      className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-[var(--surface)]"
    >
      {coverImage ? (
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 bg-[var(--surface)] flex items-center justify-center">
          <span className="text-[var(--muted)] text-sm">Coming soon</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <p className="text-xs tracking-[0.2em] uppercase text-white/50 mb-2">
          {subtitle}
        </p>
        <h2 className="text-2xl font-light tracking-wide text-white mb-1">
          {title}
        </h2>
        {imageCount > 0 && (
          <span className="text-xs text-white/40 tracking-wide">
            {imageCount} {imageCount === 1 ? "image" : "images"}
          </span>
        )}
      </div>
    </Link>
  );
}
