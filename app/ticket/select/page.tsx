'use client'
import { useState } from 'react';

export default function Page() {
  const [selected, setSelected] = useState(
    Array.from({ length: 3 }, () => Array(5).fill(false))
  );

  const toggleSelection = (row: number, col: number) => {
    setSelected((prev) => {
      const newSelected = prev.map((r, i) =>
        r.map((c, j) => (i === row && j === col ? !c : c))
      );
      return newSelected;
    });
  };

  const handleConfirm = () => {
    return;
  }

  return (
    <div className="flex h-screen flex-col justify-center px-6">
      <div className="flex flex-col gap-y-2 items-center sm:mx-auto sm:w-full sm:max-w-sm">
        <p>Seats selected:</p>
        <p className="text-[#1A7F7D]">
          {selected
            .flatMap((row, rowIndex) =>
              row.map((isSelected, colIndex) =>
                isSelected ? `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}` : null
              )
            )
            .filter(Boolean)
            .join(', ') || "None selected."}
        </p>
        <div className="grid grid-cols-5 gap-4 my-4">
          {Array.from({ length: 15 }).map((_, index) => {
            const row = Math.floor(index / 5);
            const col = index % 5;
            return (
              <div
                key={index}
                className={`flex items-center justify-center w-16 h-16 rounded-md cursor-pointer ${
                  selected[row][col] ? 'bg-blue-500' : 'bg-gray-200 hover:bg-gray-300'
                }`}
                onClick={() => toggleSelection(row, col)}
              >
                {String.fromCharCode(65 + row)}{col + 1}
              </div>
            );
          })}
        </div>
        <button
          className="flex w-full justify-center rounded-md bg-[#1A7F7D] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#1A7F7D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A7F7D]"
          onClick={handleConfirm}
          >Confirm</button>
      </div>
    </div>
  );
}