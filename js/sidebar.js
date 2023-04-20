const currentPage = window.location.pathname.split("/").pop();
const navList = document.getElementById('lista');
const navLinks = navList.getElementsByTagName('a');

const pageList = {
    'index.php': 0,
    'in-actuales.php': 1,
    'in-informes.php': 1,
    'in-futuros.php': 1,
    'eg-actuales.php': 5,
    'eg-futuros.php': 5, 
    'eg-informes.php': 5
};

const navIndex = pageList[currentPage];

if (navIndex !== undefined) {
    navLinks[navIndex].classList.add('active');
}
