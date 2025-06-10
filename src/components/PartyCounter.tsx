export default function PartyCounter() {
  return (
    <div className="absolute group rounded-tr-3xl rounded-bl-3xl h-13 overflow-hidden lg:block hidden text-sm lg:text-base top-6 right-6 z-50 border-2 bg-[var(--color-secondary-bg)] text-[var(--color-primary-text)] hover:bg-[var(--color-accent-1)] w-24 hover:w-60 transition-all duration-500 all p-3 shadow-xl">
      <span>🔥 </span>
      <strong>287</strong>
      <span className="opacity-0 ml-1 w-24 group-hover:w-60 group-hover:opacity-100 absolute">
        currently hotboxing
      </span>
    </div>
  );
}
