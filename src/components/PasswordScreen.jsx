import { useState } from "react";

function PasswordScreen({ onSuccess }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const correctPassword = "3009";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === correctPassword) {
      setError("");

      onSuccess();
    } else {
      setError("That's not the right password... 💗");
      setShake(true);

      setTimeout(() => {
        setShake(false);
      }, 500);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden text-white flex items-center justify-center px-5">

      <div className="absolute inset-0 romantic-background" />

      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-pink-500/20 blur-3xl animate-romantic-orb" />

      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl animate-romantic-orb-delayed" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <span className="absolute left-[10%] bottom-[-30px] text-pink-300/20 text-2xl animate-floating-heart">
          ♥
        </span>

        <span
          className="absolute left-[30%] bottom-[-30px] text-pink-300/20 text-lg animate-floating-heart"
          style={{ animationDelay: "2s" }}
        >
          ♥
        </span>

        <span
          className="absolute left-[55%] bottom-[-30px] text-pink-300/20 text-2xl animate-floating-heart"
          style={{ animationDelay: "4s" }}
        >
          ♥
        </span>

        <span
          className="absolute left-[80%] bottom-[-30px] text-pink-300/20 text-lg animate-floating-heart"
          style={{ animationDelay: "1s" }}
        >
          ♥
        </span>

      </div>

      <div
        className={`
          relative
          z-20
          w-full
          max-w-md
          text-center
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          px-7
          py-10
          shadow-[0_0_50px_rgba(236,72,153,0.15)]
          ${shake ? "animate-password-shake" : ""}
        `}
      >

        <div className="text-6xl mb-6">
          🔐
        </div>

        <p className="text-xs sm:text-sm tracking-[0.35em] text-pink-300 mb-4">
          A LITTLE SECRET
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-pink-400">
          This Surprise Is For You ❤️
        </h1>

        <p className="mt-4 text-gray-300 text-sm sm:text-base">
          Enter the secret password to unlock your surprise.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            placeholder="Enter password..."
            autoComplete="off"
            className="
              mt-8
              w-full
              rounded-full
              bg-black/30
              border
              border-white/20
              px-6
              py-4
              text-center
              text-white
              placeholder-gray-500
              outline-none
              focus:border-pink-400
              focus:ring-2
              focus:ring-pink-400/30
              transition
            "
          />

          {error && (
            <p className="mt-4 text-sm text-pink-300">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="
              mt-6
              rounded-full
              bg-pink-500
              px-10
              py-3
              font-semibold
              shadow-lg
              shadow-pink-500/30
              transition
              duration-300
              hover:bg-pink-400
              hover:scale-105
              active:scale-95
            "
          >
            🔓 Unlock My Surprise
          </button>

        </form>

        <p className="mt-7 text-xs text-gray-500">
          A special little surprise awaits you... ✨
        </p>

      </div>

    </section>
  );
}

export default PasswordScreen;