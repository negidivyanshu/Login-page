function verify(event) {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;

  event.preventDefault();
  if (email === "" && pass === "") {
    alert("fill the required detailes");
  } else if (email == "admin@materialize.com" && pass == "admin") {
    window.location.href = "component.html";
  }
  else if (email == "client@materialize.com" && pass == "client") {
    window.location.href = "component.html";
  }
  else {
    alert("Incorrect password or Email. Please try again.");
  }
}


document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");

        toggle.classList.toggle("bx-x");

        bodypd.classList.toggle("body-pd");

        headerpd.classList.toggle("body-pd");
      });
    }
  };

  showNavbar("header-toggle", "nav-bar", "body-pd", "header");

  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  y;
});

