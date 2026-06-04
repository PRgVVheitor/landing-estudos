const menuButton = document.querySelector("#menuButton");
const siteNav = document.querySelector("#siteNav");
const faqItems = document.querySelectorAll(".faq-item");
const emailForm = document.querySelector(".email-form");

menuButton.addEventListener("click", () => {
  siteNav.classList.toggle("open");
});

siteNav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    siteNav.classList.remove("open");
  }
});

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  emailForm.reset();
  alert("Email registrado na demonstracao do projeto.");
});
