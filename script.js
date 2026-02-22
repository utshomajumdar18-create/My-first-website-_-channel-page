document.addEventListener("DOMContentLoaded", function () {

  /* ================= LOGO POPUP ================= */

  const logo = document.getElementById("logoImage");
  const modal = document.getElementById("logoModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.getElementById("closeBtn");

  if (logo && modal && modalImg && closeBtn) {

    logo.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
    });

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });

  }

  /* ================= VIDEO SEARCH ================= */

  const videoSearch = document.getElementById("videoSearch");

  if (videoSearch) {

    videoSearch.addEventListener("input", function () {

      const value = this.value.toLowerCase();
      const cards = document.querySelectorAll(".project-card");

      cards.forEach(function (card) {

        const titleElement = card.querySelector("h3");
        if (!titleElement) return;

        const title = titleElement.textContent.toLowerCase();

        if (title.includes(value)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }

      });

    });

  }

});