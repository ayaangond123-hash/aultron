// ===== LANDING ANIMATIONS =====

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('revealed'), i * 100);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

// Terminal typing effect
const text = "A black hole is a region of space where gravity is so strong that nothing — not even light — can escape. It forms when a massive star collapses.";
const el = document.getElementById('typedText');
if (el) {
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(type, 28);
    }
  }
  setTimeout(type, 1200);
}
