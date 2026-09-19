const photos = [
  "/photo1.jpeg",
  "/photo2.jpeg",
  "/photo3.png",
  "/photo4.jpeg",
  "/photo5.jpeg",
  "/photo6.jpeg",
];

const stars = Array.from({ length: 40 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  top: `${(index * 61) % 100}%`,
  delay: `${(index % 5) * 0.5}s`,
  size: index % 4 === 0 ? "large" : "small",
}));

const hearts = [
  { left: "6%", delay: "0s", duration: "10s", size: "text-xl" },
  { left: "16%", delay: "3s", duration: "12s", size: "text-sm" },
  { left: "28%", delay: "6s", duration: "9s", size: "text-lg" },
  { left: "42%", delay: "1s", duration: "11s", size: "text-sm" },
  { left: "57%", delay: "4s", duration: "10s", size: "text-xl" },
  { left: "70%", delay: "7s", duration: "12s", size: "text-sm" },
  { left: "82%", delay: "2s", duration: "9s", size: "text-lg" },
  { left: "94%", delay: "5s", duration: "11s", size: "text-sm" },
];

/* ROMANTIC SHOWER */

const showerParticles = Array.from({ length: 55 }, (_, index) => {
  const symbols = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "✨",
    "💫",
    "🌸",
    "♥",
  ];

  return {
    id: index,
    symbol: symbols[index % symbols.length],
    left: `${(index * 47) % 100}%`,
    delay: `${(index % 15) * 0.55}s`,
    duration: `${6 + (index % 6)}s`,
    size:
      index % 7 === 0
        ? "text-2xl"
        : index % 4 === 0
        ? "text-xl"
        : index % 2 === 0
        ? "text-base"
        : "text-sm",
  };
});

/* FIREWORK POSITIONS */

const fireworks = [
  {
    left: "7%",
    top: "16%",
    delay: "0s",
    scale: "1",
    color: "#ff4fa3",
  },
  {
    left: "92%",
    top: "18%",
    delay: "2.5s",
    scale: "0.9",
    color: "#ffd166",
  },
  {
    left: "3%",
    top: "52%",
    delay: "5s",
    scale: "0.75",
    color: "#c77dff",
  },
  {
    left: "96%",
    top: "55%",
    delay: "7s",
    scale: "0.8",
    color: "#ff6b9d",
  },
  {
    left: "15%",
    top: "78%",
    delay: "9s",
    scale: "0.65",
    color: "#ffd166",
  },
  {
    left: "86%",
    top: "78%",
    delay: "11s",
    scale: "0.7",
    color: "#d66efd",
  },
];

/* FIREWORK SPARKS */

const sparkAngles = Array.from(
  { length: 20 },
  (_, index) => index * 18
);

function Firework({ left, top, delay, scale, color }) {
  return (
    <div
      className="firework"
      style={{
        left,
        top,
        "--firework-delay": delay,
        "--firework-scale": scale,
        "--firework-color": color,
      }}
    >
      {sparkAngles.map((angle, index) => (
        <span
          key={index}
          className="firework-spark"
          style={{
            "--spark-angle": `${angle}deg`,
          }}
        />
      ))}
    </div>
  );
}

