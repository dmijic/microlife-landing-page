function houstonWeHaveALiftOff() {
    let heroSection = document.getElementById("hero");
    let postsSection = document.getElementById("posts");
    heroSection.addEventListener("click", (e) => {
        let clickedElement = e.target;
        while (!clickedElement.hasAttribute('id')) {
            clickedElement = clickedElement.parentElement;
        }
            let id = clickedElement.getAttribute('id');
        clickedElement.classList.add("full");
        postsSection.classList.add("show");
        document.getElementById(id+"-modal").classList.add("show");
        document.querySelector("body").classList.add("noScroll");
    })
}