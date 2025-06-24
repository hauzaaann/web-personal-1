// PARTIKEL
particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    color: { value: "#00ffff" },
    line_linked: { enable: true, distance: 150, color: "#00ffff" },
    move: { enable: true, speed: 2 }
  }
});

// TOGGLE DARK MODE
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "light") {
  html.classList.remove("dark");
}

// GSAP ANIMASI MASUK
gsap.from("h2", { opacity: 0, y: -50, duration: 1.5 });
gsap.from("p", { opacity: 0, y: 20, delay: 0.3, duration: 1 });
gsap.from("a", { opacity: 0, scale: 0.8, delay: 0.6, duration: 0.5 });


