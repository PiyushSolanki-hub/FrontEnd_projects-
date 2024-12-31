let userscore=0;
let computerscore=0;
let totaltrial=0;
const verdict = document.querySelector('#message');
const yourscore = document.querySelector('#userscore');
const compscore = document.querySelector('#compscore');
const trail = document.querySelector('#totrial');
const changed1=document.querySelector('.ch1');
const changed2=document.querySelector('.ch2');
const changed3=document.querySelector('.ch3');
const col=document.querySelector('.message-container');
const computer=()=>{
    let options = ['rock','paper','scissors'];
    let chossen=Math.floor(Math.random()*3);
    chossen = options[chossen];
    if (chossen=='rock') {
        changed1.setAttribute('class','change');        
    } else if(chossen=='paper'){
        changed2.setAttribute('class','change');        
    }else{
        changed3.setAttribute('class','change');
    }
    console.log(chossen);
    return chossen
}
const game = (user)=>{
    let cp=computer();
    if(user=='rock'){
        if(cp=='rock'){
            verdict.innerText = "draw";
            col.style.backgroundColor='#081b31'; 
        }else if(cp=='paper'){
            verdict.innerText="You Loose";
            col.style.backgroundColor='red'; 
            computerscore+=1;
            compscore.innerText=computerscore;

        }else{
            verdict.innerText = "You won";
            col.style.backgroundColor='green'; 
            userscore+=1;
            yourscore.innerText=userscore;
        }
    }else if (user=="paper") {
        if(cp=='paper'){
            verdict.innerText = "draw";
            col.style.backgroundColor='#081b31';
        }else if(cp=='scissors'){
            verdict.innerText="You Loose";
            col.style.backgroundColor='red'; 
            computerscore+=1;
            compscore.innerText=computerscore;
        }else{
            verdict.innerText = "You won";
            col.style.backgroundColor='green'; 
            userscore+=1;
            yourscore.innerText=userscore;
        }
    } else {
        if(cp=='scissors'){
            verdict.innerText = "draw";
            col.style.backgroundColor='#081b31';
        }else if(cp=='rock'){
            verdict.innerText="You Loose";
            col.style.backgroundColor='red'; 
            computerscore+=1;
            compscore.innerText=computerscore;
        }else{
            verdict.innerText = "You won";
            col.style.backgroundColor='green'; 
            userscore+=1;
            yourscore.innerText=userscore;
        }
    }
}
const choices=document.querySelectorAll('.choice');
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        changed1.setAttribute('class','');
        changed2.setAttribute('class','');
        changed3.setAttribute('class','');
        totaltrial+=1;
        trail.innerText=totaltrial;
        let user = choice.getAttribute('id');
        console.log('user',user);
        game(user);
    })
}
)