// Show Menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav_menu");

//Active and Remove

const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  // Active link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  // Remove menu mobile
  const navMenu = document.getElementById("nav_menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Scroll animation
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

// scroll home
sr.reveal(".home_title", {});
sr.reveal(".button", { delay: 50 });
sr.reveal(".home_img img", { delay: 50 });
sr.reveal(".home_social-icon", { interval: 50 });

// Scroll about
sr.reveal(".about_img", {});
sr.reveal(".about_subtitle", { delay: 50 });
sr.reveal(".about_text", { delay: 50 });

// Scroll Skills
sr.reveal(".skills_subtitle", {});
sr.reveal(".skills_text", { delay: 50 });
sr.reveal(".skills_data", { delay: 50 });
sr.reveal(".skill_item", { interval: 50 });
sr.reveal(".skills_img", { delay: 50 });

// Scroll work
sr.reveal(".work_img", { interval: 50 });

// Scroll Contact

sr.reveal(".contact_input", { interval: 50 });
