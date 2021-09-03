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
    console.log("Quiz started");
    document.getElementById("quiz-modal").classList.add("show");
  }
  
  function closeQuiz() {
    console.log("Quiz closed");
    document.getElementById("quiz-modal").classList.remove("show");
  }