import { useEffect } from "react";

// Adds/removes .in class on .reveal elements based on viewport visibility.
// Re-triggers every time element enters viewport (works on scroll up/down, infinitely).
export function useReveal() {
  useEffect(() => {
    const observe = () => {
      const els = document.querySelectorAll<HTMLElement>(".reveal");
      if (!els.length) return null;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
            } else {
              e.target.classList.remove("in");
            }
          });
        },
        { threshold: [0, 0.12], rootMargin: "0px 0px -8% 0px" }
      );

      els.forEach((el) => io.observe(el));
      return io;
    };

    let io = observe();

    const mo = new MutationObserver(() => {
      io?.disconnect();
      io = observe();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io?.disconnect();
      mo.disconnect();
    };
  }, []);
}
