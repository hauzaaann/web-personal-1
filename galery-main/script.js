// === LOGIN HANDLER ===
document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  try {
    const response = await fetch("users.json");
    const users = await response.json();

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("loginUser", username);
      window.location.href = "dashboard.html";
    } else {
      errorMsg.textContent = "Invalid username or password.";
    }
  } catch (err) {
    errorMsg.textContent = "Login system error!";
    console.error("Login Error:", err);
  }
});

// === TOGGLE PASSWORD VISIBILITY ===
document.getElementById("togglePassword").addEventListener("click", function () {
  const passwordField = document.getElementById("password");
  const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
  this.classList.toggle("active");
});

// === RIPPLE EFFECT ON LOGIN BUTTON ===
document.querySelectorAll(".login-btn").forEach(button => {
  button.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple");
    this.appendChild(circle);
    const d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + 'px';
    circle.style.left = (e.clientX - this.getBoundingClientRect().left - d / 2) + "px";
    circle.style.top = (e.clientY - this.getBoundingClientRect().top - d / 2) + "px";
    setTimeout(() => circle.remove(), 600);
  });
});
