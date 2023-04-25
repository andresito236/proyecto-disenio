const currentPage = window.location.pathname.split("/").pop();
const navList = document.getElementById("lista");
const navLinks = navList.getElementsByTagName("a");
const theme = document.getElementById("theme");
const root = document.documentElement;

const pageList = {
  "index.php": 0,
  "in-actuales.php": 1,
  "in-informes.php": 1,
  "in-futuros.php": 1,
  "eg-actuales.php": 5,
  "eg-futuros.php": 5,
  "eg-informes.php": 5,
};

const navIndex = pageList[currentPage];

if (navIndex !== undefined) {
  navLinks[navIndex].classList.add("active");
}

if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "dark");
} else if (localStorage.getItem("theme") === "light") {
  root.style.setProperty("--bg-sidebar", "#e4e5f1");
  root.style.setProperty("--bg-main-dashboard", "white");
  root.style.setProperty("--text-change", "black");
} else {
  root.style.setProperty("--bg-sidebar", "#181c29");
  root.style.setProperty("--bg-main-dashboard", "#111219");
  root.style.setProperty("--text-change", "white");
}

theme.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "dark") {
    root.style.setProperty("--bg-sidebar", "#e4e5f1");
    root.style.setProperty("--bg-main-dashboard", "white");
    root.style.setProperty("--text-change", "black");
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
    root.style.setProperty("--bg-sidebar", "#181c29");
    root.style.setProperty("--bg-main-dashboard", "#111219");
    root.style.setProperty("--text-change", "white");
  }
});
