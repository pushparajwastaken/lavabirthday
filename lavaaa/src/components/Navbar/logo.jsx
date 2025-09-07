export default LavaaaLogo = ({ size = "medium", className = "" }) => {
  const sizeClasses = {
    small: "text-2xl w-32 h-12",
    medium: "text-4xl w-48 h-16",
    large: "text-6xl w-96 h-32",
  };

  return (
    <div className={`relative inline-block ${sizeClasses[size]} ${className}`}>
      {/* Google Fonts - Add this to your app's head or import in your main CSS */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Fredoka+One:wght@400&display=swap");

        .logo {
          font-family: "Fredoka One", cursive;
          animation: logoFloat 3s ease-in-out infinite;
          user-select: none;
        }

        .sparkle {
          animation: sparkleMove 2s infinite ease-in-out;
        }

        .sparkle-1 {
          animation: sparkleMove1 2s infinite ease-in-out;
        }

        .sparkle-2 {
          animation: sparkleMove2 2.5s infinite ease-in-out;
        }

        .sparkle-3 {
          animation: sparkleMove3 1.8s infinite ease-in-out;
        }

        .sparkle-4 {
          animation: sparkleMove4 2.2s infinite ease-in-out;
        }

        .sparkle-5 {
          animation: sparkleMove5 1.9s infinite ease-in-out;
        }

        @keyframes logoFloat {
          0%,
          100% {
            transform: translate(-50%, -50%) rotate(-2deg) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) rotate(-1deg) scale(1.05);
          }
        }

        @keyframes sparkleMove1 {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.5) rotate(0deg) translateY(0px);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg) translateY(-10px);
          }
        }

        @keyframes sparkleMove2 {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.3) rotate(0deg) translateX(0px);
          }
          50% {
            opacity: 1;
            transform: scale(1.1) rotate(-180deg) translateX(15px);
          }
        }

        @keyframes sparkleMove3 {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.4) rotate(0deg) translate(0px, 0px);
          }
          50% {
            opacity: 1;
            transform: scale(1.3) rotate(270deg) translate(-15px, -10px);
          }
        }

        @keyframes sparkleMove4 {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.6) rotate(0deg) translateY(0px);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(90deg) translateY(12px);
          }
        }

        @keyframes sparkleMove5 {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.2) rotate(0deg) translate(0px, 0px);
          }
          50% {
            opacity: 1;
            transform: scale(1.4) rotate(-90deg) translate(10px, 8px);
          }
        }

        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>

      {/* Sparkles */}
      <div className="sparkle sparkle-1 absolute top-1/4 left-4 text-yellow-400 text-lg">
        ✨
      </div>
      <div className="sparkle sparkle-2 absolute top-1/4 right-5 text-orange-500 text-lg">
        ⭐
      </div>
      <div className="sparkle sparkle-3 absolute bottom-1/4 left-6 text-green-500 text-lg">
        💫
      </div>
      <div className="sparkle sparkle-4 absolute top-1/4 left-1/2 text-blue-500 text-lg">
        🌟
      </div>
      <div className="sparkle sparkle-5 absolute bottom-1/4 right-8 text-pink-600 text-lg">
        ✦
      </div>

      {/* Main Logo */}
      <h1
        className={`logo ${
          sizeClasses[size].split(" ")[0]
        } font-bold text-white absolute top-1/2 left-1/2 tracking-wider`}
        style={{
          transform: "translate(-50%, -50%) rotate(-2deg)",
          textShadow: `
            4px 4px 0px #ff6b9d,
            8px 8px 0px #ff4081,
            12px 12px 0px #e91e63,
            16px 16px 20px rgba(255, 64, 129, 0.4)
          `,
        }}
      >
        lavaaa
      </h1>

      {/* Glow effect */}
      <div
        className="absolute inset-0 -m-2 rounded-2xl opacity-30 blur-sm"
        style={{
          background: "linear-gradient(45deg, #ff6b9d, #ff4081, #e91e63)",
          animation: "glowPulse 2s ease-in-out infinite",
          zIndex: -1,
        }}
      />
    </div>
  );
};
