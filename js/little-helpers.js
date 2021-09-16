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
    document.querySelector("body").classList.add("noScroll");
  }

function closeModal(id) {
    let modalToClose = document.getElementById(id);
    let innerShownElements = modalToClose.querySelectorAll(".show");
    document.querySelector("body").classList.remove("noScroll");
    modalToClose.classList.remove("show");
    innerShownElements.forEach(element => {
        element.classList.remove("show");
    });
    document.querySelectorAll(".full").forEach(element => {
        element.classList.remove("full");
    })
  }

function openModal(id) {
    let modalToOpen = document.getElementById(id);
    modalToOpen.classList.add("show");
    document.querySelector("body").classList.add("noScroll");
  }

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.key === "Escape") {
        document.querySelectorAll(".show").forEach(element => {
            element.classList.remove("show");
        });
        document.querySelectorAll(".full").forEach(element => {
            element.classList.remove("full");
        });
        document.querySelectorAll(".noScroll").forEach(element => {
            element.classList.remove("noScroll");
        });
    }
};