'use client';

import { useState } from 'react';

export default function ReactionCounter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button
      onClick={handleClick}
      className="py-1 text-sm px-3 mt-2 shadow-sm rounded-lg bg-[var(--color-primary-50)] transition-all hover:grayscale-0 active:grayscale-0 grayscale-50 hover:shadow-none cursor-pointer focus:shadow-none">
      🔥 {count}
    </button>
  );
}
