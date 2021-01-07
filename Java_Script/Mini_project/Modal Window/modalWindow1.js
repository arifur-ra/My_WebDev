const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const showModal = document.querySelectorAll(".show-modal");

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Close the Window using Escape Key;
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
