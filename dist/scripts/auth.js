// Script for password visibility toggle button for login.html and register.html

document.addEventListener("DOMContentLoaded", function () {
  const togglePasswordButton = document.querySelector(
    ".toggle-password-button"
  );

  const passwordInput = document.getElementById("password");
  const showIcon = document.querySelector(".show-password-icon");
  const hideIcon = document.querySelector(".hide-password-icon");

  togglePasswordButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showIcon.classList.add("hidden");
      hideIcon.classList.remove("hidden");
    } else {
      passwordInput.type = "password";
      showIcon.classList.remove("hidden");
      hideIcon.classList.add("hidden");
    }
  });
});

// Script for submission error for login.html and notification-login-error.html

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const loginSubmitButton = document.getElementById("login-submit-button");
  const loginAuthError = document.getElementById("login-auth-error");

  loginSubmitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const usernameEmail = document.getElementById("login-username-email").value;
    const password = document.getElementById("login-password").value;

    if (usernameEmail !== "correctUser" || password !== "correctPassword") {
      loginAuthError.classList.remove("hidden");
    }
  });
});

// Script for logout success for user-modal.html, login.html, and notifification-logout-success.html

document.addEventListener("DOMContentLoaded", function () {
  const logoutButton = document.getElementById("logout-button");

  logoutButton.addEventListener("click", function () {
    window.location.href = "login.html";

    window.addEventListener("load", function () {
      const logoutAuthSuccess = document.getElementById("logout-auth-success");
      if (logoutAuthSuccess) {
        logoutAuthSuccess.classList.remove("hidden", "sm:hidden");
        logoutAuthSuccess.classList.add("flex", "sm:flex");
      }
    });
  });
});

// Script for closing notification banners for notification-login-error.html and notification-logout-success.html

document.addEventListener("DOMContentLoaded", function () {
  const closeNotificationButtons = document.querySelectorAll(
    ".close-notification-button"
  );

  closeNotificationButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const bannerNotification = button.closest(".banner-notification");

      if (bannerNotification) {
        bannerNotification.classList.remove("sm:flex");
        bannerNotification.classList.add("sm:hidden");
      }
    });
  });
});

// Script for existing email address error for register.html

document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const registeredEmails = ["test@example.com", "user@domain.com"];
    const emailInput = document.getElementById("register-email").value;

    if (registeredEmails.includes(emailInput)) {
      document
        .getElementById("existing-account-error")
        .classList.remove("hidden");
    } else {
    }
  });
