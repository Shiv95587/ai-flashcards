import { useState } from "react";

export default function FlashCard({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-48 perspective-1000 p-3"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`absolute inset-0 flex items-center justify-center p-5 text-xl font-semibold rounded-lg backface-hidden transition-transform duration-500 border-2 hover:shadow-md hover:cursor-pointer ${
          flipped ? "rotate-y-180" : ""
        } bg-white text-gray-800 flashcard-content`}
      >
        <div className="content-wrapper">{card.front}</div>
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center p-5 text-xl font-semibold rounded-lg backface-hidden transition-transform duration-500 ${
          flipped ? "" : "rotate-y-180"
        } bg-custom-gradient text-white flashcard-content`}
      >
        <div className="content-wrapper">{card.back}</div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(-180deg);
        }
        .flashcard-content {
          overflow: hidden;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
        }
        .content-wrapper {
          max-height: 100%;
          width: 100%;
          overflow-y: auto; /* Enable vertical scrolling */
          overflow-x: hidden; /* Disable horizontal scrolling */
          padding: 10px;
        }
        .content-wrapper::-webkit-scrollbar {
          width: 4px;
        }
        .content-wrapper::-webkit-scrollbar-track {
          background: #e0e0e0;
          border-radius: 2px;
        }
        .content-wrapper::-webkit-scrollbar-thumb {
          background: #555;
          border-radius: 2px;
        }
        .content-wrapper::-webkit-scrollbar-thumb:hover {
          background: #333;
        }
      `}</style>
    </div>
  );
}
