import Lenis from '@studio-freight/lenis'

let lenis;

export function smooth(onReadyCallback) {
  lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  if (typeof onReadyCallback === "function") {
    onReadyCallback();
  }
}

export function scrollToTopImmediate() {
  if (lenis) {
    lenis.scrollTo(0, { offset: 0, immediate: true });
  }
}

export function scrollToTop() {
  if (lenis) {
    lenis.scrollTo(0, { offset: 0 });
  }
}