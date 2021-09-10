function houstonWeHaveALiftOff() {

    let heroSection = document.getElementById("hero");
    let postsSection = document.getElementById("posts");
    let productsSection = document.getElementById("products");
    let introSection = document.getElementById("intro");
    let funFactsSection = document.getElementById("fun-facts");

    let heroSectionInitPosY = whereAreOthers(heroSection);
    let postsSectionInitPosY = whereAreOthers(postsSection);
    let productsSectionInitPosY= whereAreOthers(productsSection);
    let introSectionInitPosY = whereAreOthers(introSection);
    let funFactsSectionInitPosY = whereAreOthers(funFactsSection);


    let screenHalfHeight = introSectionInitPosY/2;

    window.addEventListener("scroll", () => {

        //console.log("hero: " + whereAreOthers(heroSection));
        //console.log("intro: " + whereAreOthers(introSection));
        //console.log("fun-facts: " + whereAreOthers(funFactsSection));
        //console.log("help: " + whereAreOthers(gethelpSection));
        //console.log("category: " + whereAreOthers(categoriesSection));
        //console.log("current: " + whereAmI());

       if((whereAreOthers(heroSection) * -1) < screenHalfHeight) {
            //Hero section sticky scroll
            //console.log("hero");

        } else if((whereAreOthers(postsSection) * -1) < screenHalfHeight){
            //intro section sticky scroll
            //console.log("intro");

        } else if((whereAreOthers(productsSection) * -1) < screenHalfHeight){
            //fun facts section sticky scroll
            //console.log("fun facts");

        } else if((whereAreOthers(introSection) * -1) < screenHalfHeight){
            //help section sticky scroll
            //console.log("help");

        } else if((whereAreOthers(funFactsSection) * -1) < screenHalfHeight){
            // categories section sticky scroll
            //console.log("categories");

        } else {
            // Hero section sticky scroll
            //console.log("else");

        }

    });

}