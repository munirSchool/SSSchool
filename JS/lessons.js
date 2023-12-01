const tabs = document.querySelectorAll(".switcher li");
const teachersBoxes = document.querySelectorAll(".boxes .box");

tabs.forEach((tab) => {
  tab.onclick = () => {
    tabs.forEach((e) => {
      e.classList.remove("active");
    });
    tab.classList.add("active");
    teachersBoxes.forEach((box) => {
      box.classList.remove("active");
    });
    document.querySelector(tab.dataset.cat).classList.add("active");
  };
});
