new Vue({
    el: "#products",
    data: () => ({
        productList: [{
            name: "B3 AFIB",
            displayName: "BP B3 AFIB",
            img: "img/products/b3-afib.png",
            url: "https://www.farmacia.hr/brandovi/microlife/microlife-tlakomjer-bp-b3-afib/?utm_source=landing_page&utm_medium=product&utm_campaign=mojtlakomjer_listopad",
            description: "Tlakomjer s AFIBsens, IHB i MAM tehnologijama. Podržava 99 memorija.",
            index: 0,
            features: [{
                name: "Mogućnost otkrivanja rizika atrijske fibrilacije",
                icon: "img/products/icons/afib-sens.png"
            }, {
                name: "Mogućnost otkrivanja srčanih aritmija",
                icon: "img/products/icons/pad.png"
            }, {
                name: "Tehnologija 3 uzastopna mjerenja",
                icon: "img/products/icons/mam.png"
            }, {
                name: "Indikator provjere manžete",
                icon: "img/products/icons/check.png"
            }],
            featureBar: [{
                name: "Clinically Validated",
                icon: "img/products/icons/clinically-validated.png"
            }, {
                name: "5 year guarantee",
                icon: "img/products/icons/5-year.png"
            }]
        }, {
            name: "A6 PC",
            displayName: "BP A6 PC",
            img: "img/products/a6-pc.png",
            url: "https://www.farmacia.hr/brandovi/microlife/microlife-tlakomjer-bp-a6-afib-pc-adapter/?utm_source=landing_page&utm_medium=product&utm_campaign=mojtlakomjer_listopad",
            description: "Tlakomjer s AFIBsens i MAM tehnologijama. Tvrda konusna manžeta, memorija za 2 korisnika te adapter u paketu.",
            index: 1,
            features: [{
                name: "Mogućnost otkrivanja rizika atrijske fibrilacije",
                icon: "img/products/icons/afib-sens.png"
            }, {
                name: "Tehnologija 3 uzastopna mjerenja",
                icon: "img/products/icons/mam.png"
            }, {
                name: "Gentle+ tehnologija manžete",
                icon: "img/products/icons/gentle+.png"
            }, {
                name: "Tvrda konusna manžeta",
                icon: "img/products/icons/soft.png"
            }, {
                name: "Indikator pokreta ruke",
                icon: "img/products/icons/hand-movement.png"
            }, {
                name: "Indikator provjere manžete",
                icon: "img/products/icons/check.png"
            }, {
                name: "2 korisnika s 99 memorija",
                icon: "img/products/icons/memory.png"
            }, {
                name: "Adapter uključen u pakiranju",
                icon: "img/products/icons/power-brick.png"
            }],
            featureBar: [{
                name: "Clinically Validated",
                icon: "img/products/icons/clinically-validated.png"
            }, {
                name: "5 year guarantee",
                icon: "img/products/icons/5-year.png"
            }]
        }, {
            name: "A150 AFIB",
            displayName: "BP A150 AFIB",
            img: "img/products/a150-afib.png",
            url: "https://www.farmacia.hr/brandovi/microlife/microlife-tlakomjer-bp-a150-afib/?utm_source=landing_page&utm_medium=product&utm_campaign=mojtlakomjer_listopad",
            description: "Tlakomjer s IHB i MAM tehnologijama. Podržava 30 memorija.",
            index: 2,
            features: [{
                name: "Mogućnost otkrivanja rizika atrijske fibrilacije",
                icon: "img/products/icons/afib-sens.png"
            }, {
                name: "Tehnologija 3 uzastopna mjerenja",
                icon: "img/products/icons/mam.png"
            }, {
                name: "Gentle+ tehnologija manžete",
                icon: "img/products/icons/gentle+.png"
            }, {
                name: "Meka konusna manžeta - 2 godine garancije",
                icon: "img/products/icons/soft.png"
            }, {
                name: "Indikator pokreta ruke",
                icon: "img/products/icons/hand-movement.png"
            }, {
                name: "Indikator provjere manžete",
                icon: "img/products/icons/check.png"
            }, {
                name: "30 memorija",
                icon: "img/products/icons/memory.png"
            }],
            featureBar: [{
                name: "Clinically Validated",
                icon: "img/products/icons/clinically-validated.png"
            }, {
                name: "5 year guarantee",
                icon: "img/products/icons/5-year.png"
            }]
        }, {
            name: "A2 Basic",
            displayName: "BP A2 Basic",
            img: "img/products/a2-basic.png",
            url: "https://www.farmacia.hr/brandovi/microlife/microlife-tlakomjer-bp-a2-basic/?utm_source=landing_page&utm_medium=product&utm_campaign=mojtlakomjer_listopad",
            description: "Tlakomjer s IHB tehnologijom. Podržava 30 memorija.",
            index: 3,
            features: [{
                name: "Mogućnost otkrivanja srčanih aritmija",
                icon: "img/products/icons/pad.png"
            }, {
                name: "Gentle+ tehnologija manžete",
                icon: "img/products/icons/gentle+.png"
            }, {
                name: "Meka konusna manžeta - 2 godine garancije",
                icon: "img/products/icons/soft.png"
            }, {
                name: "Indikator pokreta ruke",
                icon: "img/products/icons/hand-movement.png"
            }, {
                name: "Indikator provjere manžete",
                icon: "img/products/icons/check.png"
            }, {
                name: "30 memorija",
                icon: "img/products/icons/memory.png"
            }],
            featureBar: [{
                name: "Clinically Validated",
                icon: "img/products/icons/clinically-validated.png"
            }, {
                name: "5 year guarantee",
                icon: "img/products/icons/5-year.png"
            }]
        }, {
            name: "A3 Plus",
            displayName: "BP A3 Plus",
            img: "img/products/a3-plus.png",
            url: "https://www.farmacia.hr/brandovi/microlife/microlife-tlakomjer-bp-a3-mam-plus/?utm_source=landing_page&utm_medium=product&utm_campaign=mojtlakomjer_listopad",
            description: "Tlakomjer s IHB i MAM tehnologijama. Memorija za 2 korisnika te adapter u paketu.",
            index: 4,
            features: [{
                name: "Mogućnost otkrivanja srčanih aritmija",
                icon: "img/products/icons/pad.png"
            }, {
                name: "Tehnologija 3 uzastopna mjerenja",
                icon: "img/products/icons/mam.png"
            }, {
                name: "Gentle+ tehnologija manžete",
                icon: "img/products/icons/gentle+.png"
            }, {
                name: "Meka konusna manžeta - 2 godine garancije",
                icon: "img/products/icons/soft.png"
            }, {
                name: "Indikator pokreta ruke",
                icon: "img/products/icons/hand-movement.png"
            }, {
                name: "Indikator provjere manžete",
                icon: "img/products/icons/check.png"
            }, {
                name: "2 korisnika s 99 memorija",
                icon: "img/products/icons/memory.png"
            }, {
                name: "Adapter uključen u pakiranju",
                icon: "img/products/icons/power-brick.png"
            }],
            featureBar: [{
                name: "Clinically Validated",
                icon: "img/products/icons/clinically-validated.png"
            }, {
                name: "5 year guarantee",
                icon: "img/products/icons/5-year.png"
            }]
        }, {
            name: "A2 Classic",
            displayName: "BP A2 Classic",
            img: "img/products/a2-classic.png",
            url: "https://www.farmacia.hr/brandovi/microlife/microlife-tlakomjer-bp-a2-classic/?utm_source=landing_page&utm_medium=product&utm_campaign=mojtlakomjer_listopad",
            description: "Tlakomjer s IHB tehnologijom. Podržava 30 memorija te adapter u paketu.",
            index: 5,
            features: [{
                name: "Mogućnost otkrivanja srčanih aritmija",
                icon: "img/products/icons/pad.png"
            }, {
                name: "Gentle+ tehnologija manžete",
                icon: "img/products/icons/gentle+.png"
            }, {
                name: "Meka konusna manžeta - 2 godine garancije",
                icon: "img/products/icons/soft.png"
            }, {
                name: "30 memorija",
                icon: "img/products/icons/memory.png"
            }, {
                name: "Adapter uključen u pakiranju",
                icon: "img/products/icons/power-brick.png"
            }],
            featureBar: [{
                name: "Clinically Validated",
                icon: "img/products/icons/clinically-validated.png"
            }, {
                name: "5 year guarantee",
                icon: "img/products/icons/5-year.png"
            }]
        }, {
            name: "A1 Easy",
            displayName: "BP A1 Easy",
            img: "img/products/a1-easy.png",
            url: "https://www.farmacia.hr/brandovi/microlife/microlife-tlakomjer-bp-a1-easy/?utm_source=landing_page&utm_medium=product&utm_campaign=mojtlakomjer_listopad",
            description: "Tlakomjer s IHB tehnologijom. Najjednostavniji model, idealan kao putni tlakomjer.",
            index: 6,
            features: [{
                name: "Mogućnost otkrivanja srčanih aritmija",
                icon: "img/products/icons/pad.png"
            }, {
                name: "Gentle+ tehnologija manžete",
                icon: "img/products/icons/gentle+.png"
            }, {
                name: "Meka konusna manžeta - 2 godine garancije",
                icon: "img/products/icons/soft.png"
            }, {
                name: "Indikator pokreta ruke",
                icon: "img/products/icons/hand-movement.png"
            }, {
                name: "Indikator provjere manžete",
                icon: "img/products/icons/check.png"
            }],
            featureBar: [{
                name: "Clinically Validated",
                icon: "img/products/icons/clinically-validated.png"
            }, {
                name: "5 year guarantee",
                icon: "img/products/icons/5-year.png"
            }]
        }],
        counter: 0,
        productToShow: []
    }),
    methods: {
        checkIfItemInStorage: function() {
            const i = document.querySelector("#products"),
                n = () => {
                    if (function(i) {
                            const n = i.getBoundingClientRect();
                            return n.top <= window.innerHeight / 2 && n.top >= -window.innerHeight / 3
                        }(i) && null != localStorage.getItem("showProductIndex")) {
                        let i = parseInt(localStorage.getItem("showProductIndex"));
                        this.productToShow = this.productList[i], localStorage.removeItem("showProductIndex")
                    }
                };
            window.addEventListener("load", n), window.addEventListener("resize", n), window.addEventListener("scroll", n)
        }
    },
    mounted() {
        this.productToShow = this.productList[0], this.productList.forEach(i => {});
        var i = this.$el.querySelector(".next-btn-prod"),
            n = this.$el.querySelector(".prev-btn-prod");
        this.$el.querySelector(".product-card");
        i.addEventListener("click", () => {
            this.counter < this.productList.length - 1 ? this.counter++ : this.counter = 0, this.productToShow = this.productList[this.counter]
        }), n.addEventListener("click", () => {
            this.counter > 0 ? this.counter-- : this.counter = this.productList.length - 1, this.productToShow = this.productList[this.counter]
        }), this.checkIfItemInStorage()
    }
});