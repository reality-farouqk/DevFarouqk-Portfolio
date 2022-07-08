//selectElement
function selectElement(e) {
  return document.querySelector(e);
}

// Navigation setting
const primaryNav = selectElement(".primary-nav");
const navToggle = selectElement(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true)
  } else {
    primaryNav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
  }
});

const navLink = selectElement(".nav ul li a");
function activePageLink() {
  for (let i = 0; i < navLink.length; i++) {
    if (window.location.href == navLink[i].href) navLink[i].classList.add("active");
  }
}
activePageLink();
