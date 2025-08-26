/* jshint esversion: 11 */

/* JS taken from W3 schools, referenced in README.md */
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
const navbar = document.getElementById("navbar");
const threshold = 80;
let isProgrammaticScroll = false;

window.addEventListener("scroll", function () {
  /* using flag to determine whether user is scrolling */
  if (isProgrammaticScroll) return;
    
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    /* when scrolling up, remove the .hide class to display the navbar */
    navbar.classList.remove("hide");
  } else if (currentScrollPos - prevScrollpos > threshold) {
    /* when scrolling down, add the .hide class to the navbar to hide it from the screen */
    navbar.classList.add("hide");
    /* resets the scroll position after hiding */
    prevScrollpos = currentScrollPos;
  }

  if (currentScrollPos < prevScrollpos) {
  prevScrollpos = currentScrollPos;
  }
});

/* JS reused from Boardwalk Games walkthrough, referenced in README.md */
/* JS to ensure that Bootstrap mobile navbar collapses when navigating to in-page links */
document
.querySelectorAll(".navbar-collapse .nav-link")
.forEach((link) => {
    link.addEventListener("click", function (e) {
        let section = document.querySelector(e.target.getAttribute("href"));
        if (section) {
            e.preventDefault(); // Prevent default anchor click behavior
            let navbarHeight = document.querySelector(".navbar-toggler").offsetHeight;

            isProgrammaticScroll = true;

            window.scroll({
                top: section.offsetTop - navbarHeight, // Adjust for navbar height
                behavior: "smooth",
            });
            document
                .querySelector(".navbar-collapse")
                .classList.remove("show"); // Collapse navbar

            setTimeout(() => { 
                isProgrammaticScroll = false; 
                prevScrollpos = window.pageYOffset;
            }, 600);
        }
    });
});