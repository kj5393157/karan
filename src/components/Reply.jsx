import { useState } from "react";

const floatingHearts = Array.from({ length: 22 }, (_, index) => ({
  left: `${(index * 43) % 100}%`,
  delay: `${(index % 10) * 0.45}s`,
  duration: `${7 + (index % 5) * 0.8}s`,
  size: `${14 + (index % 4) * 5}px`,
}));

const sparkles = Array.from({ length: 28 }, (_, index) => ({
  left: `${(index * 29) % 100}%`,
  top: `${(index * 47) % 100}%`,
  delay: `${(index % 8) * 0.4}s`,
}));

function Reply() {
  const [reply, setReply] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!reply.trim()) {
      setError("Please write something first. 💗");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const formData = new FormData();

      formData.append("reply", reply);

      const response = await fetch(
        "https://formspree.io/f/xjyvvjvq",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again. 💗");
      }
    } catch (err) {
      setError("Unable to send your message. Please try again. 💗");
    } finally {
      setSubmitting(false);
    }
  };

  /* ========================= */
  /* SUCCESS SCREEN */
  /* ========================= */

  if (submitted) {
    return (
      <section className="relative min-h-screen overflow-hidden text-white flex items-center justify-center px-5">

        <style>{`
          .reply-success-card {
            animation:
              successCardReveal
              1.1s
              cubic-bezier(0.22, 1, 0.36, 1)
              forwards;
          }

          @keyframes successCardReveal {
            0% {
              opacity: 0;
              transform: translateY(30px) scale(0.9);
              filter: blur(8px);
            }

            60% {
              opacity: 1;
              transform: translateY(-5px) scale(1.03);
              filter: blur(0);
            }

            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .success-envelope {
            animation:
              envelopeFloat
              2.5s
              ease-in-out
              infinite;
            filter:
              drop-shadow(0 0 12px rgba(255, 105, 180, 0.7))
              drop-shadow(0 0 30px rgba(255, 105, 180, 0.35));
          }

          @keyframes envelopeFloat {
            0%,
            100% {
              transform: translateY(0) rotate(0deg);
            }

            50% {
              transform: translateY(-12px) rotate(2deg);
            }
          }

          .success-title {
            animation:
              successText
              0.8s
              ease-out
              0.5s
              both;
          }

          .success-message {
            animation:
              successText
              0.8s
              ease-out
              0.8s
              both;
          }

          .success-final {
            animation:
              successText
              0.8s
              ease-out
              1.1s
              both;
          }

          @keyframes successText {
            from {
              opacity: 0;
              transform: translateY(12px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .success-ring {
            position: absolute;
            left: 50%;
            top: 28%;
            width: 100px;
            height: 100px;
            border: 1px solid rgba(255, 105, 180, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0;
            pointer-events: none;
            animation:
              successRing
              2s
              ease-out
              0.2s
              forwards;
          }

          @keyframes successRing {
            0% {
              opacity: 0.8;
              transform: translate(-50%, -50%) scale(0.5);
            }

            100% {
              opacity: 0;
              transform: translate(-50%, -50%) scale(3);
            }
          }
        `}</style>

        <div className="absolute inset-0 romantic-background" />

        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-pink-500/20 blur-3xl animate-romantic-orb" />

        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl animate-romantic-orb-delayed" />

        {/* FLOATING HEARTS */}

        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          {floatingHearts.map((heart, index) => (
            <span
              key={index}
              className="absolute bottom-[-40px] text-pink-300/30"
              style={{
                left: heart.left,
                fontSize: heart.size,
                animation: `floatingSuccessHeart ${heart.duration} ease-in-out ${heart.delay} infinite`,
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

        {/* SUCCESS RING */}

        <div className="success-ring" />

        {/* SUCCESS CARD */}

        <div className="reply-success-card relative z-20 w-full max-w-xl text-center">

          <div className="success-envelope text-7xl sm:text-8xl mb-8">
            💌
          </div>

          <p className="text-xs sm:text-sm tracking-[0.35em] text-pink-300 mb-4">
            MESSAGE RECEIVED
          </p>

          <h1 className="success-title text-4xl sm:text-6xl font-bold text-pink-400">
            Thank You ❤️
          </h1>

          <p className="success-message mt-6 text-gray-300 text-base sm:text-lg leading-8">
            Your message has reached me.
            <br />
            And honestly... that means a lot. 🥹💗
          </p>

          <p className="success-final mt-8 text-pink-300 text-xl">
            Keep smiling... always. 🌻
          </p>

        </div>

        <style>{`
          @keyframes floatingSuccessHeart {
            0% {
              opacity: 0;
              transform: translateY(0) scale(0.5);
            }

            15% {
              opacity: 0.6;
            }

            50% {
              opacity: 0.5;
              transform: translateY(-50vh) translateX(25px) scale(1);
            }

            100% {
              opacity: 0;
              transform: translateY(-115vh) translateX(-20px) scale(0.6);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .success-envelope,
            .reply-success-card,
            .success-title,
            .success-message,
            .success-final,
            .success-ring {
              animation: none;
              opacity: 1;
              transform: none;
              filter: none;
            }
          }
        `}</style>

      </section>
    );
  }

  /* ========================= */
  /* REPLY SCREEN */
  /* ========================= */

  return (
    <section className="relative min-h-screen overflow-hidden text-white flex items-center justify-center px-5 py-10">

      <style>{`
        /* ========================= */
        /* BACKGROUND */
        /* ========================= */

        .reply-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(236, 72, 153, 0.10);
          filter: blur(110px);
          pointer-events: none;
          animation: replyGlow 7s ease-in-out infinite;
        }

        .reply-glow-one {
          top: -180px;
          left: -160px;
        }

        .reply-glow-two {
          right: -180px;
          bottom: -180px;
          background: rgba(168, 85, 247, 0.10);
          animation-delay: 2s;
        }

        @keyframes replyGlow {
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
        /* HEARTS */
        /* ========================= */

        .reply-heart {
          position: absolute;
          bottom: -50px;
          opacity: 0;
          pointer-events: none;
          color: rgba(255, 120, 190, 0.4);
          filter:
            drop-shadow(0 0 6px rgba(255, 70, 170, 0.7))
            drop-shadow(0 0 14px rgba(255, 40, 150, 0.35));
          animation:
            replyHeartRise
            var(--heart-duration)
            ease-in-out
            var(--heart-delay)
            infinite;
        }

        @keyframes replyHeartRise {
          0% {
            opacity: 0;
            transform:
              translateY(0)
              scale(0.5)
              rotate(0deg);
          }

          12% {
            opacity: 0.7;
          }

          50% {
            transform:
              translate(25px, -50vh)
              scale(1)
              rotate(15deg);
          }

          100% {
            opacity: 0;
            transform:
              translate(-20px, -115vh)
              scale(0.6)
              rotate(-20deg);
          }
        }

        /* ========================= */
        /* SPARKLES */
        /* ========================= */

        .reply-sparkle {
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
            replySparkle
            3s
            ease-in-out
            var(--sparkle-delay)
            infinite;
        }

        @keyframes replySparkle {
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
        /* CARD */
        /* ========================= */

        .reply-card {
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform:
            translateY(35px)
            scale(0.96);
          animation:
            replyCardReveal
            1s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .reply-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at top center,
              rgba(255, 105, 180, 0.13),
              transparent 45%
            );
          pointer-events: none;
        }

        @keyframes replyCardReveal {
          0% {
            opacity: 0;
            transform:
              translateY(35px)
              scale(0.96);
            filter: blur(6px);
          }

          60% {
            opacity: 1;
            transform:
              translateY(-4px)
              scale(1.01);
            filter: blur(0);
          }

          100% {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }
        }

        /* ========================= */
        /* ENVELOPE */
        /* ========================= */

        .reply-envelope {
          display: inline-block;
          animation:
            replyEnvelope
            2.5s
            ease-in-out
            infinite;
          filter:
            drop-shadow(0 0 10px rgba(255, 105, 180, 0.6))
            drop-shadow(0 0 25px rgba(255, 105, 180, 0.3));
        }

        @keyframes replyEnvelope {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }

          50% {
            transform: translateY(-8px) rotate(2deg);
          }
        }

        /* ========================= */
        /* TEXT */
        /* ========================= */

        .reply-heading {
          opacity: 0;
          transform: translateY(12px);
          animation:
            replyTextReveal
            0.8s
            ease-out
            0.6s
            forwards;
        }

        .reply-description {
          opacity: 0;
          transform: translateY(12px);
          animation:
            replyTextReveal
            0.8s
            ease-out
            0.8s
            forwards;
        }

        @keyframes replyTextReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ========================= */
        /* FORM */
        /* ========================= */

        .reply-form {
          opacity: 0;
          animation:
            replyFormReveal
            0.9s
            ease-out
            1s
            forwards;
        }

        @keyframes replyFormReveal {
          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ========================= */
        /* TEXTAREA */
        /* ========================= */

        .reply-textarea {
          min-height: 180px;
          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease,
            transform 0.3s ease;
        }

        .reply-textarea:focus {
          transform: translateY(-2px);
          background: rgba(0, 0, 0, 0.4);
          border-color: rgba(244, 114, 182, 0.8);
          box-shadow:
            0 0 0 4px rgba(244, 114, 182, 0.08),
            0 0 30px rgba(236, 72, 153, 0.12);
        }

        /* ========================= */
        /* SEND BUTTON */
        /* ========================= */

        .send-button {
          position: relative;
          overflow: hidden;
        }

        .send-button::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 80%
          );
          transform: translateX(-120%);
        }

        .send-button:not(:disabled)::before {
          animation:
            sendShine
            3s
            ease-in-out
            infinite;
        }

        .send-button span {
          position: relative;
          z-index: 2;
        }

        @keyframes sendShine {
          0% {
            transform: translateX(-120%);
          }

          45%,
          100% {
            transform: translateX(120%);
          }
        }

        /* ========================= */
        /* LOADING */
        /* ========================= */

        .send-loader {
          display: inline-block;
          width: 15px;
          height: 15px;
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-top-color: white;
          border-radius: 50%;
          animation: sendLoader 0.7s linear infinite;
          vertical-align: -2px;
          margin-right: 7px;
        }

        @keyframes sendLoader {
          to {
            transform: rotate(360deg);
          }
        }

        /* ========================= */
        /* MOBILE */
        /* ========================= */

        @media (max-width: 640px) {
          .reply-glow {
            width: 280px;
            height: 280px;
          }

          .reply-textarea {
            min-height: 150px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reply-glow,
          .reply-heart,
          .reply-sparkle,
          .reply-card,
          .reply-envelope,
          .reply-heading,
          .reply-description,
          .reply-form,
          .send-button::before,
          .send-loader {
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

      <div className="absolute inset-0 romantic-background" />

      <div className="reply-glow reply-glow-one" />
      <div className="reply-glow reply-glow-two" />

      {/* ========================= */}
      {/* FLOATING HEARTS */}
      {/* ========================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {floatingHearts.map((heart, index) => (
          <span
            key={index}
            className="reply-heart"
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

      {/* ========================= */}
      {/* SPARKLES */}
      {/* ========================= */}

      <div className="absolute inset-0 pointer-events-none">

        {sparkles.map((sparkle, index) => (
          <span
            key={index}
            className="reply-sparkle"
            style={{
              left: sparkle.left,
              top: sparkle.top,
              "--sparkle-delay": sparkle.delay,
            }}
          />
        ))}

      </div>

      {/* ========================= */}
      {/* REPLY CARD */}
      {/* ========================= */}

      <div className="relative z-20 w-full max-w-2xl">

        <div
          className="
            reply-card
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            p-7
            sm:p-12
            shadow-[0_0_60px_rgba(236,72,153,0.15)]
          "
        >

          {/* ========================= */}
          {/* HEADING */}
          {/* ========================= */}

          <div className="text-center">

            <div className="reply-envelope text-6xl mb-6">
              💌
            </div>

            <p className="reply-heading text-xs sm:text-sm tracking-[0.35em] text-pink-300 mb-4">
              YOUR TURN
            </p>

            <h1 className="reply-heading text-3xl sm:text-5xl font-bold text-pink-400">
              Now It's Your Turn ❤️
            </h1>

            <p className="reply-description mt-5 text-gray-300 text-sm sm:text-base leading-7">
              I made this little surprise for you...
              <br />
              Now I would love to know what you think. 🥹
            </p>

          </div>

          {/* ========================= */}
          {/* FORM */}
          {/* ========================= */}

          <form
            onSubmit={handleSubmit}
            className="reply-form mt-8"
          >

            <label
              htmlFor="reply"
              className="block text-sm text-gray-300 mb-2"
            >
              Your Reply 💌
            </label>

            <div className="relative">

              <textarea
                id="reply"
                name="reply"
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Write something for me..."
                required
                rows="7"
                disabled={submitting}
                className="
                  reply-textarea
                  w-full
                  rounded-2xl
                  bg-black/30
                  border
                  border-white/20
                  px-5
                  py-4
                  text-white
                  placeholder-gray-500
                  outline-none
                  resize-none
                  focus:border-pink-400
                  focus:ring-2
                  focus:ring-pink-400/30
                  transition
                  disabled:opacity-60
                "
              />

              <span className="absolute bottom-3 right-4 text-xs text-gray-500 pointer-events-none">
                {reply.length} characters
              </span>

            </div>

            {/* ERROR */}

            {error && (
              <p className="mt-4 text-center text-pink-300 text-sm">
                {error}
              </p>
            )}

            {/* ========================= */}
            {/* SEND BUTTON */}
            {/* ========================= */}

            <div className="text-center">

              <button
                type="submit"
                disabled={submitting}
                className="
                  send-button
                  mt-8
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
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >
                <span>
                  {submitting ? (
                    <>
                      <span className="send-loader" />
                      Sending... 💌
                    </>
                  ) : (
                    "💌 Send My Reply"
                  )}
                </span>
              </button>

            </div>

          </form>

          <p className="mt-7 text-center text-xs text-gray-500">
            Your message will be delivered safely. ❤️
          </p>

        </div>

      </div>

    </section>
  );
}

export default Reply;