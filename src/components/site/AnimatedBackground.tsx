import { useMemo } from "react";

// Rising metallic bubbles + bottom waves. Pure CSS/SVG, fixed behind content.
export const AnimatedBackground = () => {
  const bubbles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => {
        const size = 24 + Math.random() * 90;
        const left = Math.random() * 100;
        const drift = (Math.random() * 80 - 40).toFixed(0) + "px";
        const duration = 14 + Math.random() * 18;
        const delay = -Math.random() * duration;
        return { i, size, left, drift, duration, delay };
      }),
    []
  );

  return (
    <div className="bg-stage" aria-hidden="true">
      {bubbles.map((b) => (
        <span
          key={b.i}
          className="bubble"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            // @ts-expect-error css var
            "--drift": b.drift,
          }}
        />
      ))}

      <div className="waves">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-grad-1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(220 14% 50%)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="hsl(220 18% 14%)" stopOpacity="0.55" />
            </linearGradient>
            <linearGradient id="wave-grad-2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(220 12% 65%)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="hsl(220 16% 22%)" stopOpacity="0.45" />
            </linearGradient>
            <linearGradient id="wave-grad-3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(220 10% 80%)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(220 14% 30%)" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <path
            className="wave-path wave-path-3"
            fill="url(#wave-grad-3)"
            d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,202.7C840,203,960,181,1080,170.7C1200,160,1320,160,1380,160L1440,160L1440,320L0,320Z"
          />
          <path
            className="wave-path wave-path-2"
            fill="url(#wave-grad-2)"
            d="M0,256L60,240C120,224,240,192,360,197.3C480,203,600,245,720,245.3C840,245,960,203,1080,197.3C1200,192,1320,224,1380,240L1440,256L1440,320L0,320Z"
          />
          <path
            className="wave-path"
            fill="url(#wave-grad-1)"
            d="M0,288L60,277.3C120,267,240,245,360,250.7C480,256,600,288,720,282.7C840,277,960,235,1080,229.3C1200,224,1320,256,1380,272L1440,288L1440,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};