function HeartGallery({ onNext }) {
  return (
    <section className="relative min-h-screen overflow-hidden text-white flex items-center justify-center px-4 py-10">

      {/* ANIMATION STYLES */}

      <style>{`

        /* ============================= */
        /* FIREWORKS */
        /* ============================= */

        .firework {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          transform: scale(var(--firework-scale));
          z-index: 3;
          pointer-events: none;
          animation: firework-core 6s ease-in-out infinite;
          animation-delay: var(--firework-delay);
        }

        .firework-spark {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 2px;
          height: 45px;
          border-radius: 999px;
          background: linear-gradient(
            to bottom,
            var(--firework-color),
            transparent
          );
          transform-origin: 50% 0%;
          transform:
            translate(-50%, 0)
            rotate(var(--spark-angle))
            scaleY(0);
          opacity: 0;
          filter:
            drop-shadow(0 0 4px var(--firework-color))
            drop-shadow(0 0 8px var(--firework-color));
          animation: firework-spark 6s ease-out infinite;
          animation-delay: var(--firework-delay);
        }

        .firework::before,
        .firework::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--firework-color);
          transform: translate(-50%, -50%);
          filter:
            blur(2px)
            drop-shadow(0 0 10px var(--firework-color))
            drop-shadow(0 0 20px var(--firework-color));
        }

        .firework::after {
          width: 3px;
          height: 3px;
          filter: drop-shadow(0 0 5px white);
        }

        @keyframes firework-core {
          0% {
            opacity: 0;
            transform: scale(0.1);
          }

          8% {
            opacity: 1;
            transform: scale(0.4);
          }

          15% {
            opacity: 1;
            transform: scale(var(--firework-scale));
          }

          30% {
            opacity: 0.8;
          }

          45% {
            opacity: 0;
            transform: scale(
              calc(var(--firework-scale) * 1.2)
            );
          }

          100% {
            opacity: 0;
          }
        }

        @keyframes firework-spark {
          0% {
            opacity: 0;
            transform:
              translate(-50%, 0)
              rotate(var(--spark-angle))
              scaleY(0);
          }

          10% {
            opacity: 1;
            transform:
              translate(-50%, 0)
              rotate(var(--spark-angle))
              scaleY(0.2);
          }

          22% {
            opacity: 1;
            transform:
              translate(-50%, 0)
              rotate(var(--spark-angle))
              scaleY(1);
          }

          35% {
            opacity: 0.7;
            transform:
              translate(-50%, 0)
              rotate(var(--spark-angle))
              scaleY(1.25);
          }

          50% {
            opacity: 0;
            transform:
              translate(-50%, 0)
              rotate(var(--spark-angle))
              scaleY(1.45);
          }

          100% {
            opacity: 0;
          }
        }


        /* ============================= */
        /* ROMANTIC SHOWER */
        /* ============================= */

        .romantic-shower {
          position: absolute;
          top: -70px;
          pointer-events: none;
          user-select: none;
          opacity: 0;
          z-index: 8;

          animation-name: romantic-shower-fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;

          filter:
            drop-shadow(
              0 0 5px rgba(255, 105, 180, 0.9)
            )
            drop-shadow(
              0 0 12px rgba(255, 20, 147, 0.5)
            );
        }

        @keyframes romantic-shower-fall {

          0% {
            transform:
              translate3d(0, -80px, 0)
              rotate(0deg)
              scale(0.65);
            opacity: 0;
          }

          8% {
            opacity: 0.9;
          }

          25% {
            transform:
              translate3d(35px, 25vh, 0)
              rotate(25deg)
              scale(1);
            opacity: 1;
          }

          50% {
            transform:
              translate3d(-30px, 50vh, 0)
              rotate(-25deg)
              scale(0.9);
            opacity: 0.95;
          }

          75% {
            transform:
              translate3d(40px, 75vh, 0)
              rotate(30deg)
              scale(0.85);
            opacity: 0.7;
          }

          100% {
            transform:
              translate3d(-25px, 115vh, 0)
              rotate(-20deg)
              scale(0.6);
            opacity: 0;
          }
        }


        /* ============================= */
        /* EXTRA SPARKLES */
        /* ============================= */

        .romantic-sparkle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: white;

          box-shadow:
            0 0 5px white,
            0 0 12px rgba(255, 105, 180, 0.9);

          animation:
            romantic-twinkle
            2.5s
            ease-in-out
            infinite;

          pointer-events: none;
        }

        @keyframes romantic-twinkle {

          0%,
          100% {
            opacity: 0.15;
            transform: scale(0.6);
          }

          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }


        @media (max-width: 640px) {

          .firework-spark {
            height: 32px;
          }

          .firework {
            transform:
              scale(
                calc(var(--firework-scale) * 0.8)
              );
          }

          .romantic-shower {
            filter:
              drop-shadow(
                0 0 4px rgba(255, 105, 180, 0.8)
              )
              drop-shadow(
                0 0 8px rgba(255, 20, 147, 0.5)
              );
          }
        }

      `}</style>


      {/* ============================= */}
      {/* ROMANTIC BACKGROUND */}
      {/* ============================= */}

      <div className="absolute inset-0 romantic-background" />


      {/* ============================= */}
      {/* SOFT GLOWING ORBS */}
      {/* ============================= */}

      <div
        className="
          absolute
          -top-32
          -left-32
          w-80
          h-80
          rounded-full
          bg-pink-500/20
          blur-3xl
          animate-romantic-orb
        "
      />

      <div
        className="
          absolute
          top-1/3
          -right-32
          w-80
          h-80
          rounded-full
          bg-purple-500/20
          blur-3xl
          animate-romantic-orb-delayed
        "
      />

      <div
        className="
          absolute
          -bottom-40
          left-1/3
          w-96
          h-96
          rounded-full
          bg-rose-500/15
          blur-3xl
          animate-romantic-orb
        "
      />


      {/* ============================= */}
      {/* ❤️ ROMANTIC SHOWER */}
      {/* ============================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {showerParticles.map((particle) => (
          <span
            key={particle.id}
            className={`
              romantic-shower
              ${particle.size}
            `}
            style={{
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          >
            {particle.symbol}
          </span>
        ))}

      </div>


      {/* ============================= */}
      {/* 🎆 FIREWORKS */}
      {/* ============================= */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {fireworks.map((firework, index) => (
          <Firework
            key={index}
            left={firework.left}
            top={firework.top}
            delay={firework.delay}
            scale={firework.scale}
            color={firework.color}
          />
        ))}

      </div>


      {/* ============================= */}
      {/* TWINKLING STARS */}
      {/* ============================= */}

      <div className="absolute inset-0 pointer-events-none">

        {stars.map((star, index) => (
          <span
            key={index}
            className={`
              absolute
              rounded-full
              bg-white
              ${
                star.size === "large"
                  ? "w-1.5 h-1.5"
                  : "w-1 h-1"
              }
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


      {/* ============================= */}
      {/* EXTRA ROMANTIC SPARKLES */}
      {/* ============================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {Array.from({ length: 25 }, (_, index) => (
          <span
            key={index}
            className="romantic-sparkle"
            style={{
              left: `${(index * 43) % 100}%`,
              top: `${(index * 67) % 100}%`,
              animationDelay:
                `${(index % 6) * 0.4}s`,
            }}
          />
        ))}

      </div>


      {/* ============================= */}
      {/* FLOATING HEARTS */}
      {/* ============================= */}

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


      {/* ============================= */}
      {/* MAIN CONTENT */}
      {/* ============================= */}

      <div className="relative z-20 w-full max-w-4xl text-center">


        {/* HEADING */}

        <p className="text-xs sm:text-sm tracking-[0.35em] text-pink-300 mb-3">
          EVERY PICTURE TELLS A STORY
        </p>

        <h1 className="text-3xl sm:text-5xl font-bold text-pink-400">
          To A Special One ❤️ ✨
        </h1>

        <p className="mt-4 text-sm sm:text-base text-gray-300">
          Every picture holds a little piece of a beautiful memory. 💗
        </p>


        {/* ============================= */}
        {/* HEART PHOTO AREA */}
        {/* ============================= */}

        <div
          className="
            relative
            mx-auto
            mt-10
            w-[340px]
            h-[430px]
            sm:w-[500px]
            sm:h-[500px]
          "
        >


          {/* PHOTO 1 */}

          <img
            src={photos[0]}
            alt="Memory 1"
            className="
              absolute
              top-8
              left-[35px]
              sm:top-8
              sm:left-[85px]
              w-24
              h-24
              sm:w-32
              sm:h-32
              object-cover
              rounded-xl
              border-4
              border-white
              shadow-[0_0_30px_rgba(255,215,0,0.6)]
              -rotate-12
              transition
              duration-500
              hover:scale-110
              hover:z-20
            "
          />


          {/* PHOTO 2 */}

          <img
            src={photos[1]}
            alt="Memory 2"
            className="
              absolute
              top-8
              right-[35px]
              sm:top-8
              sm:right-[85px]
              w-24
              h-24
              sm:w-32
              sm:h-32
              object-cover
              rounded-xl
              border-4
              border-white
              shadow-[0_0_30px_rgba(255,215,0,0.6)]
              rotate-12
              transition
              duration-500
              hover:scale-110
              hover:z-20
            "
          />


          {/* PHOTO 3 */}

          <img
            src={photos[2]}
            alt="Memory 3"
            className="
              absolute
              top-[105px]
              left-2
              sm:top-[120px]
              sm:left-[35px]
              w-24
              h-24
              sm:w-32
              sm:h-32
              object-cover
              rounded-xl
              border-4
              border-white
              shadow-[0_0_30px_rgba(255,215,0,0.6)]
              -rotate-6
              transition
              duration-500
              hover:scale-110
              hover:z-20
            "
          />


          {/* PHOTO 4 */}

          <img
            src={photos[3]}
            alt="Memory 4"
            className="
              absolute
              top-[105px]
              right-2
              sm:top-[120px]
              sm:right-[35px]
              w-24
              h-24
              sm:w-32
              sm:h-32
              object-cover
              rounded-xl
              border-4
              border-white
              shadow-[0_0_30px_rgba(255,215,0,0.6)]
              rotate-6
              transition
              duration-500
              hover:scale-110
              hover:z-20
            "
          />


          {/* PHOTO 5 */}

          <img
            src={photos[4]}
            alt="Memory 5"
            className="
              absolute
              top-[220px]
              left-[45px]
              sm:top-[250px]
              sm:left-[95px]
              w-24
              h-24
              sm:w-32
              sm:h-32
              object-cover
              rounded-xl
              border-4
              border-white
              shadow-[0_0_30px_rgba(255,215,0,0.6)]
              -rotate-12
              transition
              duration-500
              hover:scale-110
              hover:z-20
            "
          />


          {/* PHOTO 6 */}

          <img
            src={photos[5]}
            alt="Memory 6"
            className="
              absolute
              top-[220px]
              right-[45px]
              sm:top-[250px]
              sm:right-[95px]
              w-24
              h-24
              sm:w-32
              sm:h-32
              object-cover
              rounded-xl
              border-4
              border-white
              shadow-[0_0_30px_rgba(255,215,0,0.6)]
              rotate-12
              transition
              duration-500
              hover:scale-110
              hover:z-20
            "
          />


          {/* CENTER HEART */}

          <div
            className="
              absolute
              top-[165px]
              left-1/2
              -translate-x-1/2
              text-5xl
              sm:text-6xl
              animate-heart-glow
            "
          >
            ❤️
          </div>

        </div>


        {/* ============================= */}
        {/* QUOTE */}
        {/* ============================= */}

        <p className="mt-3 text-base sm:text-xl text-gray-300">
          Every story became a memory... 🫶
        </p>

        <p className="mt-2 text-sm sm:text-base text-pink-300/80">
          And every memory became a reason to smile. 💗
        </p>


        {/* ============================= */}
        {/* CONTINUE */}
        {/* ============================= */}

        <button
          onClick={onNext}
          className="
            mt-7
            rounded-full
            bg-pink-500
            px-8
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
          ✨ Continue To Your Wish 🎂 →
        </button>

      </div>

    </section>
  );
}

export default HeartGallery;