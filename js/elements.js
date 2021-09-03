function houstonWeHaveALiftOff() {

    let heroSection = document.getElementById("hero");
    let introSection = document.getElementById("intro");
    let funFactsSection = document.getElementById("fun-facts");
    let gethelpSection = document.getElementById("get-help");
    let categoriesSection = document.getElementById("categories");

    let heroSectionInitPosY = whereAreOthers(heroSection);
    let introSectionInitPosY = whereAreOthers(introSection);
    let funFactsSectionInitPosY = whereAreOthers(funFactsSection);
    let gethelpSectionInitPosY = whereAreOthers(gethelpSection);
    let categoriesSectionInitPosY= whereAreOthers(categoriesSection);

    let screenHalfHeight = introSectionInitPosY/2;

    window.addEventListener("scroll", () => {

        console.log("hero: " + whereAreOthers(heroSection));
        console.log("intro: " + whereAreOthers(introSection));
        console.log("fun-facts: " + whereAreOthers(funFactsSection));
        console.log("help: " + whereAreOthers(gethelpSection));
        console.log("category: " + whereAreOthers(categoriesSection));
        console.log("current: " + whereAmI());

       if((whereAreOthers(heroSection) * -1) < screenHalfHeight) {
            //Hero section sticky scroll
            console.log("hero");
            introSection.classList.add("get-over-here");

        } else if((whereAreOthers(introSection) * -1) < screenHalfHeight){
            // intro section sticky scroll
            console.log("intro");
            introSection.classList.remove("get-over-here");

        } else if((whereAreOthers(funFactsSection) * -1) < screenHalfHeight){
            // fun facts section sticky scroll
            console.log("fun facts");
            introSection.classList.add("get-over-here");

        } else if((whereAreOthers(gethelpSection) * -1) < screenHalfHeight){
            // help section sticky scroll
            console.log("help");

        } else if((whereAreOthers(categoriesSection) * -1) < screenHalfHeight){
            // categories section sticky scroll
            console.log("categories");

        } else {
            // Hero section sticky scroll
            console.log("else");

        }

    });

}