let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice");
choices.forEach((choice)=> {
   
    choice.addEventListener("click",()=>
    {
        const userchoice=choice.getAttribute('id');
        playgame(userchoice)
       
    })

});
const draw_game=()=>{
    let msg=document.querySelector("#msg");
    msg.innerText="It was draw"
    msg.style.backgroundColor="cyan"
}
const playgame=(userchoice)=>
{
    console.log("user choice is",userchoice )
    let compschoice=getcomputerchoice();
    console.log("computer choice is ",compschoice);
    if(userchoice===compschoice)
    {
        //draw_game
        draw_game()

    }
   else
   {
    let userwin=true;
    if(userchoice==="rock")
    {
        userwin=compschoice==="paper"?false:true;

    }
    else if(userchoice==="paper")
    {
        userwin=compschoice==="scissors"?false:true;
    }
    else
    {
        usewin=compschoice==="rock"?false:true;
    }
    showwinner(userwin,userchoice,compschoice);
   }
   
}
function showwinner(userwin,userchoice,compschoice)
{
    let msg=document.querySelector("#msg");

    if(userwin===true)
    {
        userscore++;
        let user_score=document.querySelector("#user-score");
        msg.innerText=`You win!! ${userchoice} beats ${compschoice}`;
        msg.style.backgroundColor="green"
        user_score.innerText=userscore;

    }
    else
    {
        compscore++;
        let comp_score=document.querySelector("#computer-score");
        msg.innerText=`You lost!! ${compschoice} beats ${userchoice}`;
       msg.style.backgroundColor="red";
       comp_score.innerText=compscore;


    }
}




function getcomputerchoice()
{
    let choice=["rock","paper","scissors"];
    let random=Math.floor((Math.random()*3));
   
    return choice[random];
}