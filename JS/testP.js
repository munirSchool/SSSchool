const tabs = document.querySelectorAll(".tabs li");
const testList = document.querySelectorAll(".test-list");
const teachers = document.querySelectorAll(".teachers li");
const teacherBox = document.querySelectorAll(".teacher-box");

teachers.forEach((teacher) => {
  teacher.addEventListener("click", () => {
    teachers.forEach((e) => {
      e.classList.remove("active");
    });
    teacher.classList.add("active");
    const boxClassName = teacher.dataset.cat;
    teacherBox.forEach((box) => {
      box.classList.remove("active");
      if (box.classList.contains(boxClassName)) {
        box.classList.add("active");
      }
    });
  });
});

tabs.forEach((tab) => {
  tab.onclick = () => {
    tabs.forEach((e) => {
      e.classList.remove("active");
    });
    tab.classList.add("active");
    const className = tab.dataset.count;
    testList.forEach((list) => {
      list.classList.remove("active");
      if (list.classList.contains(className)) {
        list.classList.add("active");
      }
    });
  };
});
