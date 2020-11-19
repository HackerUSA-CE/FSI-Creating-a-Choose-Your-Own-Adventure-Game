// Your Code Here

let userName = window.prompt('Please enter your name:')
let userScore = 0;

for(let i = 0; i < questions.length; i++){
    let userAnswer = window.prompt(questions[i].question)
    if(userAnswer === questions[i].correctAnswer){
        userScore = userScore + 10
    }
}

window.alert('Your score is: '+userScore)

let serializedGames = localStorage.getItem('games')
let games = JSON.parse(serializedGames)
if(games == undefined){
    games = []
}

let game = {
    user: userName,
    score: userScore
}

games.push(game)

serializedGames = JSON.stringify(games)
localStorage.setItem('games', serializedGames)

let highestScoringGame = games[0]
for(let i = 0; i < games.length; i++){
    if(games[i].score > highestScoringGame.score){
        highestScoringGame = games[i]
    }
}
window.alert('The high score is: '+highestScoringGame.score)