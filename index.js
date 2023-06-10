function verify(event) {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;

  event.preventDefault();
  if (email === "" && pass === "") {
    alert("fill the required detailes");
  } else if (email == "admin@materialize.com" && pass == "admin") {
    window.location.href = "component.html";
  } else {
    alert("Incorrect password or Email. Please try again.");
  }
}

