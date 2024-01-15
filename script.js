'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent="Rahid Amin";

// document.querySelector('.secretNumber').textContent=1;

// document.querySelector('.score').innerHTML=19;

// const x=document.querySelector('.guess').value=24;

let secretNumber=Math.trunc(Math.random()*20)+1;

let score=20;

let highScore=0;

const displayMessage=function(message)
{
    document.querySelector('.message').textContent=message;
}


document.querySelector('.check').addEventListener('click',function()
{
    const guess=Number(document.querySelector('.guess').value);

    if(!guess)
    {
       displayMessage('😒 No Number')
     }else if(guess===secretNumber)
     {
        displayMessage('🎉Correct Number');
        document.querySelector('.number').textContent=secretNumber;

        document.querySelector('body').style.backgroundColor='#c4c4fc';
        document.querySelector('.number').style.width='25rem';
      
        if(highScore<score)
        {
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
       
        //refactoring.........
    }else if(guess !== secretNumber)
    {
       if(score>1)
       {
        //    document.querySelector('.message').textContent=guess>secretNumber?"😡 Too High":"👿 Too low"; 
        //very important

        displayMessage(guess>secretNumber?"😡 Too High":"👿 Too low");

           score--;
           document.querySelector('.score').textContent=score;
       }
       else{
            displayMessage("😂 Game Over");
           document.querySelector('.score').textContent=0;
       }
       
    }

    //  else if(guess>secretNumber)
    //  {
    //     if(score>1)
    //     {
    //         document.querySelector('.message').textContent='😑Too High';
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent="😂 Game Over";
    //         document.querySelector('.score').textContent=0;
    //     }
        
    //  }else if(guess<secretNumber)
    //  {
    //     if(score>1)
    //     {
    //         document.querySelector('.message').textContent='😐Too Low';
    //     score--;
    //     document.querySelector('.score').textContent=score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent="🤣 Game Over";
    //         document.querySelector('.score').textContent=0;
    //     }
        
      //}

    })


    document.querySelector('.again').addEventListener('click',function()
    {
     score=20;
     secretNumber=Math.trunc(Math.random()*20)+1;
     displayMessage("Start guessing...");
     document.querySelector('.score').textContent=score;
     document.querySelector('.number').textContent='?';
     document.querySelector('.guess').value='';
     document.querySelector('body').style.backgroundColor='#222';
     document.querySelector('.number').style.width='15rem';
     

        
       
         
    })