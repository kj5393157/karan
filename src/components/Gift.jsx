import { useState } from "react";

function Gift({ onNext }) {
  const [opened, setOpened] = useState(false);

  const surpriseHearts = Array.from({ length: 24 }, (_, index) => ({
    angle: `${index * 15}deg`,
    distance: `${70 + (index % 4) * 25}px`,
    delay: `${(index % 6) * 0.04}s`,
    size: `${16 + (index % 4) * 5}px`,
  }));

  const handleGiftClick = () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      onNext();
    }, 1800);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-950 via-purple-950 to-black flex items-center justify-center px-5 text-white">

      <style>{`
        /* ========================= */
        /* BACKGROUND GLOW */
        /* ========================= */

        .gift-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(236, 72, 153, 0.12);
          filter: blur(100px);
          pointer-events: none;
          animation: giftGlow 6s ease-in-out infinite;
        }

        .gift-glow-one {
          top: -120px;
          left: -100px;
        }

        .gift-glow-two {
          right: -120px;
          bottom: -120px;
          background: rgba(168, 85, 247, 0.12);
          animation-delay: 2s;
        }

        @keyframes giftGlow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }

          50% {
            transform: scale(1.3);
            opacity: 1;
          }
        }

        /* ========================= */
        /* CONTENT */
        /* ========================= */

        .gift-content {
          position: relative;
          z-index: 20;
        }

        /* ========================= */
        /* GIFT */
        /* ========================= */

        .gift-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 48px;

          font-size: 7rem;

          cursor: pointer;
          border: none;
          background: transparent;

          animation:
            giftFloat
            2.8s
            ease-in-out
            infinite;

          filter:
            drop-shadow(0 0 18px rgba(255, 105, 180, 0.35))
            drop-shadow(0 0 35px rgba(255, 105, 180, 0.2));

          transition:
            transform 0.4s ease,
            filter 0.4s ease;
        }

        .gift-button:hover {
          transform: scale(1.1) rotate(-3deg);
          filter:
            drop-shadow(0 0 25px rgba(255, 105, 180, 0.7))
            drop-shadow(0 0 55px rgba(255, 105, 180, 0.35));
        }

        .gift-button:active {
          transform: scale(0.92);
        }

        @keyframes giftFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-14px) rotate(2deg);
          }
        }

        /* ========================= */
        /* GIFT OPENING */
        /* ========================= */

        .gift-opening {
          animation:
            giftOpen
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        @keyframes giftOpen {
          0% {
            transform: scale(1);
            opacity: 1;
          }

          30% {
            transform: scale(1.2) rotate(-5deg);
          }

          60% {
            transform: scale(1.35) rotate(5deg);
          }

          100% {
            transform: scale(0.15);
            opacity: 0;
          }
        }

        /* ========================= */
        /* MAGIC LIGHT */
        /* ========================= */

        .gift-magic {
          position: absolute;
          width: 30px;
          height: 30px;
          left: 50%;
          top: 50%;

          border-radius: 50%;
          background: white;

          transform: translate(-50%, -50%) scale(0);
          opacity: 0;

          box-shadow:
            0 0 20px white,
            0 0 50px #ff4fa3,
            0 0 100px #ff4fa3;

          pointer-events: none;
        }

        .gift-opened .gift-magic {
          animation: magicExplosion 1.2s ease-out forwards;
        }

        @keyframes magicExplosion {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }

          25% {
            opacity: 1;
          }

          100% {
            transform: translate(-50%, -50%) scale(12);
            opacity: 0;
          }
        }

        /* ========================= */
        /* HEART BURST */
        /* ========================= */

        .surprise-heart {
          position: absolute;
          left: 50%;
          top: 50%;

          opacity: 0;
          pointer-events: none;

          transform:
            translate(-50%, -50%)
            rotate(var(--heart-angle))
            translateX(0)
            scale(0);

          animation:
            heartBurst
            1.4s
            cubic-bezier(0.22, 1, 0.36, 1)
            var(--heart-delay)
            forwards;

          filter:
            drop-shadow(0 0 7px rgba(255, 80, 170, 0.9))
            drop-shadow(0 0 18px rgba(255, 50, 160, 0.6));
        }

        @keyframes heartBurst {
          0% {
            opacity: 0;
            transform:
              translate(-50%, -50%)
              rotate(var(--heart-angle))
              translateX(0)
              scale(0);
          }

          20% {
            opacity: 1;
            transform:
              translate(-50%, -50%)
              rotate(var(--heart-angle))
              translateX(20px)
              scale(1);
          }

          100% {
            opacity: 0;
            transform:
              translate(-50%, -50%)
              rotate(var(--heart-angle))
              translateX(var(--heart-distance))
              scale(0.45);
          }
        }

        /* ========================= */
        /* SPARKLES */
        /* ========================= */

        .gift-sparkle {
          position: absolute;
          left: 50%;
          top: 50%;

          width: 7px;
          height: 7px;
          border-radius: 50%;

          background: white;

          opacity: 0;

          box-shadow:
            0 0 8px white,
            0 0 18px #ff69b4;

          pointer-events: none;
        }

        .gift-opened .gift-sparkle {
          animation:
            sparkleBurst
            1.1s
            ease-out
            forwards;
        }

        @keyframes sparkleBurst {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
          }

          30% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform:
              translate(
                calc(-50% + var(--sparkle-x)),
                calc(-50% + var(--sparkle-y))
              )
              scale(1.8);
          }
        }

        /* ========================= */
        /* OPEN MESSAGE */
        /* ========================= */

        .gift-open-message {
          position: absolute;
          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%) scale(0.7);
          opacity: 0;

          white-space: nowrap;

          pointer-events: none;
        }

        .gift-opened .gift-open-message {
          animation:
            messageReveal
            1.2s
            ease-out
            0.25s
            forwards;
        }

        @keyframes messageReveal {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.7);
          }

          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.1);
          }

          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }

        /* ========================= */
        /* MOBILE */
        /* ========================= */

        @media (max-width: 640px) {
          .gift-button {
            font-size: 6rem;
          }

          .gift-glow {
            width: 300px;
            height: 300px;
          }

          .gift-open-message {
            font-size: 1.1rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gift-button,
          .gift-glow {
            animation: none;
          }
        }
      `}</style>

      {/* ========================= */}
      {/* BACKGROUND GLOW */}
      {/* ========================= */}

      <div className="gift-glow gift-glow-one" />
      <div className="gift-glow gift-glow-two" />

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <div className="gift-content text-center">

        <p className="text-sm tracking-[0.3em] text-pink-300 mb-4">
          A LITTLE SURPRISE
        </p>

        <h1 className="text-3xl sm:text-5xl font-bold">
          Click The Gift 🎁
        </h1>

        {/* ========================= */}
        {/* GIFT AREA */}
        {/* ========================= */}

        <div
          className={`relative ${
            opened ? "gift-opened" : ""
          }`}
        >

          {/* MAGIC LIGHT */}

          <div className="gift-magic" />

          {/* HEART BURST */}

          {surpriseHearts.map((heart, index) => (
            <span
              key={index}
              className="surprise-heart"
              style={{
                "--heart-angle": heart.angle,
                "--heart-distance": heart.distance,
                "--heart-delay": heart.delay,
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

          {/* SPARKLES */}

          {Array.from({ length: 12 }).map((_, index) => {
            const angle = (index / 12) * Math.PI * 2;
            const distance = 100 + (index % 3) * 45;

            return (
              <span
                key={`sparkle-${index}`}
                className="gift-sparkle"
                style={{
                  "--sparkle-x": `${Math.cos(angle) * distance}px`,
                  "--sparkle-y": `${Math.sin(angle) * distance}px`,
                }}
              />
            );
          })}

          {/* OPEN MESSAGE */}

          <div className="gift-open-message text-pink-300 font-semibold">
            A little something for you... ❤️
          </div>

          {/* GIFT */}

          <button
            onClick={handleGiftClick}
            className={opened ? "gift-button gift-opening" : "gift-button"}
            aria-label="Open the birthday gift"
            disabled={opened}
          >
            🎁
          </button>

        </div>

        <p className="mt-8 text-gray-300 text-base sm:text-lg">
          {opened
            ? "Something beautiful is waiting for you... 💗"
            : "Something special is waiting inside... ✨"}
        </p>

      </div>

    </section>
  );
}

export default Gift;