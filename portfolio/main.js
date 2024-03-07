// 

const backToTopBtn = document.querySelector(".backToTop");
const headerElement = document.querySelector("header");
const mobButton = document.querySelector(".mobile");
const nav = document.querySelector("nav ul");
const menuItems = document.querySelectorAll("nav ul li a");

function scrollFun() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }

  headerColor();
}

function headerColor() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    headerElement.style.backgroundColor = "coral";
  } else {
    headerElement.style.backgroundColor = "rgba(146, 172, 146, 1)"; 
  }
}

window.addEventListener("scroll", scrollFun);
backToTopBtn.addEventListener("click", topFunction);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const toggleMenu = () => {
  nav.classList.toggle("responsive");
};
mobButton.addEventListener("click", toggleMenu);
menuItems.forEach((item) => item.addEventListener("click", toggleMenu));

