import { cn } from '@/lib/utils';

export type UnderlineLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function UnderlineLink({
  href,
  children,
  className,
}: UnderlineLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={cn(
        'cursor-newtab animated-highlight custom-link inline-flex items-center font-medium',
        'focus-visible:ring-primary-500 focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-offset-2',
        'border-dark border-b border-dotted hover:border-black/0',
        className
      )}>
      {children}
    </a>
  );
}
