function houstonWeHaveALiftOff() {

    let heroSection = document.getElementById("hero");
    let postsSection = document.getElementById("posts");
    let productsSection = document.getElementById("products");
    let introSection = document.getElementById("intro");
    let funFactsSection = document.getElementById("fun-facts");

/*     let heroSectionInitPosY = whereAreOthers(heroSection);
    let postsSectionInitPosY = whereAreOthers(postsSection);
    let productsSectionInitPosY= whereAreOthers(productsSection);
    let introSectionInitPosY = whereAreOthers(introSection);
    let funFactsSectionInitPosY = whereAreOthers(funFactsSection); */


/*     let screenHalfHeight = introSectionInitPosY/2;
 */

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

/*     window.addEventListener("scroll", () => {

       if((whereAreOthers(heroSection) * -1) < screenHalfHeight) {

        } else if((whereAreOthers(postsSection) * -1) < screenHalfHeight){

        } else if((whereAreOthers(productsSection) * -1) < screenHalfHeight){

        } else if((whereAreOthers(introSection) * -1) < screenHalfHeight){

        } else if((whereAreOthers(funFactsSection) * -1) < screenHalfHeight){

        } else {

        }

    }); */

}