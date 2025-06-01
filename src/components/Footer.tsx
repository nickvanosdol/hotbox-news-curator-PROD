import UnderlineLink from './UnderlineLink';

export default function Footer() {
  return (
    <footer className="layout mt-10 pt-2 border-t-1 text-center text-sm mb-2 text-gray-500">
      © {new Date().getFullYear()} By{' '}
      <UnderlineLink href="https://subscribe.keepcool.co">
        Keep Cool
      </UnderlineLink>
      . Site by{' '}
      <UnderlineLink href="https://www.linkedin.com/in/brettcornick/">
        Brett Cornick
      </UnderlineLink>
      .
    </footer>
  );
}
