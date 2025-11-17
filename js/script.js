document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const toggleBtn = document.getElementById("theme-toggle");

  toggleBtn.addEventListener("click", () => {
    const dark = body.classList.toggle("dark-mode");
    if (dark) {
      toggleBtn.textContent = "☀️";
      toggleBtn.setAttribute("aria-label", "Cambiar a modo claro");
    } else {
      toggleBtn.textContent = "🌙";
      toggleBtn.setAttribute("aria-label", "Cambiar a modo oscuro");
    }
  });
});
