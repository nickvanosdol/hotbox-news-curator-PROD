import { clsx } from 'clsx';

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-linear-115 from-[var(--color-gradient-1)] from-13% via-[var(--color-gradient-2)] via-60% to-[var(--color-gradient-3)] sm:bg-linear-145'
      )}
    />
  );
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -top-44 -right-60 h-60 w-[36rem] transform-gpu md:right-0',
          'bg-linear-115 from-[var(--color-gradient-1)] from-13% via-[var(--color-gradient-2] via-60% to-[var(--color-gradient-3]',
          'rotate-[-10deg] rounded-full blur-3xl'
        )}
      />
    </div>
  );
}
