function scrollToSection(e) {
    window.scrollTo(0, e)
}

function whereAmI() {
    return window.scrollY
}

function whereAreOthers(e) {
    return e.getBoundingClientRect().top
}

function startQuiz() {
    document.getElementById("quiz-modal").classList.add("show"), document.querySelector("body").classList.add("noScroll")
}

function closeModal(e) {
    let o = document.getElementById(e),
        l = o.querySelectorAll(".show");
    document.querySelector("body").classList.remove("noScroll"), o.classList.remove("show"), l.forEach(e => {
        e.classList.remove("show")
    }), document.querySelectorAll(".full").forEach(e => {
        e.classList.remove("full")
    })
}

function openModal(e) {
    document.getElementById(e).classList.add("show"), document.querySelector("body").classList.add("noScroll")
}
document.onkeydown = function(e) {
    "Escape" === (e = e || window.event).key && (document.querySelectorAll(".show").forEach(e => {
        e.classList.remove("show")
    }), document.querySelectorAll(".full").forEach(e => {
        e.classList.remove("full")
    }), document.querySelectorAll(".noScroll").forEach(e => {
        e.classList.remove("noScroll")
    }))
};

function closeFloater() {
	document.getElementById("cookie-floater").classList.add("floater-hidden");
}

function showCookiePopup() {
    document.getElementById("cookie-floater").classList.add("floater-slide-in");
}

function eatYourCookies() {
    //window['ga-disable-UA-206890401-2'] = false;
    document.cookie = "chocolate-chip-cookie=1; expires=Thu, 31 Dec 2022 12:00:00 UTC";
    closeFloater();
}

window.addEventListener('load', () => {
    if( document.cookie.indexOf('chocolate-chip-cookie=') == -1) {
        showCookiePopup();
      }
  });