import { useState } from "react";

const fireworks = [
  { left: "18%", top: "22%", delay: "0s", size: "small" },
  { left: "50%", top: "15%", delay: "0.8s", size: "large" },
  { left: "82%", top: "25%", delay: "1.5s", size: "medium" },
  { left: "30%", top: "45%", delay: "2.2s", size: "medium" },
  { left: "72%", top: "48%", delay: "2.8s", size: "large" },
];

const stars = Array.from({ length: 35 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  top: `${(index * 61) % 100}%`,
  delay: `${(index % 5) * 0.5}s`,
  size: index % 4 === 0 ? "large" : "small",
}));

const hearts = [
  { left: "8%", delay: "0s", duration: "9s", size: "text-xl" },
  { left: "18%", delay: "3s", duration: "11s", size: "text-sm" },
  { left: "32%", delay: "6s", duration: "10s", size: "text-lg" },
  { left: "48%", delay: "1s", duration: "12s", size: "text-sm" },
  { left: "65%", delay: "4s", duration: "10s", size: "text-xl" },
  { left: "78%", delay: "7s", duration: "11s", size: "text-sm" },
  { left: "90%", delay: "2s", duration: "9s", size: "text-lg" },
];

const celebrationHearts = Array.from({ length: 22 }, (_, index) => ({
  left: `${8 + ((index * 43) % 84)}%`,
  delay: `${(index % 8) * 0.08}s`,
  duration: `${2.8 + (index % 5) * 0.35}s`,
  size: `${14 + (index % 4) * 5}px`,
  drift: `${-45 + (index % 7) * 15}px`,
}));

const sparkles = Array.from({ length: 20 }, (_, index) => {
  const angle = (index / 20) * Math.PI * 2;
  const distance = 110 + (index % 5) * 28;

  return {
    x: `${Math.cos(angle) * distance}px`,
    y: `${Math.sin(angle) * distance}px`,
    delay: `${(index % 5) * 0.05}s`,
  };
});

