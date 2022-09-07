const modal = document.getElementById("modal");
const close = document.querySelector("#modal span");

// Show Modal
window.addEventListener("load", (e) => {
  setTimeout(() => {
    modal.style.display = "block";
    document.body.classList.add("body-noscroll");
  }, 8000);
});

// Hide Modal
close.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.classList.remove("body-noscroll");
});

// Hide modal on outside click
window.addEventListener("click", (e) => {
  e.target == modal ? (modal.style.display = "none") : false;
  document.body.classList.remove("body-noscroll");
});
