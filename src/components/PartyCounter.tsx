export default function PartyCounter() {
  return (
    <div className="fixed group lg:block hidden text-sm lg:text-base bottom-12 right-0 lg:-right-33 z-50 border-2 lg:rounded-lg rounded-bl-lg rounded-tl-lg bg-[var(--color-secondary-bg)] text-[var(--color-primary-text)] p-3 shadow-lg transition-all lg:hover:-translate-x-35 lg:focus:-translate-x-35">
      <span>🔥 </span>
      <strong>27</strong>{' '}
      <span className="lg:opacity-0 lg:group-hover:opacity-100">
        currently hotboxing
      </span>
    </div>
  );
}
