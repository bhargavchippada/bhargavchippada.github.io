export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-8">
      <div className="mx-auto max-w-4xl text-center text-sm text-[var(--color-text-muted)]">
        <p>&copy; {new Date().getFullYear()} Bhargav Chippada</p>
      </div>
    </footer>
  );
}
