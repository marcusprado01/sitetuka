export const metadata = {
  title: "Contact - Iman Abou Tuka",
  description: "Get in touch with Iman Abou Tuka",
};

export default function ContatoPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-24">
      <p className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-4">
        Contact
      </p>
      <h1 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--foreground)] mb-8 leading-snug">
        Let&apos;s work together
      </h1>
      <p className="text-[var(--muted)] text-sm leading-relaxed mb-12 max-w-lg">
        Available for architecture projects, photography commissions, construction
        coordination, and creative collaborations. Based in Australia, working
        internationally.
      </p>

      <div className="space-y-6">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--accent-light)] mb-2">
            Email
          </p>
          <a
            href="mailto:contato@tukabou.com.br"
            className="text-[var(--foreground)] text-lg font-light hover:text-[var(--accent)] transition-colors"
          >
            contato@tukabou.com.br
          </a>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--accent-light)] mb-2">
            Instagram
          </p>
          <a
            href="https://instagram.com/tukabou"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--foreground)] text-lg font-light hover:text-[var(--accent)] transition-colors"
          >
            @tukabou
          </a>
        </div>
      </div>
    </div>
  );
}
