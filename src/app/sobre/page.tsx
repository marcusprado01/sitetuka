import Image from "next/image";

export const metadata = {
  title: "About - Iman Abou Tuka",
  description: "Architect, photographer and designer based in Australia",
};

export default function SobrePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
        <div className="w-full md:w-2/5 flex-shrink-0">
          <div className="overflow-hidden rounded-sm">
            <Image
              src="/sitetuka/images/profile.jpg"
              alt="Iman Abou Tuka"
              width={500}
              height={625}
              className="object-cover w-full"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
        <div className="flex-1 md:pt-4">
          <p className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-4">
            About
          </p>
          <h1 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--foreground)] mb-2 leading-snug">
            Iman Abou Tuka
          </h1>
          <p className="text-[var(--accent-light)] mb-8 text-xs tracking-[0.2em] uppercase">
            Architect &middot; Photographer &middot; Designer
          </p>
          <div className="space-y-4 text-[var(--muted)] text-sm leading-relaxed">
            <p>
              I am a multidisciplinary creative based in Australia, working at the
              intersection of architecture, photography, construction coordination,
              and handmade design. My practice is guided by a deep interest in
              composition, light, materiality, and the geometric structures that
              shape both built and natural environments.
            </p>
            <p>
              Over the years, I have developed work across different geographical
              and cultural contexts — from the dense urban fabric of São Paulo to
              the coastal landscapes of the North Coast, and through experiences in
              Melbourne, regional New South Wales, and Japan.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[var(--border)] mb-16" />

      {/* Disciplines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-20">
        <div>
          <h2 className="text-sm font-medium tracking-wide text-[var(--foreground)] mb-3">
            Photography
          </h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            A significant portion of my photographic work focuses on architectural
            photography captured in São Paulo. Within this dense urban environment,
            the images explore the relationship between buildings, structure, scale,
            and geometry. The compositions emphasize verticality, repetition, and the
            visual rhythm created by the interaction between architecture and light.
            Additional work includes photographs from the North Coast, Melbourne,
            regional NSW, and Japan — investigating the dialogue between built
            environments and natural surroundings.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-medium tracking-wide text-[var(--foreground)] mb-3">
            Architecture & Interior Design
          </h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            I develop residential architecture and interior design projects with a
            focus on functionality, materiality, and spatial quality. Each project
            is developed from concept through to detailed 3D visualization, with
            careful attention to how people inhabit and experience a space. The work
            reflects a belief that good design is both practical and poetic.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-medium tracking-wide text-[var(--foreground)] mb-3">
            Construction Coordination
          </h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            My experience includes high-end residential renovations in São Paulo,
            particularly in the Parque do Povo area. From demolition supervision
            through electrical and hydraulic layout validation to finishing stages,
            I work closely with design teams and contractors — producing technical
            reports, hand sketches, and practical solutions to bridge the gap between
            architectural intent and on-site execution.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-medium tracking-wide text-[var(--foreground)] mb-3">
            Una Macramê
          </h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            Under the name Una Macramê, I create original handmade pieces that blend
            traditional macramé techniques with contemporary design sensibilities.
            The work explores texture, rhythm, and form through textile art — each
            piece reflecting the same attention to structure and composition that
            guides my architectural and photographic practice.
          </p>
        </div>
      </div>

      {/* Quote */}
      <div className="border-t border-[var(--border)] pt-12">
        <blockquote className="text-xl md:text-2xl font-light text-[var(--foreground)] italic leading-relaxed max-w-3xl">
          &ldquo;Across all disciplines, my work reflects an ongoing interest in
          composition, light, and the underlying geometric structures that shape
          both architecture and natural environments.&rdquo;
        </blockquote>
      </div>
    </div>
  );
}
