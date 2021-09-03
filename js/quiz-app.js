new Vue({ 
    el: '#quiz-app',
    data() {
      return {
        questions: [
              {
              question: 'Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?',
              answers: [
                  'Apple',
                  'Microsoft',
                  'Atari',
                  'Commodore'
              ],
              correct_answer: 0,
              selected: null,
              sense: 0
              },
              {
  
              question: 'In any programming language, what is the most common way to iterate through an array?',
              answers: [
                  'If Statements',
                  'Do-while loops',
                  'For loops',
                  'While loops'
              ],
              correct_answer: 2,
              selected: null,
              sense: 0
              },
              {
              question: 'According to the International System of Units, how many bytes are in a kilobyte of RAM?',
              answers: [
                  '512',
                  '1000',
                  '1024',
                  '500'
              ],
              correct_answer: 1,
              selected: null,
              sense: 0
              },
              {
              question: 'HTML is what type of language?',
              answers: [
                  'Markup Language',
                  'Macro Language',
                  'Programming Language',
                  'Scripting Language'
              ],
              correct_answer: 0,
              selected: null,
              sense: 0
              },
              {
              question: 'What amount of bits commonly equals one byte?',
              answers: [
                  '1',
                  '2',
                  '64',
                  '8'
              ],
              correct_answer: 3,
              selected: null,
              sense: 0
              },
              {
              question: "If you were to code software in this language you'd only be able to type Ones and Zeros.",
              answers: [
                  'JavaScript',
                  'Binary',
                  'C++',
                  'Python'
              ],
              correct_answer: 1,
              selected: null,
              sense: 0
              },
              {
              question: 'What is the most preferred image format used for logos?',
              answers: [
                  '.png',
                  '.jpeg',
                  '.svg',
                  '.gif'
              ],
              correct_answer: 2,
              selected: null,
              sense: 0
              },
              {
              question: 'In web development, what does CSS stand for?',
              answers: [
                  'Counter Strike: Source',
                  'Cascading Style Sheet',
                  'Corrective Style Sheet',
                  'Computer Style Sheet'
              ],
              correct_answer: 1,
              selected: null,
              sense: 0
              },
              {
              question: 'In "Hexadecimal", what color would be displayed from the color code? #00FF00?',
              answers: [
                  'Red',
                  'Green',
                  'Blue',
                  'Yellow'
              ],
              correct_answer: 1,
              selected: null,
              sense: 0
              },
              {
              question: 'The C programming language was created by this American computer scientist. ',
              answers: [
                  'Dennis Ritchie',
                  'Tim Berners Lee',
                  'al-Khwārizmī',
                  'Willis Ware'
              ],
              correct_answer: 0,
              selected: null,
              sense: 0
              }
          ],
        showWrongQuestion: false,
        wrongQuestions: [],
        temp: [],
        currentQuestion: 0,
        answered: 0,
        wrongAnswers: 0,
        correctAnswers: 0
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
      calculateResult: (questions) => {
        var correct;
        
        for(var i=0; i< questions.length; i++) {
          this.questions[i].selected == questions[i].correct ? correct++ : '';
        }
        
        return (correct / questions.length) * 100;
      }
    },
    mounted() {
      
      var nextBtn = this.$el.querySelector('.next-btn'),
          wrongAnswersBtn = this.$el.querySelector('.show-wrong-ones'),
          answers = this.$el.querySelectorAll('.answers span'),
          questionsLength = this.questions.length,
          result = this.$el.querySelector('.result'),
          question = this.$el.querySelector('.question'),
          closeResult = this.$el.querySelector('.result button.close'),
          wrongQuestions = this.$el.querySelector('.wrong-questions'),
          showMyResults = this.$el.querySelector('#return-to-result');
            
      nextBtn.addEventListener('click', () => {
        
        this.answered < this.questions.length ? this.answered++ : '';
        
        if(!nextBtn.hasAttribute('disabled') && this.currentQuestion < (questionsLength -1)) {    
          this.currentQuestion++;
          
          answers.forEach(answer => {
            answer.classList.contains('selected') ? answer.classList.remove('selected') : '';
          });
          
          nextBtn.setAttribute('disabled', '');
          
        } else if(this.currentQuestion >= (questionsLength -1)) {
          
          this.questions.forEach( (question) => {
            if(question.selected == question.correct_answer && question.sense ==0) {
              
              this.correctAnswers++;
              question.sense = 1;
              
            } else if(question.selected != question.correct_answer && question.sense ==0) {
              
              this.wrongAnswers++;
              question.sense = 1;
              let temp = {};
              temp.answers = question.answers;
              temp.question = question.question;
              temp.correct_answer = question.correct_answer;
              temp.selected = question.selected;
              
              this.wrongQuestions.push(temp);
            }
          });
          
          result.classList.add('active');
          question.classList.add('blur');
        }
      });
      
      closeResult.addEventListener('click', () => {
        result.classList.remove('active');
        question.classList.remove('blur');
      });
      
      wrongAnswersBtn.addEventListener('click', () => {      
        result.classList.remove('active');
        wrongQuestions.classList.add('active');
      });
      
      showMyResults.addEventListener('click', () => {
        result.classList.add('active');
        wrongQuestions.classList.remove('active');
      })
    }
  });