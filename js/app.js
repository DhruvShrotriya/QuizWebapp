// console.log(quiz)

const questionNumber = document.getElementById("quesno");
const quesText = document.getElementById("ques");
const optionCont= document.getElementById("ans");
const quizlen=5;

let quesCount=0;
let currQues;
let availableQues=[];

function getQues(){
    const totalQues =quiz.length;
    for(let i=0; i<totalQues ; i++){
        availableQues.push(quiz[i]);
    }
    console.log(availableQues)
}

function setQues(){
    document.getElementById("quesno").innerHTML="Question " + (quesCount+1) + " of " + quizlen;
    
    const quesIndex = availableQues[Math.floor(Math.random()*availableQues.length)];
    currQues=quesIndex;
    document.getElementById("ques").innerHTML=currQues.q;
    // console.log(quesIndex);
    //remove question
    const index1 =availableQues.indexOf(quesIndex);
    availableQues.slice(index1,1);

    //set option
    console.log(currQues.option[0]);
    document.getElementById("l0").textContent=currQues.option[0];
    document.getElementById("l1").textContent=currQues.option[1];
    document.getElementById("l2").textContent=currQues.option[2];
    document.getElementById("l3").textContent=currQues.option[3];
    quesCount++;
    
}

function next(){
    if(quesCount== quizlen){
        console.log("Quiz Over");
    }
    else{
        setQues();
    }
}

window.onload= function(){
   
    getQues();
    setQues();
}
