import { useEffect, useState } from "react";

function Goodbye() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 1000),
      setTimeout(() => setStage(2), 5000),
      setTimeout(() => setStage(3), 9000),
      setTimeout(() => setStage(4), 14000),
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-5">

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">

        <span className="absolute top-[10%] left-[15%] text-xl animate-pulse">
          ✨
        </span>

        <span className="absolute top-[20%] right-[20%] text-sm animate-pulse">
          ✨
        </span>

        <span className="absolute top-[65%] left-[10%] text-sm animate-pulse">
          ✨
        </span>

        <span className="absolute bottom-[15%] right-[15%] text-xl animate-pulse">
          ✨
        </span>

        <span className="absolute top-[40%] left-[50%] text-sm animate-pulse">
          ⭐
        </span>

      </div>

      {/* Shooting Star */}
      {stage >= 4 && (
        <div className="
          absolute
          top-[15%]
          left-[-200px]
          w-48
          h-[2px]
          bg-gradient-to-r
          from-white
          to-transparent
          rotate-[25deg]
          animate-[shoot_2.5s_ease-out_forwards]
        " />
      )}

      <div className="relative z-10 max-w-3xl text-center">

        {/* Title */}
        <div className="text-5xl mb-8 animate-pulse">
          ❤️
        </div>

        {/* Stage 1 */}
        <div
          className={`
            transition-all duration-1000
            ${stage >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
        >
          <p className="text-xl sm:text-3xl text-gray-200 leading-relaxed whitespace-pre-line">
            
          </p>
        </div>

        {/* Stage 2 */}
        <div
          className={`
            mt-10
            transition-all duration-1000
            ${stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
        >
          <p className="text-lg sm:text-2xl text-pink-300 leading-relaxed whitespace-pre-line">
           
          </p>
        </div>

        {/* Stage 3 */}
        <div
          className={`
            mt-10
            transition-all duration-1000
            ${stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
        >
          <p className="text-lg sm:text-2xl text-gray-200 leading-relaxed whitespace-pre-line">
            {`This website was made with love,
just for you. ❤️

If this website made you smile
even once...

then it was worth
every second spent creating it.

Happy Birthday, Saloni. 💕🫶`}
 
          </p>
        </div>
<p className="text-xl sm:text-3xl text-pink-400 font-semibold">
    Salonii Keep smiling... it looks beautiful on you..🧿
  </p>
        {/* Final Message */}
        <div
          className={`
            mt-12
            transition-all duration-1500
            ${stage >= 4 ? "opacity-100 scale-100" : "opacity-0 scale-90"}
          `}
        >
          <p className="text-xl sm:text-3xl text-pink-400 font-semibold">
            Made with ❤️ by Karan
          </p>

          <p className="mt-6 text-sm sm:text-lg text-gray-400">
            🌻❤️
          </p>
        </div>

      </div>

    </section>
  );
}

export default Goodbye;