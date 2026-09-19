function PageTransition({ children }) {
  return (
    <div className="page-transition">
      <style>{`
        .page-transition {
          width: 100%;
          min-height: 100vh;
          animation: pageFadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform, filter;
        }

        @keyframes pageFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.985) translateY(12px);
            filter: blur(8px);
          }

          45% {
            opacity: 0.65;
            filter: blur(3px);
          }

          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .page-transition {
            animation: none;
          }
        }
      `}</style>

      {children}
    </div>
  );
}

export default PageTransition;