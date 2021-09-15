new Vue({ 
    el: '#quiz-app',
    data() {
      return {
        questions: [
              {
              question: 'Vaša dobna grupa',
              answers: [
                {
                  text: '12 - 45 godina',
                  value: 'next'
                },
                {
                  text: '45 - 55 godina',
                  value: 'next'
                },
                {
                  text: '55 - 80+ godina',
                  value: 'group2'
                }
              ],
              correct_answer: 2,
              selected: null,
              sense: 0
              },
              {
              question: 'Bolujete li od:',
              answers: [
                {
                  text: 'Srčane tegobe',
                  value: 'next'
                },
                {
                  text: 'Visoki krvni tlak',
                  value: 'next'
                },
                {
                  text: 'Dijabetes',
                  value: 'next'
                },
                {
                  text: 'Ništa od navedenog',
                  value: 'group1'
                }
              ],
              correct_answer: 3,
              selected: null,
              sense: 0
              },
              {
              question: 'Spol',
              answers: [
                {
                  text: 'Muško',
                  value: 'group1'
                },
                {
                  text: 'Žensko',
                  value: 'next'
                }
              ],
              correct_answer: 1,
              selected: null,
              sense: 0
              },
              {
              question: 'Jeste li trudni?',
              answers: [
                {
                  text: 'Da',
                  value: 'group2'
                },
                {
                  text: 'Ne',
                  value: 'group1'
                }
              ],
              correct_answer: 1,
              selected: null,
              sense: 0
              }
          ],
          products: [
            {
              name: 'A1 Easy',
              group: 'group1',
              displayName: 'BP A1 EASY',
              img: 'products/a1-easy.png',
              url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a1-easy',
              index: 0,
              features: [
                {
                  neme: 'IHB',
                  icon: 'products/icons/ihb.png'
                },
                {
                  text: 'Gentle+',
                  value: 'products/icons/gentle+.png'
                },
                {
                  text: 'Clinically validated',
                  value: 'products/icons/clinically-validated.png'
                }
              ]
              },
              {
                name: 'A2 Basic',
                group: 'group1',
                displayName: 'BP A2 BASIC',
                img: 'products/a2-basic.png',
                url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a2-basic',
                index: 1,
                features: [
                  {
                    neme: 'IHB',
                    icon: 'products/icons/ihb.png'
                  },
                  {
                    text: 'Gentle+',
                    value: 'products/icons/gentle+.png'
                  },
                  {
                    text: 'Clinically validated',
                    value: 'products/icons/clinically-validated.png'
                  }
                ]
                },
                {
                  name: 'A2 Classic',
                  group: 'group1',
                  displayName: 'BP A2 CLASSIC',
                  img: 'products/a2-classic.png',
                  url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a2-classic',
                  index: 2,
                  features: [
                    {
                      neme: 'IHB',
                      icon: 'products/icons/ihb.png'
                    },
                    {
                      text: 'Gentle+',
                      value: 'products/icons/gentle+.png'
                    },
                    {
                      text: 'Clinically validated',
                      value: 'products/icons/clinically-validated.png'
                    }
                  ]
                  },
                  {
                    name: 'A3 Plus',
                    group: 'group1',
                    displayName: 'BP A3 PLUS',
                    img: 'products/a3-plus.png',
                    url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a3-plus',
                    index: 3,
                    features: [
                      {
                        neme: '3 MAM',
                        icon: 'products/icons/mam.png'
                      },
                      {
                        text: 'Gentle+',
                        value: 'products/icons/gentle+.png'
                      },
                      {
                        text: 'Clinically validated',
                        value: 'products/icons/clinically-validated.png'
                      }
                    ]
                    },
                    {
                      name: 'A6 PC',
                      group: 'group2',
                      displayName: 'BP A6 PC',
                      img: 'products/a6-pc.png',
                      url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a6-pc',
                      index: 4,
                      features: [
                        {
                          neme: 'AFIB sens',
                          icon: 'products/icons/afib-sens.png'
                        },
                        {
                          text: '3 MAM',
                          value: 'products/icons/mam.png'
                        },
                        {
                          text: 'PC connection',
                          value: 'products/icons/usb-port.png'
                        },
                        {
                          text: 'Gentle+',
                          value: 'products/icons/gentle+.png'
                        },
                        {
                          text: 'Clinically validated',
                          value: 'products/icons/clinically-validated.png'
                        },
                        {
                          text: 'Red dot design award',
                          value: 'products/icons/red-dot.png'
                        },
                        {
                          text: 'German design award',
                          value: 'products/icons/german-design.png'
                        }
                      ]
                      },
                      {
                        name: 'A150 AFIB',
                        group: 'group2',
                        displayName: 'BP A150 AFIB',
                        img: 'products/a150-afib.png',
                        url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a150-afib',
                        index: 5,
                        features: [
                          {
                            neme: 'AFIB sens',
                            icon: 'products/icons/afib-sens.png'
                          },
                          {
                            text: '3 MAM',
                            value: 'products/icons/mam.png'
                          },
                          {
                            text: 'Gentle+',
                            value: 'products/icons/gentle+.png'
                          },
                          {
                            text: 'Clinically validated',
                            value: 'products/icons/clinically-validated.png'
                          }
                        ]
                        },
                        {
                          name: 'A3 Plus',
                          group: 'group2',
                          displayName: 'BP A3 PLUS',
                          img: 'products/a3-plus.png',
                          url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a3-plus',
                          index: 3,
                          features: [
                            {
                              neme: '3 MAM',
                              icon: 'products/icons/mam.png'
                            },
                            {
                              text: 'Gentle+',
                              value: 'products/icons/gentle+.png'
                            },
                            {
                              text: 'Clinically validated',
                              value: 'products/icons/clinically-validated.png'
                            }
                          ]
                          },
                          {
                            name: 'B3 AFIB',
                            group: 'group2',
                            displayName: 'BP B3 AFIB',
                            img: 'products/b3-afib.png',
                            url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-b3-afib',
                            index: 6,
                            features: [
                              {
                                neme: 'AFIB sens',
                                icon: 'products/icons/afib-sens.png'
                              },
                              {
                                text: '3 MAM',
                                value: 'products/icons/mam.png'
                              },
                              {
                                neme: 'IHB',
                                icon: 'products/icons/ihb.png'
                              },
                              {
                                text: 'Gentle+',
                                value: 'products/icons/gentle+.png'
                              },
                              {
                                text: 'Clinically validated',
                                value: 'products/icons/clinically-validated.png'
                              }
                            ]
                            }
          ],
        showWrongQuestion: false,
        wrongQuestions: [],
        temp: [],
        currentQuestion: 0,
        answered: 0,
        wrongAnswers: 0,
        correctAnswers: 0,
        showGroup: 'next',
        productsToShow: []
      }
    },
    methods: {
      selectAnswer: function(e) {
        var choise = e.currentTarget,
            answers = document.querySelectorAll('.answers span'),
            nextBtn = document.querySelector('.next-btn');
        
        answers.forEach(answer => {
          answer.classList.contains('selected') ? answer.classList.remove('selected') : '';
        });
        
        choise.classList.add('selected');
        
        this.questions[this.currentQuestion].selected = choise.dataset.index; // add the selected index to the obj in the 'selected' property
        
        nextBtn.removeAttribute('disabled');
        
      },
      showStores: function (event) {
        let storeModal = this.$el.querySelector('.store-modal');
        storeModal.classList.add('show');

      },
      closeModal: function (whichModal) {
        let targetModal = this.$el.querySelector( `.${whichModal}`);
        targetModal.classList.remove('show');
      },
      goToProduct: function (index) {
        sharedIndex.index = index;
        console.log(sharedIndex.index + " from goToProduct function in quiz");
        this.closeAll();
      },
      closeAll: function () {
        document.querySelectorAll(".show").forEach(element => {
          element.classList.remove("show");
        });
        document.querySelectorAll(".full").forEach(element => {
          element.classList.remove("full");
        });
        document.querySelectorAll(".noScroll").forEach(element => {
          element.classList.remove("noScroll");
        });
        this.$el.querySelector('.result').classList.remove('show');
        this.$el.querySelector('.question').classList.remove('blur');
        this.showWrongQuestion = false;
        this.wrongQuestions = [];
        this.temp = [];
        this.currentQuestion = 0;
        this.answered = 0;
        this.wrongAnswers = 0;
        this.correctAnswers = 0;
        this.showGroup = 'next';
        this.productsToShow = []
      }
    },
    sharedIndex,
    mounted() {

      console.log(sharedIndex.index + " from quiz");

      
      var nextBtn = this.$el.querySelector('.next-btn'),
          answers = this.$el.querySelectorAll('.answers span'),
          questionsLength = this.questions.length,
          result = this.$el.querySelector('.result'),
          quizModal = document.querySelector('#quiz-modal'),
          question = this.$el.querySelector('.question'),
          closeResult = this.$el.querySelector('.result .close-btn'),
          closeQuiz = document.querySelector('#closeModalBtn');
            
      nextBtn.addEventListener('click', () => {

        this.answered < this.questions.length ? this.answered++ : '';

        this.showGroup = this.questions[this.currentQuestion].answers[this.questions[this.currentQuestion].selected].value;

          if(this.showGroup != 'next') {
              this.products.forEach(product => {
                  if(product.group === this.showGroup) {
                    this.productsToShow.push(product);
                  }
              });
              result.classList.add('show');
              question.classList.add('blur');
              answers.forEach(answer => {
                answer.classList.contains('selected') ? answer.classList.remove('selected') : '';
            });
          } else if (!nextBtn.hasAttribute('disabled') && this.currentQuestion < (questionsLength -1)) {
              this.currentQuestion++;
              answers.forEach(answer => {
                  answer.classList.contains('selected') ? answer.classList.remove('selected') : '';
              });
              nextBtn.setAttribute('disabled', '');
          }
      });
        
      closeResult.addEventListener('click', () => {
        result.classList.remove('show');
        question.classList.remove('blur');
        this.showWrongQuestion = false;
        this.wrongQuestions = [];
        this.temp = [];
        this.currentQuestion = 0;
        this.answered = 0;
        this.wrongAnswers = 0;
        this.correctAnswers = 0;
        this.showGroup = 'next';
        this.productsToShow = []
      });

      closeQuiz.addEventListener('click', () => {
        result.classList.remove('show');
        question.classList.remove('blur');
        quizModal.classList.remove('show');
        document.querySelector("body").classList.remove("noScroll");
        this.showWrongQuestion = false;
        this.wrongQuestions = [];
        this.temp = [];
        this.currentQuestion = 0;
        this.answered = 0;
        this.wrongAnswers = 0;
        this.correctAnswers = 0;
        this.showGroup = 'next';
        this.productsToShow = []
      });
    }
  });