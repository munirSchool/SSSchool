// Start Menu
let menuBtn = document.querySelector(".toggle-nav");
let spans = document.querySelectorAll(".toggle-nav span");
let nav = document.querySelector("header nav");

menuBtn.addEventListener("click", () => {
  if (menuBtn.dataset.state === "false") {
    nav.classList.add("active");
    spans.forEach((span) => {
      span.classList.add("active");
    });
    menuBtn.dataset.state = "true";
  } else {
    nav.classList.remove("active");
    spans.forEach((span) => {
      span.classList.remove("active");
    });
    menuBtn.dataset.state = "false";
  }
});
// End Menu
let span = document.querySelector(".up");
window.onscroll = function () {
  if (this.scrollY >= 1000) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
