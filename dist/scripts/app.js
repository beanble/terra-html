// Script for opening and closing user-modal.html from world-list-navbars.html

const modalButton = document.querySelector(".user-modal-button");
const modalContainer = document.getElementById("user-modal-container");
const modalPlacement = document.querySelector(".user-modal-placement");

function toggleModal() {
  if (modalContainer.style.display === "block") {
    modalContainer.style.display = "none";
  } else {
    modalContainer.style.display = "block";
    modalPlacement.appendChild(modalContainer);
  }
}

modalButton.addEventListener("click", toggleModal);

window.addEventListener("click", function (event) {
  if (
    modalContainer.style.display === "block" &&
    !modalContainer.contains(event.target) &&
    !modalButton.contains(event.target)
  ) {
    modalContainer.style.display = "none";
  }
});

modalContainer.style.display = "none";

// Script for closing new-world-modal.html from world-list-navbars.html

document.querySelector(".new-world-button").addEventListener("click", () => {
  document.querySelector(".new-world-modal").classList.remove("hidden");
});

document
  .querySelector(".close-new-world-modal-button")
  .addEventListener("click", () => {
    document.querySelector(".new-world-modal").classList.add("hidden");
  });

document
  .querySelector(".new-world-modal")
  .addEventListener("click", (event) => {
    const form = document.querySelector(".new-world-form");
    if (!form.contains(event.target)) {
      document.querySelector(".new-world-modal").classList.add("hidden");
    }
  });

// Script to enable the submit button when both inputs contain text for new-world-modal.html

document
  .querySelectorAll(".new-world-name-input, .new-world-description-input")
  .forEach((input) => {
    input.addEventListener("input", () => {
      const nameInput = document
        .querySelector(".new-world-name-input")
        .value.trim();
      const descriptionInput = document
        .querySelector(".new-world-description-input")
        .value.trim();
      const submitButton = document.querySelector(
        "#new-world-form-submit-button"
      );

      if (nameInput && descriptionInput) {
        submitButton.classList.remove("disabled");
        submitButton.classList.remove("bg-gray-500");
        submitButton.classList.add("bg-blue-600", "hover:bg-blue-500");
      } else {
        submitButton.classList.add("disabled");
        submitButton.classList.add("bg-gray-500");
        submitButton.classList.remove("bg-blue-600", "hover:bg-blue-500");
      }
    });
  });

// Scripts for loading bar animation for world-load-generating.html and world-load-opening.html

document.addEventListener("DOMContentLoaded", function () {
  let progress = 0;
  const loadingBar = document.getElementsByClassName("loading-bar")[0];

  function animateLoading() {
    if (progress <= 100) {
      loadingBar.style.width = `${progress}%`;
      progress++;
      setTimeout(animateLoading, 50);
    }
  }

  setTimeout(animateLoading, 100);
});

// Script to create new world-card.html from new-world-modal.html within world-list-content.html

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".new-world-form");
  const worldNameInput = document.querySelector(".new-world-name-input");
  const submitButton = document.querySelector(".new-world-form-submit-button");
  const worldContentContainer = document.querySelector(".world-content-column");

  let cardCount = 0;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const worldCard = document.createElement("div");
    worldCard.className =
      "flex flex-col w-1/3 cursor-pointer world-card h-96 rounded-xl outline outline-zinc-700 outline-1 hover:bg-zinc-800";
    worldCard.innerHTML = `
      <div class="object-cover w-full world-display-cover h-2/3 rounded-t-xl bg-zinc-700"></div>
      <div class="flex items-center justify-between w-full px-6 bg-transparent border-gray-500 h-1/3 rounded-b-xl">
        <div class="flex flex-col items-start justify-center w-full gap-y-2">
          <div class="text-lg font-medium text-white world-card-title">${worldNameInput.value}</div>
          <div class="text-sm font-normal tracking-tight text-gray-300">
            Created <span class="world-creation-date">#</span> days ago
          </div>
        </div>
      </div>
    `;

    if (cardCount % 3 === 0) {
      const newRow = document.createElement("div");
      newRow.className = "flex flex-row w-full world-content-row gap-x-8";
      worldContentContainer.appendChild(newRow);
    }

    const currentRow = worldContentContainer.lastElementChild;
    currentRow.appendChild(worldCard);

    cardCount++;
    form.reset();
  });

  worldNameInput.addEventListener("input", () => {
    submitButton.disabled = !worldNameInput.value.trim();
  });
});

// Script for right-clicking world-card.html to open "world-card-modal.html"

document.addEventListener("DOMContentLoaded", () => {
  const worldCards = document.querySelectorAll(".world-card");
  const worldCardModal = document.querySelector(".world-card-modal");

  function openModal(event) {
    event.preventDefault();
    worldCardModal.style.display = "flex";
  }

  worldCards.forEach((card) => {
    card.addEventListener("contextmenu", openModal);
  });

  document.addEventListener("click", (event) => {
    if (
      !worldCardModal.contains(event.target) &&
      worldCardModal.style.display === "flex"
    ) {
      worldCardModal.style.display = "none";
    }
  });
});

// Script for new-world-modal.html submission leading to world-load-generating.html

document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector(".new-world-form-submit-button");
  submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevents form's default submission
    window.location.href = "world-load-generating.html"; // Redirects to the new page
  });
});

// Script for opening existing world-card.html leading to world-load-opening.html

document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.querySelector(".play-world-button");
  playButton.addEventListener("click", function () {
    window.location.href = "world-load-opening.html";
  });
});

// Script for renaming existing world-card.html to open rename-world-modal.html

document.querySelectorAll(".rename-world-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".rename-world-modal").classList.remove("hidden");
  });
});

// Script for updating existing world-card.html from rename-world-modal.html

document
  .querySelector(".save-world-name-submit-button")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const newName = document
      .querySelector(".save-world-name-input")
      .value.trim();
    if (newName) {
      document.querySelector(".world-card-title").textContent = newName;
      document.querySelector(".rename-world-modal").classList.add("hidden");
    }
  });

// Script for exiting rename-world-modal.html

document
  .querySelector(".close-rename-world-modal-button")
  .addEventListener("click", () => {
    document.querySelector(".rename-world-modal").classList.add("hidden");
  });

document
  .querySelector(".rename-world-modal")
  .addEventListener("click", (event) => {
    const form = document.querySelector(".rename-world-form");
    if (!form.contains(event.target)) {
      document.querySelector(".rename-world-modal").classList.add("hidden");
    }
  });

// Script to enable the submit button when both inputs contain text for new-world-modal.html

document
  .querySelector(".save-world-name-input")
  .addEventListener("input", () => {
    const nameInput = document
      .querySelector(".save-world-name-input")
      .value.trim();
    const submitButton = document.querySelector(
      ".save-world-name-submit-button"
    );

    if (nameInput) {
      submitButton.classList.remove("disabled", "bg-gray-500");
      submitButton.classList.add("bg-blue-600", "hover:bg-blue-500");
    } else {
      submitButton.classList.add("disabled", "bg-gray-500");
      submitButton.classList.remove("bg-blue-600", "hover:bg-blue-500");
    }
  });

// Script for deletinng existing world-card.html

document.addEventListener("DOMContentLoaded", function () {
  const deleteButton = document.querySelector(".delete-world-button");

  deleteButton.addEventListener("click", function () {
    const worldCard = document.querySelector(".world-card");
    if (worldCard) {
      worldCard.remove();
    }
  });
});
