new Vue({
    el: "#quiz-app",
    data: () => ({
        questions: [{
            question: "Vaša dobna grupa",
            answers: [{
                text: "12 - 45 godina",
                value: "next"
            }, {
                text: "45 - 55 godina",
                value: "next"
            }, {
                text: "55 - 80+ godina",
                value: "group2"
            }],
            correct_answer: 2,
            selected: null,
            sense: 0
        }, {
            question: "Bolujete li od:",
            answers: [{
                text: "Srčane tegobe",
                value: "next"
            }, {
                text: "Visoki krvni tlak",
                value: "next"
            }, {
                text: "Dijabetes",
                value: "next"
            }, {
                text: "Ništa od navedenog",
                value: "group1"
            }],
            correct_answer: 3,
            selected: null,
            sense: 0
        }, {
            question: "Spol",
            answers: [{
                text: "Muško",
                value: "group1"
            }, {
                text: "Žensko",
                value: "next"
            }],
            correct_answer: 1,
            selected: null,
            sense: 0
        }, {
            question: "Jeste li trudni?",
            answers: [{
                text: "Da",
                value: "group2"
            }, {
                text: "Ne",
                value: "group1"
            }],
            correct_answer: 1,
            selected: null,
            sense: 0
        }],
        products: [{
            name: "A1 Easy",
            group: "group1",
            displayName: "BP A1 Easy",
            img: "products/a1-easy.png",
            url: "https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a1-easy",
            index: 6,
            features: [{
                neme: "IHB",
                icon: "products/icons/ihb.png"
            }, {
                text: "Gentle+",
                value: "products/icons/gentle+.png"
            }, {
                text: "Clinically validated",
                value: "products/icons/clinically-validated.png"
            }]
        }, {
            name: "A2 Basic",
            group: "group1",
            displayName: "BP A2 Basic",
            img: "products/a2-basic.png",
            url: "https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a2-basic",
            index: 3,
            features: [{
                neme: "IHB",
                icon: "products/icons/ihb.png"
            }, {
                text: "Gentle+",
                value: "products/icons/gentle+.png"
            }, {
                text: "Clinically validated",
                value: "products/icons/clinically-validated.png"
            }]
        }, {
            name: "A2 Classic",
            group: "group1",
            displayName: "BP A2 Classic",
            img: "products/a2-classic.png",
            url: "https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a2-classic",
            index: 5,
            features: [{
                neme: "IHB",
                icon: "products/icons/ihb.png"
            }, {
                text: "Gentle+",
                value: "products/icons/gentle+.png"
            }, {
                text: "Clinically validated",
                value: "products/icons/clinically-validated.png"
            }]
        }, {
            name: "A3 Plus",
            group: "group1",
            displayName: "BP A3 Plus",
            img: "products/a3-plus.png",
            url: "https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a3-plus",
            index: 4,
            features: [{
                neme: "3 MAM",
                icon: "products/icons/mam.png"
            }, {
                text: "Gentle+",
                value: "products/icons/gentle+.png"
            }, {
                text: "Clinically validated",
                value: "products/icons/clinically-validated.png"
            }]
        }, {
            name: "A6 PC",
            group: "group2",
            displayName: "BP A6 PC",
            img: "products/a6-pc.png",
            url: "https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a6-pc",
            index: 1,
            features: [{
                neme: "AFIB sens",
                icon: "products/icons/afib-sens.png"
            }, {
                text: "3 MAM",
                value: "products/icons/mam.png"
            }, {
                text: "PC connection",
                value: "products/icons/usb-port.png"
            }, {
                text: "Gentle+",
                value: "products/icons/gentle+.png"
            }, {
                text: "Clinically validated",
                value: "products/icons/clinically-validated.png"
            }, {
                text: "Red dot design award",
                value: "products/icons/red-dot.png"
            }, {
                text: "German design award",
                value: "products/icons/german-design.png"
            }]
        }, {
            name: "A150 AFIB",
            group: "group2",
            displayName: "BP A150 AFIB",
            img: "products/a150-afib.png",
            url: "https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a150-afib",
            index: 2,
            features: [{
                neme: "AFIB sens",
                icon: "products/icons/afib-sens.png"
            }, {
                text: "3 MAM",
                value: "products/icons/mam.png"
            }, {
                text: "Gentle+",
                value: "products/icons/gentle+.png"
            }, {
                text: "Clinically validated",
                value: "products/icons/clinically-validated.png"
            }]
        }, {
            name: "A3 Plus",
            group: "group2",
            displayName: "BP A3 Plus",
            img: "products/a3-plus.png",
            url: "https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a3-plus",
            index: 4,
            features: [{
                neme: "3 MAM",
                icon: "products/icons/mam.png"
            }, {
                text: "Gentle+",
                value: "products/icons/gentle+.png"
            }, {
                text: "Clinically validated",
                value: "products/icons/clinically-validated.png"
            }]
        }, {
            name: "B3 AFIB",
            group: "group2",
            displayName: "BP B3 AFIB",
            img: "products/b3-afib.png",
            url: "https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-b3-afib",
            index: 0,
            features: [{
                neme: "AFIB sens",
                icon: "products/icons/afib-sens.png"
            }, {
                text: "3 MAM",
                value: "products/icons/mam.png"
            }, {
                neme: "IHB",
                icon: "products/icons/ihb.png"
            }, {
                text: "Gentle+",
                value: "products/icons/gentle+.png"
            }, {
                text: "Clinically validated",
                value: "products/icons/clinically-validated.png"
            }]
        }],
        showWrongQuestion: !1,
        wrongQuestions: [],
        temp: [],
        currentQuestion: 0,
        answered: 0,
        wrongAnswers: 0,
        correctAnswers: 0,
        showGroup: "next",
        productsToShow: []
    }),
    methods: {
        selectAnswer: function(e) {
            var t = e.currentTarget,
                s = document.querySelectorAll(".answers span"),
                i = document.querySelector(".next-btn");
            s.forEach(e => {
                e.classList.contains("selected") && e.classList.remove("selected")
            }), t.classList.add("selected"), this.questions[this.currentQuestion].selected = t.dataset.index, i.removeAttribute("disabled")
        },
        showStores: function(e) {
            this.$el.querySelector(".store-modal").classList.add("show")
        },
        closeModal: function(e) {
            this.$el.querySelector(`.${e}`).classList.remove("show")
        },
        goToProduct: function(e) {
            myStorage = window.localStorage, localStorage.setItem("showProductIndex", e), this.closeAll()
        },
        closeAll: function() {
            document.querySelectorAll(".show").forEach(e => {
                e.classList.remove("show")
            }), document.querySelectorAll(".full").forEach(e => {
                e.classList.remove("full")
            }), document.querySelectorAll(".noScroll").forEach(e => {
                e.classList.remove("noScroll")
            }), this.$el.querySelector(".result").classList.remove("show"), this.$el.querySelector(".question").classList.remove("blur"), this.showWrongQuestion = !1, this.wrongQuestions = [], this.temp = [], this.currentQuestion = 0, this.answered = 0, this.wrongAnswers = 0, this.correctAnswers = 0, this.showGroup = "next", this.productsToShow = []
        }
    },
    mounted() {
        var e = this.$el.querySelector(".next-btn"),
            t = this.$el.querySelectorAll(".answers span"),
            s = this.questions.length,
            i = this.$el.querySelector(".result"),
            o = document.querySelector("#quiz-modal"),
            n = this.$el.querySelector(".question"),
            l = this.$el.querySelector(".result .close-btn"),
            a = document.querySelector("#closeModalBtn");
        e.addEventListener("click", () => {
            this.answered < this.questions.length && this.answered++, this.showGroup = this.questions[this.currentQuestion].answers[this.questions[this.currentQuestion].selected].value, "next" != this.showGroup ? (this.products.forEach(e => {
                e.group === this.showGroup && this.productsToShow.push(e)
            }), i.classList.add("show"), n.classList.add("blur"), t.forEach(e => {
                e.classList.contains("selected") && e.classList.remove("selected")
            })) : !e.hasAttribute("disabled") && this.currentQuestion < s - 1 && (this.currentQuestion++, t.forEach(e => {
                e.classList.contains("selected") && e.classList.remove("selected")
            }), e.setAttribute("disabled", ""))
        }), l.addEventListener("click", () => {
            i.classList.remove("show"), n.classList.remove("blur"), this.showWrongQuestion = !1, this.wrongQuestions = [], this.temp = [], this.currentQuestion = 0, this.answered = 0, this.wrongAnswers = 0, this.correctAnswers = 0, this.showGroup = "next", this.productsToShow = []
        }), a.addEventListener("click", () => {
            i.classList.remove("show"), n.classList.remove("blur"), o.classList.remove("show"), document.querySelector("body").classList.remove("noScroll"), this.showWrongQuestion = !1, this.wrongQuestions = [], this.temp = [], this.currentQuestion = 0, this.answered = 0, this.wrongAnswers = 0, this.correctAnswers = 0, this.showGroup = "next", this.productsToShow = []
        })
    }
});