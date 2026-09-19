import { useState } from "react";

const memories = [
  {
    image: "/photo1.jpeg",
    caption: "The beginning of many beautiful memories... 🌻💗",
  },
  {
    image: "/photo2.jpeg",
    caption: "💕",
  },
  {
    image: "/photo3.png",
    caption: "🖤✨",
  },
  {
    image: "/photo4.jpeg",
    caption: "💗",
  },
  {
    image: "/photo5.jpeg",
    caption: "🤍",
  },
  {
    image: "/photo6.jpeg",
    caption: "Some memories never fade. 💟🧿",
  },
];

function MemoryJourney({ onNext }) {
  const [current, setCurrent] = useState(0);

  const nextMemory = () => {
    if (current < memories.length - 1) {
      setCurrent(current + 1);
    }
  };

  const previousMemory = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const memory = memories[current];
  const lastMemory = current === memories.length - 1;

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-5 py-10">

      <div className="w-full max-w-3xl text-center">

        <p className="text-sm tracking-[0.35em] text-pink-300 mb-4">
          MEMORY JOURNEY
        </p>

        <h1 className="text-3xl sm:text-5xl font-bold text-pink-400">
         To a Special One..🫶🧿
        </h1>

        <div className="mt-10">

          <div className="mx-auto max-w-md overflow-hidden rounded-2xl border-4 border-white/80 shadow-2xl">
            <img
              src={memory.image}
              alt={`Memory ${current + 1}`}
              className="w-full aspect-square object-cover"
            />
          </div>

          <p className="mt-6 min-h-16 text-lg sm:text-xl text-gray-300">
            {memory.caption}
          </p>

        </div>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <button
            onClick={previousMemory}
            disabled={current === 0}
            className="
              rounded-full
              border border-white/30
              px-5 py-3
              transition
              hover:bg-white/10
              disabled:opacity-30
              disabled:cursor-not-allowed
            "
          >
            ← Previous
          </button>

          {!lastMemory ? (
            <button
              onClick={nextMemory}
              className="
                rounded-full
                bg-pink-500
                px-6 py-3
                font-semibold
                transition
                hover:bg-pink-400
                hover:scale-105
              "
            >
              Next →
            </button>
          ) : (
            <button
              onClick={onNext}
              className="
                rounded-full
                bg-pink-500
                px-7 py-3
                font-semibold
                transition
                hover:bg-pink-400
                hover:scale-105
                animate-pulse
              "
            >
              Continue → ❤️
            </button>
          )}

        </div>

        <p className="mt-5 text-sm text-gray-500">
          {current + 1} / {memories.length}
        </p>

      </div>

    </section>
  );
}

export default MemoryJourney;