(function () {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".navigators");
  const menuClose = document.querySelector(".header-nav-close");
  const menuCloseAdd = document.querySelector(".header-nav-close-line");

  burger.addEventListener("click", () => {
    menu.classList.add("navigators-active");
  });

  menuClose.addEventListener("click", () => {
    menu.classList.remove("navigators-active");
  });
  menuCloseAdd.addEventListener("click", () => {
    menu.classList.remove("navigators-active");
  });
})();

(function () {
  const post_office = document.querySelector(".post-office");
  const check_button = document.querySelector(".post-office-button");

  check_button.addEventListener("click", () => {
    console.log("boba");
    post_office.style.display = "none";
  });
})();
