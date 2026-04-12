import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { getImagesByCategory } from "@/lib/images";
import { CategoryCard } from "@/components/category-card";

export default function Home() {
  const categoriesWithData = categories.map((cat) => {
    const images = getImagesByCategory(cat.slug);
    return {
      ...cat,
      imageCount: images.length,
      coverImage: images[0]?.src,
    };
  });

  return (
    <>
      {/* Hero — Full Screen */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Architecture photography by Iman Abou Tuka"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />
        <div className="absolute inset-0 flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-10 max-w-7xl mx-auto left-0 right-0">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/80 mb-4">
            Architecture &middot; Photography &middot; Design
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight mb-6 drop-shadow-lg">
            Iman Abou Tuka
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed font-light">
            Multidisciplinary creative based in Australia, exploring the
            intersection of built environments, natural landscapes, and
            handmade craft.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">
            Scroll
          </span>
          <div className="w-px h-8 bg-white/40" />
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-2/5 flex-shrink-0">
            <div className="overflow-hidden rounded-sm">
              <Image
                src="/images/profile.jpg"
                alt="Iman Abou Tuka"
                width={400}
                height={500}
                className="object-cover w-full"
              />
            </div>
          </div>
          <div className="flex-1 md:pt-4">
            <p className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-4">
              About
            </p>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[var(--foreground)] mb-6 leading-snug">
              A practice shaped by diverse cultural and geographical contexts
            </h2>
            <div className="space-y-4 text-[var(--muted)] text-sm leading-relaxed">
              <p>
                With experience spanning residential architecture, construction
                coordination, and photographic documentation across Brazil,
                Australia, and Japan, my work reflects an ongoing interest in
                composition, light, and the geometric structures that shape both
                architecture and natural environments.
              </p>
              <p>
                From the dense urban fabric of São Paulo to the coastal landscapes
                of the North Coast, and through experiences in Melbourne, regional
                New South Wales, and Japan — each context has enriched my
                understanding of how people inhabit and relate to space.
              </p>
            </div>
            <Link
              href="/sobre"
              className="inline-block mt-6 text-xs tracking-[0.2em] uppercase text-[var(--accent)] border-b border-[var(--accent)] pb-1 hover:text-[var(--foreground)] hover:border-[var(--foreground)] transition-colors"
            >
              Read more
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="border-t border-[var(--border)]" />
      </div>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-3">
              Portfolio
            </p>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[var(--foreground)]">
              Selected Work
            </h2>
          </div>
          <span className="text-xs text-[var(--muted)] tracking-wide hidden md:block">
            {categoriesWithData.reduce((sum, c) => sum + c.imageCount, 0)} images across{" "}
            {categoriesWithData.length} categories
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoriesWithData.map((cat) => (
            <CategoryCard
              key={cat.slug}
              slug={cat.slug}
              title={cat.title}
              subtitle={cat.subtitle}
              description={cat.description}
              imageCount={cat.imageCount}
              coverImage={cat.coverImage}
            />
          ))}
        </div>
      </section>
    </>
  );
}
