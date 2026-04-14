window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".nav-link");

  let top = window.scrollY + 150;

  sections.forEach((sec) => {
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));

      let activeLink = document.querySelector('.nav-link[href*="' + id + '"]');

      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
});

document.querySelectorAll(".demo-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    let videoSrc = btn.getAttribute("data-video");
    document.getElementById("demoVideo").src = videoSrc;
  });
});

const modal = document.getElementById("demoModal");
const video = document.getElementById("demoVideo");

modal.addEventListener("hidden.bs.modal", function () {
  video.pause();
  video.currentTime = 0;
});

(function () {
  emailjs.init("Pi51iNIxfcsJzWWtp");
})();

document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let name = document.querySelector('input[name="user_name"]').value;
  let email = document.querySelector('input[name="user_email"]').value;
  let message = document.querySelector("textarea[name='message']").value;

  emailjs
    .send("service_23f989a", "template_cjx782m", {
      user_name: name,
      user_email: email,
      message: message,
    })
    .then(
      function () {
        document.getElementById("success-msg").style.display = "block";
        document.getElementById("contact-form").reset();
      },
      function () {
        alert("❌ Failed to send message");
      },
    );
}
