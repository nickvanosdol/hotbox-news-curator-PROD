export default function PartyCounter() {
  return (
    <div className="fixed group bottom-12 right-2 lg:-right-33 z-50 bg-white text-gray-600 p-3 rounded-md rounded-bl-md shadow-lg hover:bg-[var(--color-primary-100)] transition-all lg:hover:-translate-x-36 lg:focus:-translate-x-36">
      🔥 <strong>27</strong>{' '}
      <span className="lg:opacity-0 lg:group-hover:opacity-100">
        currently hotboxing
      </span>
    </div>
  );
}
