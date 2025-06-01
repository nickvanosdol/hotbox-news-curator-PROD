export default function PartyCounter() {
  return (
    <div className="fixed group text-sm lg:text-base bottom-12 right-0 lg:-right-33 z-50 lg:rounded-lg rounded-bl-lg rounded-tl-lg bg-[var(--color-primary-50)] text-gray-600 p-3 shadow-xs hover:bg-[var(--color-primary-100)] transition-all lg:hover:-translate-x-36 lg:focus:-translate-x-36">
      🔥 <strong>27</strong>{' '}
      <span className="lg:opacity-0 lg:group-hover:opacity-100">
        currently hotboxing
      </span>
    </div>
  );
}
