// helper functions

function scrollToSection(sectionsY) {
    window.scrollTo(0, sectionsY);
}

function whereAmI() {
    return window.scrollY;
}

function whereAreOthers(other) {
    return other.getBoundingClientRect().top;
}

function startQuiz() {
    document.getElementById("quiz-modal").classList.add("show");
  }
  
  function closeQuiz() {
    document.getElementById("quiz-modal").classList.remove("show");
  }

  function closeModal(id) {
    let modalToClose = document.getElementById(id);
    let innerShownElements = modalToClose.querySelectorAll(".show");
    modalToClose.classList.remove("show");
    innerShownElements.forEach(element => {
        element.classList.remove("show");
    });
  }

  function openModal(id) {
    let modalToOpen = document.getElementById(id);
    modalToOpen.classList.add("show");
  }