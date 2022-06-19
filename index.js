//Your Code here
//Questions for left
let beginAnswer = 'Do you head to the left or to the right?';
let continueLeft = 'You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path?';
let continueFollow = 'You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven. Stay or Spread the word?';
let continueStay= 'You live happily amongst the cats for the rest of your days.';
let continueSword = 'After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.';
let continueContinue = 'You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?';

//Questions for right
let continueRight = 'You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take?';


let answer = window.prompt(beginAnswer);

//Answer Left if else and nested 
if (answer == 'left') {
    answer = window.prompt(continueLeft);
        if (answer == 'follow'){
            answer = window.prompt(continueFollow)
            if (answer == 'stay'){
                answer = window.alert(continueStay);
            } else if (answer == 'spread the word')
                answer = window.alert(continueSword);
        
        } else if (answer == 'continue') {

        }
} else if (answer == 'right') {
    answer = window.prompt(continueRight);

}

//console.log(answer);

//if (answer == 'left') {
  //  answer = windows.prompt(continueLeft)
    //if (answer == 'follow') {
       // answer = windows.prompt(continueFollow);
    //}
//} else (answer == 'right');
  //  answer = windows.prompt('Hello Word');

    





    
//} else if (answer === 'follow') ;{
  //  windows.prompt(continueFollow);
//} else if (answer === 'stay') {
  //  windows.prompt(continueStay);
//}else if (answer === 'spread') {
 //   windows.prompt(continueSword)
//} else (answer === 'continue'); {
  //  windows.prompt(continueContinue);
//}}
   


//Answer right if else and nested

//if (answer == 'right') {
  //  windows.prompt(continueRight);
//}