export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[var(--accent-light)] tracking-wide">
          &copy; {new Date().getFullYear()} Iman Abou Tuka
        </p>
        <div className="flex items-center gap-8">
          <a
            href="https://instagram.com/tukabou"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.1em] uppercase text-[var(--accent-light)] hover:text-[var(--foreground)] transition-colors"
          >
            Instagram
          </a>
          <a
            href="mailto:contato@tukabou.com.br"
            className="text-xs tracking-[0.1em] uppercase text-[var(--accent-light)] hover:text-[var(--foreground)] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
