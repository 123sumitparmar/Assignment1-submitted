const quizData = [
   
    {

        'question': 'Capital of India',
        'a': 'New Delhi',
        'b': 'New York',
        'c': 'London',
        'd': 'Moscow',
        'correct': 'a'
    },
    {
        'question': 'In which year India got independence?',
        'a': '1890',
        'b': '1987',
        'c': '1947',
        'd': '1923',
        'correct': 'c'
    },
    {
        'question': 'Full form of html?',
        'a': 'hyper text minimum language',
        'b': 'high text markup language',
        'c': 'high text maximum language',
        'd': 'hyper text markup language',
        'correct': 'd'
    },
    {
        'question': 'who invented javascript?',
        'a': 'Thomas Richie',
        'b': 'Brendan Eich',
        'c': 'Rickie Clark',
        'd': 'Louise carton',
        'correct': 'b'
    },
 
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})