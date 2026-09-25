import { useEffect, useState } from "react";

function BirthdayMessage({ onNext }) {
  const message =
    "I made this little surprise especially for you..🌻💗 because you deserve something more than just a simple birthday wish. I hope every little part of this makes you smile😇. Keep smiling, stay happy, and always remember that you are truly special..💕🫶";

  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      setVisibleText(message.slice(0, index + 1));
      index++;

      if (index >= message.length) {
        clearInterval(timer);
      }
    }, 35);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-pink-950 flex items-center justify-center px-5 text-white">

      {/* DANCING SCRIPT FONT */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');

        .dancing-script {
          font-family: 'Dancing Script', cursive;
          font-weight: 500;
        }
      `}</style>

      <div className="max-w-2xl text-center">

        <div className="text-5xl sm:text-6xl mb-6 animate-pulse">
          
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-pink-400">
          Happy Birthday Saloniii ✨💗
        </h1>

        <p
          className="
            dancing-script
            mt-8
            min-h-28
            text-2xl
            sm:text-3xl
            leading-10
            text-gray-300
          "
        >
          {visibleText}
          <span className="animate-pulse">|</span>
        </p>

        <button
          onClick={onNext}
          className="
            mt-8
            rounded-full
            bg-pink-500
            px-7 py-3
            font-semibold
            transition duration-300
            hover:bg-pink-400
            hover:scale-105
            active:scale-95
          "
        >
          Continue Our Journey ✨ →
        </button>

      </div>

    </section>
  );
}

export default BirthdayMessage;