// Mobile menu
const menuButton = document.querySelector<HTMLButtonElement>("[data-menu]");
menuButton?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll("#site-nav a").forEach((link) =>
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }),
);

// Reveal elements as they scroll into view
const revealables = document.querySelectorAll<HTMLElement>("[data-reveal]");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  revealables.forEach((element) => observer.observe(element));
} else {
  revealables.forEach((element) => element.classList.add("is-visible"));
}
