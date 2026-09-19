import { useEffect } from "react";

function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <section className="min-h-screen bg-black flex items-center justify-center text-white">

      <div className="text-center px-5">

        <div className="text-6xl mb-6 animate-pulse">
          🎂
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-pink-400">
          Something Special Is Coming...
        </h1>

        <p className="mt-4 text-gray-300">
          Made with love ❤️ just for you
        </p>

        <div className="mt-8 w-48 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-pink-400 animate-pulse w-3/4 rounded-full" />
        </div>

      </div>

    </section>
  );
}

export default LoadingScreen;