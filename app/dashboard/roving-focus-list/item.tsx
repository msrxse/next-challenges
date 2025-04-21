"use client";

import { useCallback, useEffect, useRef } from "react";
import { type Dog } from "./page";

function Item({
  dog,
  currentFocus,
  index,
  setCurrentFocus,
}: {
  dog: Dog;
  currentFocus: boolean;
  index: number;
  setCurrentFocus: (i: number) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (currentFocus && ref.current) {
      // Slight delay to ensure DOM is updated
      setTimeout(() => {
        ref.current?.focus();
      }, 0);
    }
  }, [currentFocus]);

  const handleSelect = useCallback(() => {
    setCurrentFocus(index);
  }, [index, setCurrentFocus]);

  return (
    <li
      ref={ref}
      tabIndex={currentFocus ? 0 : -1}
      role="option"
      aria-selected={currentFocus}
      onClick={handleSelect}
      className="text-sm text-gray-900 truncate px-1 py-1.5"
    >
      {dog.dog}
    </li>
  );
}

export default Item;
