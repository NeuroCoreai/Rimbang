// ==== Script Interaktif untuk Rimbang Gym ====

window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formJoin");
  const toggleBtn = document.getElementById("toggleMode");

  // Submit Form
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Terima kasih sudah mendaftar! Kami akan segera menghubungi Anda.");
      form.reset();
    });
  }

  // Toggle Mode Terang/Gelap
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  }

  // Smooth scroll untuk anchor
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
