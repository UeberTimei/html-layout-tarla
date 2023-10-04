(function () {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".navigators");
  const menuClose = document.querySelector(".header-nav-close");

  burger.addEventListener("click", () => {
    menu.classList.add("navigators-active");
  });

  menuClose.addEventListener("click", () => {
    menu.classList.remove("navigators-active");
  });
})();
