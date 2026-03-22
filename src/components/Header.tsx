import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-sm font-semibold tracking-wide text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)]"
        >
          BC
        </a>
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="px-1 py-2 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            About
          </a>
          <a
            href="#projects"
            className="px-1 py-2 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            Projects
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
