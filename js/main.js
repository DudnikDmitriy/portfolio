// NAV

const btnMobile = document.getElementById("btnMobile");
const nav = document.getElementById("navigation");

const dropBtn = document.getElementById("dropA");
const dropList = document.getElementById("dropUl");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  nav.classList.toggle("active");

  document.documentElement.onclick = function (event) {
    if (event.target !== dropBtn && event.target !== dropList) {
      if (window.screen.width <= 990) {
        dropBtn.classList.remove("active");
        dropList.classList.remove("active");
        nav.classList.remove("active");
      }
    }
  };
}

function dropdown() {
  dropBtn.classList.toggle("active");
  dropList.classList.toggle("active");

  if (window.screen.width > 990) {
    document.documentElement.onclick = function (event) {
      if (event.target !== dropBtn && event.target !== dropList) {
        dropBtn.classList.remove("active");
        dropList.classList.remove("active");
      }
    };
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
dropBtn.addEventListener("click", dropdown);

// CLOSE NAV ON CLICK UL -> A

for (const navLink of document.querySelectorAll(".navLink")) {
  navLink.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// NAV ANIMATION && MOUSE SCROLL ANIMATION (banner)

window.onscroll = () => {
  onScrollNavAnimation();
  toggleMouseStyle();
};

function onScrollNavAnimation() {
  activateMenuCurrentSection(about);
  activateMenuCurrentSection(projects);
  activateMenuCurrentSection(contact);
}

function activateMenuCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu li a[href*=${sectionId}]`);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

const mouse = document.getElementById("mouse");

function toggleMouseStyle() {
  if (window.scrollY > 400) {
    mouse.style.cssText = "opacity:0;" + "visibility:hidden;";
  } else {
    mouse.style.cssText = "opacity:1;" + "visibility:visible;";
  }
}

// PROJECTS ANIMATION

const projectTrigger = document.querySelectorAll(".project__trigger");
const project = document.querySelectorAll(".project__single");


