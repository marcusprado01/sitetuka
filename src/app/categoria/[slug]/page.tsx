import { notFound } from "next/navigation";
import Link from "next/link";
import { categories } from "@/data/categories";
import { getImagesByCategory } from "@/lib/images";
import { ImageGrid } from "@/components/image-grid";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `${category.title} - Iman Abou Mahmoud`,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const images = getImagesByCategory(category.slug);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
      {/* Header */}
      <div className="mb-16">
        <Link
          href="/"
          className="text-xs tracking-[0.15em] uppercase text-[var(--accent)] hover:text-[var(--foreground)] transition-colors mb-6 inline-block"
        >
          &larr; Back to portfolio
        </Link>
        <p className="text-xs tracking-[0.25em] uppercase text-[var(--accent-light)] mb-3">
          {category.subtitle}
        </p>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--foreground)] mb-4">
          {category.title}
        </h1>
        <p className="text-[var(--muted)] text-sm leading-relaxed max-w-2xl mb-3">
          {category.narrative}
        </p>
        {images.length > 0 && (
          <span className="text-xs text-[var(--accent-light)] tracking-wide">
            {images.length} {images.length === 1 ? "image" : "images"}
          </span>
        )}
      </div>

      <ImageGrid images={images} />
    </div>
  );
}
