function Letter({ onNext }) {
  const floatingHearts = Array.from({ length: 18 }, (_, index) => ({
    left: `${(index * 47) % 100}%`,
    delay: `${(index % 9) * 0.45}s`,
    duration: `${6 + (index % 5) * 0.8}s`,
    size: `${12 + (index % 4) * 5}px`,
  }));

  const sparkles = Array.from({ length: 24 }, (_, index) => ({
    left: `${(index * 31) % 100}%`,
    top: `${(index * 53) % 100}%`,
    delay: `${(index % 8) * 0.35}s`,
  }));

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-purple-950 to-pink-950 text-white flex items-center justify-center px-5 py-10">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');

        .dancing-script {
          font-family: 'Dancing Script', cursive;
          font-weight: 500;
        }

        /* ========================= */
        /* BACKGROUND GLOW */
        /* ========================= */

        .letter-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(236, 72, 153, 0.10);
          filter: blur(110px);
          pointer-events: none;
          animation: letterGlow 7s ease-in-out infinite;
        }

        .letter-glow-one {
          top: -180px;
          left: -160px;
        }

        .letter-glow-two {
          right: -180px;
          bottom: -180px;
          background: rgba(168, 85, 247, 0.10);
          animation-delay: 2s;
        }

        @keyframes letterGlow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.45;
          }

          50% {
            transform: scale(1.25);
            opacity: 0.9;
          }
        }

        /* ========================= */
        /* FLOATING HEARTS */
        /* ========================= */

        .letter-heart {
          position: absolute;
          bottom: -50px;
          opacity: 0;
          pointer-events: none;
          color: rgba(255, 120, 190, 0.45);
          filter:
            drop-shadow(0 0 6px rgba(255, 70, 170, 0.7))
            drop-shadow(0 0 14px rgba(255, 40, 150, 0.35));
          animation:
            letterHeartRise
            var(--heart-duration)
            ease-in-out
            var(--heart-delay)
            infinite;
        }

        @keyframes letterHeartRise {
          0% {
            opacity: 0;
            transform:
              translateY(0)
              scale(0.5)
              rotate(0deg);
          }

          12% {
            opacity: 0.75;
          }

          50% {
            transform:
              translate(
                25px,
                -50vh
              )
              scale(1)
              rotate(15deg);
          }

          100% {
            opacity: 0;
            transform:
              translate(
                -20px,
                -115vh
              )
              scale(0.65)
              rotate(-20deg);
          }
        }

        /* ========================= */
        /* SPARKLES */
        /* ========================= */

        .letter-sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: white;
          opacity: 0;
          pointer-events: none;
          box-shadow:
            0 0 6px white,
            0 0 14px rgba(255, 105, 180, 0.8);
          animation:
            letterSparkle
            3s
            ease-in-out
            var(--sparkle-delay)
            infinite;
        }

        @keyframes letterSparkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.4);
          }

          50% {
            opacity: 0.8;
            transform: scale(1.3);
          }
        }

        /* ========================= */
        /* TOP LABEL */
        /* ========================= */

        .letter-label {
          opacity: 0;
          transform: translateY(-15px);
          animation: labelReveal 0.8s ease-out 0.2s forwards;
        }

        @keyframes labelReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ========================= */
        /* LETTER CARD */
        /* ========================= */

        .letter-card {
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform:
            translateY(35px)
            scale(0.96);
          animation:
            letterCardReveal
            1.1s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.35s
            forwards;
        }

        .letter-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at top center,
              rgba(255, 105, 180, 0.12),
              transparent 45%
            );
          pointer-events: none;
        }

        .letter-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.07),
            transparent
          );
          transform: skewX(-18deg);
          animation: cardShine 5s ease-in-out 1.5s infinite;
          pointer-events: none;
        }

        @keyframes letterCardReveal {
          0% {
            opacity: 0;
            transform:
              translateY(35px)
              scale(0.96);
            filter: blur(5px);
          }

          60% {
            opacity: 1;
            transform:
              translateY(-5px)
              scale(1.01);
            filter: blur(0);
          }

          100% {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
            filter: blur(0);
          }
        }

        @keyframes cardShine {
          0% {
            left: -100%;
          }

          25%,
          100% {
            left: 150%;
          }
        }

        /* ========================= */
        /* ENVELOPE ICON */
        /* ========================= */

        .letter-icon {
          display: inline-block;
          animation:
            iconReveal
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.9s
            both;
        }

        @keyframes iconReveal {
          0% {
            opacity: 0;
            transform:
              scale(0.5)
              rotate(-12deg);
          }

          60% {
            opacity: 1;
            transform:
              scale(1.12)
              rotate(4deg);
          }

          100% {
            opacity: 1;
            transform:
              scale(1)
              rotate(0);
          }
        }

        /* ========================= */
        /* TITLE */
        /* ========================= */

        .letter-title {
          opacity: 0;
          transform: translateY(15px);
          animation:
            textReveal
            0.9s
            ease-out
            1.05s
            forwards;
        }

        /* ========================= */
        /* MESSAGE */
        /* ========================= */

        .letter-message {
          opacity: 0;
          animation:
            messageReveal
            1s
            ease-out
            1.25s
            forwards;
        }

        .letter-message p {
          opacity: 0;
          transform: translateY(10px);
          animation:
            paragraphReveal
            0.7s
            ease-out
            forwards;
        }

        .letter-message p:nth-child(1) {
          animation-delay: 1.4s;
        }

        .letter-message p:nth-child(2) {
          animation-delay: 1.6s;
        }

        .letter-message p:nth-child(3) {
          animation-delay: 1.8s;
        }

        .letter-message p:nth-child(4) {
          animation-delay: 2s;
        }

        .letter-message p:nth-child(5) {
          animation-delay: 2.2s;
        }

        @keyframes textReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes messageReveal {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes paragraphReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ========================= */
        /* SIGNATURE */
        /* ========================= */

        .letter-signature {
          opacity: 0;
          transform: translateY(15px);
          animation:
            signatureReveal
            0.9s
            ease-out
            2.65s
            forwards;
        }

        @keyframes signatureReveal {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }

          60% {
            opacity: 1;
            transform: translateY(-2px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ========================= */
        /* BUTTON */
        /* ========================= */

        .letter-button {
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(15px);
          animation:
            buttonReveal
            0.8s
            ease-out
            3s
            forwards;
        }

        .letter-button::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255, 255, 255, 0.25) 50%,
            transparent 80%
          );
          transform: translateX(-120%);
        }

        .letter-button:hover::before {
          animation: buttonShine 0.8s ease-out;
        }

        .letter-button span {
          position: relative;
          z-index: 2;
        }

        @keyframes buttonReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes buttonShine {
          to {
            transform: translateX(120%);
          }
        }

        /* ========================= */
        /* MOBILE */
        /* ========================= */

        @media (max-width: 640px) {
          .letter-glow {
            width: 280px;
            height: 280px;
          }

          .letter-card {
            border-radius: 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .letter-glow,
          .letter-heart,
          .letter-sparkle,
          .letter-label,
          .letter-card,
          .letter-icon,
          .letter-title,
          .letter-message,
          .letter-message p,
          .letter-signature,
          .letter-button {
            animation: none;
            opacity: 1;
            transform: none;
            filter: none;
          }
        }
      `}</style>

      {/* ========================= */}
      {/* BACKGROUND */}
      {/* ========================= */}

      <div className="letter-glow letter-glow-one" />
      <div className="letter-glow letter-glow-two" />

      {/* FLOATING HEARTS */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingHearts.map((heart, index) => (
          <span
            key={index}
            className="letter-heart"
            style={{
              left: heart.left,
              "--heart-delay": heart.delay,
              "--heart-duration": heart.duration,
              fontSize: heart.size,
            }}
          >
            {index % 3 === 0
              ? "💗"
              : index % 3 === 1
              ? "💕"
              : "♥"}
          </span>
        ))}
      </div>

      {/* SPARKLES */}

      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((sparkle, index) => (
          <span
            key={index}
            className="letter-sparkle"
            style={{
              left: sparkle.left,
              top: sparkle.top,
              "--sparkle-delay": sparkle.delay,
            }}
          />
        ))}
      </div>

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <div className="relative z-20 w-full max-w-2xl">

        <p className="letter-label text-center text-sm tracking-[0.3em] text-pink-300 mb-5">
          ONE LAST MESSAGE 💌
        </p>

        <div
          className="
            letter-card
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            p-7 sm:p-12
            shadow-2xl
          "
        >

          {/* HEADER */}

          <div className="text-center mb-8">

            <div className="letter-icon text-5xl mb-4">
              💌
            </div>

            <h1 className="letter-title dancing-script text-4xl sm:text-6xl text-pink-400">
              A Letter For You
            </h1>

          </div>

          {/* MESSAGE */}

          <div className="letter-message dancing-script text-gray-200 text-2xl sm:text-3xl leading-relaxed space-y-6">

            <p>
              Dear Saloniii 🌻,
            </p>

            <p>
              I just wanted to remind you that you deserve every
              happiness, every success, and every beautiful moment
              in life. ✨
            </p>

            <p>
              Thank you for being such an amazing person. 💗
              May your smile stay forever.
            </p>

            <p>
              Salonii keep smiling... it's looks good on youu..🧿🫶
            </p>

            <p>
              Have a Special Day...
              <br />
              Happy Birthday Once Again! 🎂💖
            </p>

          </div>

          {/* SIGNATURE */}

          <div className="letter-signature dancing-script mt-10 text-right">

            <p className="text-gray-300 text-2xl sm:text-3xl">
              With Love,
            </p>

            <p className="mt-2 text-3xl sm:text-4xl text-pink-400">
              Karan ❤️
            </p>

          </div>

          {/* BUTTON */}

          <div className="text-center">

            <button
              onClick={onNext}
              className="
                letter-button
                mt-10
                rounded-full
                bg-pink-500
                px-8 py-3
                font-semibold
                shadow-lg shadow-pink-500/30
                transition duration-300
                hover:bg-pink-400
                hover:scale-105
                active:scale-95
              "
            >
              <span>
                💌 Write Back To Me
              </span>
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Letter;