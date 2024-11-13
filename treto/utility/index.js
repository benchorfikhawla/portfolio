export const tretoUtility = {
  topBarActive() {
    var mainMenu = document.querySelector(".mil-top-panel");

    if (mainMenu) {
      window.addEventListener("scroll", function () {
        var scrolling = window.scrollY || document.documentElement.scrollTop;

        if (scrolling > 30) {
          mainMenu.classList.add("mil-active");
        } else {
          mainMenu.classList.remove("mil-active");
        }
      });
    }
  },
  getPagination(totalNumber, sort) {
    let arr = new Array(Math.ceil(totalNumber / sort))
      .fill()
      .map((_, idx) => idx + 1);
    return arr;
  },
  pagination(listClass, sort, active) {
    let list = document.querySelectorAll(listClass);
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      if (active === 1) {
        if (i < sort) {
          element.classList.remove("d-none");
        } else {
          element.classList.add("d-none");
        }
      } else {
        if (i >= (active - 1) * sort && i < active * sort) {
          element.classList.remove("d-none");
        } else {
          element.classList.add("d-none");
        }
      }
    }
  },
};