function Firework({ left, top, delay, size }) {
  const particleCount =
    size === "large" ? 24 : size === "medium" ? 18 : 14;

  const particles = Array.from(
    { length: particleCount },
    (_, index) => ({
      angle: (360 / particleCount) * index,
      distance:
        size === "large"
          ? 100
          : size === "medium"
            ? 75
            : 55,
    })
  );

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left,
        top,
      }}
    >
      <div className="firework">
        <div
          className="firework-core"
          style={{
            animationDelay: delay,
          }}
        />

        {particles.map((particle, index) => (
          <span
            key={index}
            className="firework-particle"
            style={{
              "--angle": `${particle.angle}deg`,
              "--distance": `${particle.distance}px`,
              animationDelay: delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function BirthdayCake({ onNext }) {
  const [blown, setBlown] = useState(false);

  const handleBlowCandles = () => {
    if (blown) return;

    setBlown(true);

    setTimeout(() => {
      onNext();
    }, 5000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden text-white flex items-center justify-center px-5">

      <style>{`
        /* ========================= */
        /* CAKE CELEBRATION EFFECTS */
        /* ========================= */

        .cake-area {
          position: relative;
        }

        .cake-celebration-glow {
          position: absolute;
          left: 50%;
          top: 48%;
          width: 330px;
          height: 330px;
          transform: translate(-50%, -50%) scale(0.7);
          border-radius: 50%;
          background: rgba(236, 72, 153, 0.12);
          filter: blur(75px);
          opacity: 0;
          pointer-events: none;
        }

        .cake-blown .cake-celebration-glow {
          animation: cakeGlow 2.5s ease-out forwards;
        }

        @keyframes cakeGlow {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }

          40% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1.15);
          }

          100% {
            opacity: 0.35;
            transform: translate(-50%, -50%) scale(1.4);
          }
        }

        /* ========================= */
        /* CANDLE FLAME */
        /* ========================= */

        .candle-flame {
          position: absolute;
          top: -34px;
          font-size: 22px;
          transform-origin: bottom center;
          animation: candleFlicker 0.65s ease-in-out infinite;
          filter:
            drop-shadow(0 0 5px rgba(255, 170, 60, 0.9))
            drop-shadow(0 0 14px rgba(255, 100, 30, 0.7));
        }

        @keyframes candleFlicker {
          0%,
          100% {
            transform: scale(1) rotate(-2deg);
          }

          25% {
            transform: scale(0.88) rotate(3deg);
          }

          50% {
            transform: scale(1.08) rotate(-4deg);
          }

          75% {
            transform: scale(0.95) rotate(2deg);
          }
        }

        .candle-flame-blow {
          animation: flameBlowOut 0.65s ease-out forwards;
        }

        @keyframes flameBlowOut {
          0% {
            opacity: 1;
            transform: scale(1);
          }

          35% {
            opacity: 0.8;
            transform: translateX(10px) scaleX(1.35) scaleY(0.8);
          }

          100% {
            opacity: 0;
            transform: translateX(35px) scale(0.1);
          }
        }

        /* ========================= */
        /* CANDLE GLOW */
        /* ========================= */

        .candle {
          transition:
            box-shadow 0.5s ease,
            transform 0.5s ease;
        }

        .candle-lit {
          box-shadow:
            0 0 8px rgba(255, 255, 255, 0.35),
            0 0 18px rgba(255, 105, 180, 0.35);
        }

        .candle-blown {
          box-shadow: none;
          opacity: 0.85;
        }

        /* ========================= */
        /* BLOW WIND */
        /* ========================= */

        .blow-wind {
          position: absolute;
          left: 50%;
          top: 25%;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          opacity: 0;
          pointer-events: none;
        }

        .cake-blown .blow-wind {
          animation: blowWind 0.8s ease-out forwards;
        }

        @keyframes blowWind {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3);
          }

          25% {
            opacity: 0.8;
          }

          100% {
            opacity: 0;
            transform:
              translate(
                calc(-50% + 170px),
                calc(-50% - 20px)
              )
              scale(8);
          }
        }

        /* ========================= */
        /* SPARKLE BURST */
        /* ========================= */

        .cake-sparkle {
          position: absolute;
          left: 50%;
          top: 48%;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: white;
          opacity: 0;
          pointer-events: none;
          box-shadow:
            0 0 8px white,
            0 0 18px rgba(255, 105, 180, 0.9);
        }

        .cake-blown .cake-sparkle {
          animation:
            cakeSparkleBurst
            1.4s
            ease-out
            var(--sparkle-delay)
            forwards;
        }

        @keyframes cakeSparkleBurst {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
          }

          25% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform:
              translate(
                calc(-50% + var(--sparkle-x)),
                calc(-50% + var(--sparkle-y))
              )
              scale(1.7);
          }
        }

        /* ========================= */
        /* CELEBRATION HEARTS */
        /* ========================= */

        .celebration-heart {
          position: absolute;
          bottom: -50px;
          opacity: 0;
          pointer-events: none;
          color: rgba(255, 150, 210, 0.85);
          filter:
            drop-shadow(0 0 6px rgba(255, 80, 170, 0.8))
            drop-shadow(0 0 14px rgba(255, 50, 150, 0.45));
        }

        .cake-blown .celebration-heart {
          animation:
            celebrationHeartRise
            var(--heart-duration)
            ease-out
            var(--heart-delay)
            forwards;
        }

        @keyframes celebrationHeartRise {
          0% {
            opacity: 0;
            transform:
              translate3d(0, 0, 0)
              scale(0.5)
              rotate(0deg);
          }

          15% {
            opacity: 0.95;
          }

          50% {
            transform:
              translate3d(
                var(--heart-drift),
                -45vh,
                0
              )
              scale(1)
              rotate(18deg);
          }

          100% {
            opacity: 0;
            transform:
              translate3d(
                calc(var(--heart-drift) * -0.7),
                -115vh,
                0
              )
              scale(0.6)
              rotate(-25deg);
          }
        }

        /* ========================= */
        /* CAKE CELEBRATION */
        /* ========================= */

        .cake-stack {
          position: relative;
          z-index: 10;
          transition: transform 0.5s ease;
        }

        .cake-blown .cake-stack {
          animation: cakeCelebrate 1.1s ease-out;
        }

        @keyframes cakeCelebrate {
          0% {
            transform: scale(1);
          }

          25% {
            transform: scale(1.05) rotate(-1deg);
          }

          50% {
            transform: scale(1.08) rotate(1deg);
          }

          75% {
            transform: scale(1.04) rotate(-0.5deg);
          }

          100% {
            transform: scale(1);
          }
        }

        /* ========================= */
        /* WISH MESSAGE */
        /* ========================= */

        .wish-message {
          opacity: 0;
          transform: translateY(12px) scale(0.95);
        }

        .cake-blown .wish-message {
          animation:
            wishReveal
            1s
            ease-out
            0.25s
            forwards;
        }

        @keyframes wishReveal {
          0% {
            opacity: 0;
            transform: translateY(12px) scale(0.95);
          }

          60% {
            opacity: 1;
            transform: translateY(0) scale(1.05);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* ========================= */
        /* BUTTON */
        /* ========================= */

        .wish-button {
          position: relative;
          overflow: hidden;
        }

        .wish-button::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255, 255, 255, 0.25) 50%,
            transparent 75%
          );
          transform: translateX(-120%);
        }

        .wish-button:not(:disabled)::before {
          animation: buttonShine 3s ease-in-out infinite;
        }

        @keyframes buttonShine {
          0% {
            transform: translateX(-120%);
          }

          45%,
          100% {
            transform: translateX(120%);
          }
        }

        .wish-button > span {
          position: relative;
          z-index: 2;
        }

        /* ========================= */
        /* MOBILE */
        /* ========================= */

        @media (max-width: 640px) {
          .cake-celebration-glow {
            width: 260px;
            height: 260px;
          }

          .candle-flame {
            font-size: 19px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .candle-flame,
          .wish-button::before {
            animation: none;
          }
        }
      `}</style>

      {/* ========================= */}
      {/* ROMANTIC BACKGROUND */}
      {/* ========================= */}

      <div className="absolute inset-0 romantic-background" />

      {/* SOFT GLOWING ORBS */}

      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl animate-romantic-orb" />

      <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl animate-romantic-orb-delayed" />

      <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full bg-rose-500/15 blur-3xl animate-romantic-orb" />

      {/* ========================= */}
      {/* STARS */}
      {/* ========================= */}

      <div className="absolute inset-0 pointer-events-none">

        {stars.map((star, index) => (
          <span
            key={index}
            className={`
              absolute
              rounded-full
              bg-white
              ${star.size === "large" ? "w-1.5 h-1.5" : "w-1 h-1"}
              animate-twinkle
            `}
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
            }}
          />
        ))}

      </div>

      {/* ========================= */}
      {/* FLOATING HEARTS */}
      {/* ========================= */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {hearts.map((heart, index) => (
          <span
            key={index}
            className={`
              absolute
              bottom-[-40px]
              ${heart.size}
              text-pink-300/30
              animate-floating-heart
            `}
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
            }}
          >
            ♥
          </span>
        ))}

      </div>

      {/* ========================= */}
      {/* CELEBRATION HEARTS */}
      {/* ========================= */}

      {blown && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">

          {celebrationHearts.map((heart, index) => (
            <span
              key={index}
              className="celebration-heart"
              style={{
                left: heart.left,
                "--heart-delay": heart.delay,
                "--heart-duration": heart.duration,
                "--heart-drift": heart.drift,
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
      )}

      {/* ========================= */}
      {/* FIREWORKS */}
      {/* ========================= */}

      {blown && (
        <div className="absolute inset-0 pointer-events-none z-30">

          {fireworks.map((firework, index) => (
            <Firework
              key={index}
              left={firework.left}
              top={firework.top}
              delay={firework.delay}
              size={firework.size}
            />
          ))}

        </div>
      )}

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <div className="relative z-20 text-center">

        <p className="text-sm tracking-[0.3em] text-pink-300 mb-4">
          ONE SPECIAL WISH
        </p>

        <h1 className="text-3xl sm:text-5xl font-bold text-pink-400">
          Make A Birthday Wish 🎂
        </h1>

        <p className="mt-4 text-gray-300">
          {blown
            ? "Your wish has been released into the universe... ✨"
            : "Close your eyes... make a wish... ✨"}
        </p>

        {/* ========================= */}
        {/* CAKE AREA */}
        {/* ========================= */}

        <div
          className={`cake-area relative mt-20 mx-auto w-[300px] sm:w-[380px] ${
            blown ? "cake-blown" : ""
          }`}
        >

          {/* CELEBRATION GLOW */}

          <div className="cake-celebration-glow" />

          {/* WIND EFFECT */}

          {blown && <div className="blow-wind" />}

          {/* SPARKLES */}

          {blown &&
            sparkles.map((sparkle, index) => (
              <span
                key={index}
                className="cake-sparkle"
                style={{
                  "--sparkle-x": sparkle.x,
                  "--sparkle-y": sparkle.y,
                  "--sparkle-delay": sparkle.delay,
                }}
              />
            ))}

          {/* ========================= */}
          {/* CANDLES */}
          {/* ========================= */}

          <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex items-end gap-8 z-30">

            {/* CANDLE 1 */}

            <div className="relative flex flex-col items-center">

              {!blown && (
                <span className="candle-flame">
                  🔥
                </span>
              )}

              <div
                className={`
                  candle
                  w-3 h-12
                  bg-pink-400
                  rounded-sm
                  border border-white/30
                  ${blown ? "candle-blown" : "candle-lit"}
                `}
              />

            </div>

            {/* CANDLE 2 */}

            <div className="relative flex flex-col items-center">

              {!blown && (
                <span className="candle-flame">
                  🔥
                </span>
              )}

              <div
                className={`
                  candle
                  w-3 h-12
                  bg-purple-400
                  rounded-sm
                  border border-white/30
                  ${blown ? "candle-blown" : "candle-lit"}
                `}
              />

            </div>

            {/* CANDLE 3 */}

            <div className="relative flex flex-col items-center">

              {!blown && (
                <span className="candle-flame">
                  🔥
                </span>
              )}

              <div
                className={`
                  candle
                  w-3 h-12
                  bg-yellow-400
                  rounded-sm
                  border border-white/30
                  ${blown ? "candle-blown" : "candle-lit"}
                `}
              />

            </div>

          </div>

          {/* ========================= */}
          {/* CAKE */}
          {/* ========================= */}

          <div className="cake-stack">

            {/* TOP LAYER */}

            <div
              className="
                mx-auto
                w-36 sm:w-48
                h-16
                rounded-xl
                bg-pink-400
                shadow-[0_0_30px_rgba(255,105,180,0.5)]
              "
            />

            {/* MIDDLE LAYER */}

            <div
              className="
                mx-auto
                w-52 sm:w-64
                h-16
                rounded-xl
                bg-purple-400
                -mt-1
                shadow-[0_0_30px_rgba(168,85,247,0.5)]
              "
            />

            {/* BOTTOM LAYER */}

            <div
              className="
                mx-auto
                w-64 sm:w-80
                h-20
                rounded-xl
                bg-yellow-300
                -mt-1
                shadow-[0_0_30px_rgba(250,204,21,0.5)]
              "
            />

          </div>

        </div>

        {/* ========================= */}
        {/* BUTTON */}
        {/* ========================= */}

        <button
          onClick={handleBlowCandles}
          disabled={blown}
          className="
            wish-button
            mt-14
            rounded-full
            bg-pink-500
            px-8 py-3
            font-semibold
            shadow-lg shadow-pink-500/30
            transition duration-300
            hover:bg-pink-400
            hover:scale-105
            active:scale-95
            disabled:opacity-60
            disabled:cursor-not-allowed
          "
        >
          <span>
            {blown ? "✨ Wish Made! ✨" : "💨 Blow The Candles"}
          </span>
        </button>

        {/* ========================= */}
        {/* WISH MESSAGE */}
        {/* ========================= */}

        {blown && (
          <p className="wish-message mt-6 text-lg sm:text-xl text-pink-300">
            May all your wishes come true. ❤️
          </p>
        )}

      </div>

    </section>
  );
}

export default BirthdayCake;