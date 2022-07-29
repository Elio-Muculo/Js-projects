

const dataQuiz = [
    {
        question: 'How old is florin pop',
        a: '10',
        b: '16',
        c: '26',
        d: '67',
        correct: 'c'
    },
    {
        question: 'The most used programming language in 2019',
        a: 'java',
        b: 'python',
        c: 'C',
        d: 'Dart',
        correct: 'a'
    },
    {
        question: 'The presidente of mozambique',
        a: 'Josh',
        b: 'Joe Biden',
        c: 'Marcelo Rebelo',
        d: 'Filipe Nyusi',
        correct: 'd'
    },
    {
        question: 'What does HTML stand for',
        a: 'Hypertext markup language',
        b: 'Hyperlink make language',
        c: 'Http markup language',
        d: 'Http markdown language',
        correct: 'a'
    },
    {
        question: 'what language was JS launched',
        a: '2000',
        b: '1987',
        c: '2009',
        d: 'none of above',
        correct: 'd'
    },
];


const answers = document.querySelectorAll(".answer");
let selectAnswer = undefined;
const questionEl = document.getElementById('question');
const submitEl = document.getElementById('submit');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const quiz = document.getElementById('quiz');


let score = 0;
let current_question = 0;

loadQuiz();


/**
 * ? load the question on radio
 */
function loadQuiz() {
    selectAnswer = undefined;
    questionEl.innerHTML = dataQuiz[current_question].question;
    a_text.innerHTML = dataQuiz[current_question].a;
    b_text.innerHTML = dataQuiz[current_question].b;
    c_text.innerHTML = dataQuiz[current_question].c;
    d_text.innerHTML = dataQuiz[current_question].d;
}


/**
 * ? unselect the radio when dataQuiz load of form
 */
function deselect() {
    answers.forEach((answer) => {
        answer.checked = false;
    });   
}


/**
 * ? verify that in all radio there's one that's checked
 * 
 * @returns isChecked boolean
 */

function getSelectedRadio() {
    answers.forEach((answer) => {
        if (answer.checked) {
            selectAnswer = answer.id;
        }
    });

    return selectAnswer;
}


/**
 * ? when click the button disparar evento click and do the magic
 */

submitEl.addEventListener('click', () => {
    var answerValue = getSelectedRadio();

    if (answerValue !== undefined) { 
        if (answerValue === dataQuiz[current_question].correct) {
            ++score;
        }
        
        current_question++;
        if (current_question < dataQuiz.length) { 
            loadQuiz();
            deselect();
        } else {
            quiz.innerHTML = score;
        }
    } 
});



















