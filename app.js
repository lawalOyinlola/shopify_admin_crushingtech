const notificationBtn = document.querySelector(".notification-btn");
const notification = document.querySelector(".notification");
const myStoreBtn = document.querySelector(".mystore-btn");
const myStore = document.querySelector(".mystore-card");
const popUpBtn = document.querySelector(".pop-btn");
const popUp = document.querySelector(".pop-up");
const taskContainer = document.querySelector(".setup-tasks");
const tasks = document.querySelectorAll(".task");
const setupIcons = document.querySelector(".setup-icons");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");

function toggleVisibility(element) {
  setTimeout(() => {
    element.classList.toggle("hidden");
  }, 100);
}

notificationBtn.addEventListener("click", () => {
  toggleVisibility(notification);
});

myStoreBtn.addEventListener("click", () => {
  toggleVisibility(myStore);
});

popUpBtn.addEventListener("click", () => {
  toggleVisibility(popUp);
});

setupIcons.addEventListener("click", function () {
  toggleVisibility(taskContainer);
  toggleVisibility(openIcon);
  toggleVisibility(closeIcon);
});

tasks.forEach((task) => {
  task.addEventListener("click", () => {
    setTimeout(() => {
      task.classList.add("active");
    }, 200);

    tasks.forEach((otherTask) => {
      setTimeout(() => {
        if (otherTask !== task && otherTask.classList.contains("active")) {
          otherTask.classList.remove("active");
        }
      }, 200);
    });
  });
});
