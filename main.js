// Smooth navbar background on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (window.scrollY > 10) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }
});
console.log("Portfolio loaded successfully ✨");
