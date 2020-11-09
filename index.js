const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

const watch = () => {
  mediaQuery.addEventListener('change', get, false)
  get()
}

const teardown = () => {
  mediaQuery.removeEventListener("change", get, false);
}

export const get = () => {
  const event = new CustomEvent("reducedMotionUpdated", {
    detail: {
      reduce: mediaQuery.matches
    },
  });

  window.dispatchEvent(event);
}

export default {
  watch,
  teardown,
  get
};