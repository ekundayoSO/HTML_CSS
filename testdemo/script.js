window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  var scrollPosition = window.scrollY;

  // Change the color based on scroll position
  if (scrollPosition > 100) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Change to the desired color
  } else {
    header.style.backgroundColor = "transparent"; // Change to the initial color (transparent in this case)
  }
});
