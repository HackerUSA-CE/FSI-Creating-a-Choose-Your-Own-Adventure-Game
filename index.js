//Your Code here
window.prompt('Do you head left or right?')
let firstAnswer = window.prompt('Do you head left or right?')
if (firstAnswer === 'left') {
    let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you FOLLOW it, or CONTINUE on your path?`)

    if (secondAnswer === 'FOLLOW') {
        let thirdAnswer = window.prompt(`You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you STAYing, but you wonder if you should ALERT the world to this magical safe haven.`)
        //more condition of the tree must be put inside the bracket.
        if (thirdAnswer === 'STAY') {
            window.prompt('You live happily amongst the cats for the rest of your live.')
        } else if (thirdAnswer === 'ALERT') {
            window.prompt(`After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.`)
        }
        //This one is outside the bracket of the second branch.
    } else if (secondAnswer === "CONTINUE") {
        let thirdAnswer = window.prompt(`You come across a chamber that reaches upward to a shining light above. There is a long, winding STAIRCASE, and a much quicker, but rickety-looking LADDER that leads up toward the light. Which do you take?`)
        if (thirdAnswer === 'LADDER') {
            window.prompt(`After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.`)
        } else if (thirdAnswer === 'STAIRCASE') {
            window.prompt(`After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.`)
        }
    }
    //Back to the first branch of the tree and repeat.
} else if (firstAnswer === 'right') {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side PAST the dragon, you see a shiny chest of treasure. Another path would 
lead you AWAY from the dragon altogether. Which path do you take?`)

    if (secondAnswer === 'PAST') {
        let thirdAnswer = window.prompt(`The dragon wakes up and sits upright. You only have a moment to respond, to STAY or RUN:`)
        if (thirdAnswer === 'STAY') {
            window.prompt(`You and the dragon have an uplifting conversation about local politics and become lifelong friends.`)
        } else if (thirdAnswer === 'RUN') {
            window.prompt(`Quickly, you run back to the cave's entrance. Sheepish, you return home.`)
        }

    } else if (secondAnswer === 'AWAY') {
        let thirdAnswer = window.prompt(`After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either DRAW it or PICK it. Which do you do?`)
        if (thirdAnswer === 'DRAW') {
            window.prompt(`You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.`)
        } else if (thirdAnswer === 'PICK') {
            window.prompt(`You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.`)
        }
    }
}