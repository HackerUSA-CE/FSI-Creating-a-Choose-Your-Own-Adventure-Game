// Your Code Here

let userName = window.prompt('Please enter your name:')
let userScore = 0;

for(let i = 0; i < questions.length; i++){
    let userAnswer = window.prompt(questions[i].question)
    if(userAnswer === questions[i].correctAnswer){
        userScore++
    }
}

window.alert('Your score is: '+userScore)

let result = {
    userName: userName,
    score: userScore
}

let allScores = localStorage.getItem('scores')

if(allScores == undefined){
    allScores = []
}

allScores.push(result)

let serializedScores = JSON.stringify(allScores)
localStorage.setItem('scores', serializedScores)

let highScore = allScores[0]
for(let i = 0; i < allScores.length; i++){
    if(highScore.score > allScores[i].score){
        highScore = allScores[i]
    }
}
window.alert('The high score is: '+highScore.score)