import { useEffect } from "react";

function UnlockAnimation({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">

      {/* Romantic background */}
      <div className="absolute inset-0 romantic-background" />

      {/* Glowing orbs */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-pink-500/20 blur-3xl animate-romantic-orb" />

      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl animate-romantic-orb-delayed" />

      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <span className="unlock-heart left-[10%]">♥</span>

        <span
          className="unlock-heart left-[25%]"
          style={{ animationDelay: "0.5s" }}
        >
          ♥
        </span>

        <span
          className="unlock-heart left-[45%]"
          style={{ animationDelay: "1s" }}
        >
          ♥
        </span>

        <span
          className="unlock-heart left-[65%]"
          style={{ animationDelay: "0.3s" }}
        >
          ♥
        </span>

        <span
          className="unlock-heart left-[85%]"
          style={{ animationDelay: "1.3s" }}
        >
          ♥
        </span>

      </div>

      {/* Main animation */}

      <div className="relative z-20 text-center">

        {/* Glowing heart */}

        <div className="unlock-main-heart">
          ❤️
        </div>

        {/* Sparkles */}

        <div className="unlock-sparkle sparkle-one">
          ✨
        </div>

        <div className="unlock-sparkle sparkle-two">
          ✨
        </div>

        <div className="unlock-sparkle sparkle-three">
          ✨
        </div>

        {/* Text */}

        <h1 className="mt-8 text-2xl sm:text-4xl font-bold text-pink-400 animate-unlock-text">
          Something Special Awaits You...
        </h1>

        <p className="mt-4 text-gray-300 text-sm sm:text-base animate-unlock-subtext">
          Made with love, just for you ❤️
        </p>

      </div>

    </section>
  );
}

export default UnlockAnimation;