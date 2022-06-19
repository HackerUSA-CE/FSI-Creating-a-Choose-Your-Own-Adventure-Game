//Your Code here
//Beginning Question
let beginQ = 'Do you head to the left or to the right?';

//Question for left direction
let qBeginLeft = 'You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path?';
let qFollow = 'You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven. Stay or Spread the word?';
let qStay= 'You live happily amongst the cats for the rest of your days.';
let qSword = 'After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.';
let qContinue = 'You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?';
let endLadder = 'After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.';
let endStairCase ='After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.';

//Questions for right direction
let qBeginContinue = 'You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take?';
let qPastDragon ='The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:';
let eStayDragon ='You and the dragon have an uplifting conversation about local politics and become lifelong friends.';
let eRunDragon ='Quickly, you run back to the cave \'s entrance. Sheepish, you return home.';
let qAwayDragon ='After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?';
let endDrawItDragon ='You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.';
let endPickItDragon ='You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.';

let answer = window.prompt(beginQ);

//Answer Left if else and nested 
if (answer == 'left') {
    answer = window.prompt(qBeginLeft);
        if (answer == 'follow') {
            answer = window.prompt(qFollow);
            if (answer == 'stay') {
                answer = window.alert(qStay);
            } else if (answer == 'spread the word')
                answer = window.alert(qSword);
        } else if (answer == 'continue') {
          answer = window.prompt(qContinue);
          if (answer == 'ladder') {
            answer = window.alert(endLadder);
          } else if (answer == 'staircase'){
            answer = window.alert(endStairCase);
          } 
    }
  } else if (answer == 'right') {
      answer = window.prompt(qBeginContinue);
        if (answer == 'past the dragon') {
          answer = window.prompt(qPastDragon);
        
     
    
      } else if (answer == 'Away from the dragon') {
          answer = window.prompt(qAwayDragon);
          if (answer == 'draw it'){
            answer = window.prompt(endDrawItDragon);
          } else (answer == 'pick it');
            answer = window.prompt(endPickItDragon);
      }
      
     
    }
  
  




  //if (answer =='Past the Dragon') {
       // answer = window.prompt(answerPastDragon);
        //if (answer == 'stay') {
         // answer = window.prompt(answerStayDragon);
    //} else (answer == 'run') ;
       // answer = window.prompt(answerRunDragon);

        //answer = window.prompt(answerAwayDragon);
       // if (answer =='draw it') {
        //  answer = window.prompt(answerDrawItDragon);
      //  } else if (answer == 'pick it') {
       //   answer = window.prompt(answerPickItDragon);
              