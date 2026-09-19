function Welcome({ onNext }) {
  const heartShower = Array.from({ length: 45 }, (_, index) => ({
    left: `${(index * 37) % 100}%`,
    delay: `${(index % 15) * 0.45}s`,
    duration: `${5 + (index % 5) * 0.8}s`,
    size: `${12 + (index % 5) * 4}px`,
    drift: `${-40 + (index % 9) * 10}px`,
    type: index % 4 === 0 ? "💗" : index % 4 === 1 ? "💕" : "♥",
  }));

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-950 via-black to-pink-950 flex items-center justify-center px-5 text-white">

      {/* DANCING SCRIPT FONT + HEART SHOWER */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');

        .dancing-script {
          font-family: 'Dancing Script', cursive;
          font-weight: 500;
        }

        /* ========================= */
        /* HEART SHOWER */
        /* ========================= */

        .welcome-heart-shower {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 5;
        }

        .welcome-shower-heart {
          position: absolute;
          top: -60px;
          opacity: 0;

          animation:
            welcomeHeartFall
            var(--heart-duration)
            linear
            var(--heart-delay)
            infinite;

          filter:
            drop-shadow(0 0 5px rgba(255, 70, 160, 0.9))
            drop-shadow(0 0 12px rgba(255, 40, 150, 0.6));

          will-change: transform, opacity;
        }

        @keyframes welcomeHeartFall {
          0% {
            transform:
              translate3d(0, -80px, 0)
              rotate(0deg)
              scale(0.6);

            opacity: 0;
          }

          8% {
            opacity: 0.8;
          }

          20% {
            transform:
              translate3d(
                var(--heart-drift),
                18vh,
                0
              )
              rotate(20deg)
              scale(0.9);

            opacity: 0.95;
          }

          45% {
            transform:
              translate3d(
                calc(var(--heart-drift) * -0.5),
                48vh,
                0
              )
              rotate(-18deg)
              scale(1);

            opacity: 0.9;
          }

          70% {
            transform:
              translate3d(
                var(--heart-drift),
                75vh,
                0
              )
              rotate(25deg)
              scale(0.85);

            opacity: 0.75;
          }

          90% {
            opacity: 0.4;
          }

          100% {
            transform:
              translate3d(
                calc(var(--heart-drift) * -0.7),
                115vh,
                0
              )
              rotate(-30deg)
              scale(0.6);

            opacity: 0;
          }
        }

        /* ========================= */
        /* SOFT HEART GLOW */
        /* ========================= */

        .welcome-heart-glow {
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: rgba(236, 72, 153, 0.10);
          filter: blur(100px);
          pointer-events: none;
          z-index: 1;

          animation: welcomeGlow 8s ease-in-out infinite;
        }

        .welcome-heart-glow-one {
          top: -100px;
          left: -80px;
        }

        .welcome-heart-glow-two {
          bottom: -120px;
          right: -80px;
          animation-delay: 2s;
        }

        @keyframes welcomeGlow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }

          50% {
            transform: scale(1.25);
            opacity: 0.9;
          }
        }

        /* ========================= */
        /* CENTER CONTENT GLOW */
        /* ========================= */

        .welcome-content {
          position: relative;
          z-index: 20;
        }

        .welcome-content::before {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: rgba(168, 85, 247, 0.08);
          filter: blur(80px);
          z-index: -1;
          pointer-events: none;
        }

        /* ========================= */
        /* MOBILE */
        /* ========================= */

        @media (max-width: 640px) {
          .welcome-shower-heart {
            animation-duration: calc(var(--heart-duration) * 0.9);
          }

          .welcome-content::before {
            width: 300px;
            height: 300px;
          }
        }

        /* ========================= */
        /* REDUCED MOTION */
        /* ========================= */

        @media (prefers-reduced-motion: reduce) {
          .welcome-shower-heart,
          .welcome-heart-glow {
            animation: none;
          }
        }
      `}</style>

      {/* ========================= */}
      {/* SOFT BACKGROUND GLOW */}
      {/* ========================= */}

      <div className="welcome-heart-glow welcome-heart-glow-one" />
      <div className="welcome-heart-glow welcome-heart-glow-two" />

      {/* ========================= */}
      {/* ❤️ HEART SHOWER */}
      {/* ========================= */}

      <div className="welcome-heart-shower">
        {heartShower.map((heart, index) => (
          <span
            key={index}
            className="welcome-shower-heart"
            style={{
              left: heart.left,
              fontSize: heart.size,
              "--heart-delay": heart.delay,
              "--heart-duration": heart.duration,
              "--heart-drift": heart.drift,
            }}
          >
            {heart.type}
          </span>
        ))}
      </div>

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <div className="welcome-content text-center max-w-2xl">

        <p className="text-sm sm:text-base tracking-[0.4em] text-pink-300 mb-5">
          WELCOME
        </p>

        <h1 className="dancing-script text-5xl sm:text-7xl">
          Happy Birthday
        </h1>

        <h2 className="dancing-script mt-4 text-4xl sm:text-6xl text-pink-400">
          ✨ Saloni ✨
        </h2>

        <p className="dancing-script mt-8 text-2xl sm:text-3xl leading-10 text-gray-300">
          Every birthday is special,
          <br />
          but today is extra special because
          <br />
          it's your day.
          <br />
          Let's celebrate it together. ❤️
        </p>

        <button
          onClick={onNext}
          className="
            mt-10
            rounded-full
            bg-pink-500
            px-7 py-3
            text-base sm:text-lg
            font-semibold
            shadow-lg shadow-pink-500/30
            transition duration-300
            hover:scale-105
            hover:bg-pink-400
            active:scale-95
          "
        >
          🎁 Open My Surprise
        </button>

      </div>

    </section>
  );
}

export default Welcome;