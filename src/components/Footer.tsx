// import UnderlineLink from './UnderlineLink';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="layout text-shadow-[1px_1px_0px_rgba(22,23,20,1)] mt-10 pt-2 border-t-1 border-[var(--color-secondary-bg)] font-semibold text-center text-sm mb-2 text-[var(--color-secondary-bg)]">
      © {new Date().getFullYear()} By{' '}
      <Link
        className="cursor-newtab border-dark border-b border-dotted hover:text-[var(--color-accent-1)]"
        href="https://subscribe.keepcool.co">
        Keep Cool
      </Link>
      . Site by{' '}
      <Link
        className="cursor-newtab border-dark border-b border-dotted hover:text-[var(--color-accent-1)]"
        href="https://www.linkedin.com/in/brettcornick/">
        Brett Cornick
      </Link>
      .
    </footer>
  );
}
