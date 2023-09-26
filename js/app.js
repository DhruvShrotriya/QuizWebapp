// console.log(quiz)
//App version 2.0
const questionNumber = document.getElementById("quesno");
const quesText = document.getElementById("ques");
const optionCont= document.getElementById("ans");
const quizlen=10;
let res={
    name: "Dhruv Shrotiya",
    age: 18,
    corr: 0,
    total: 0
};

let quesCount=0;
let currQues;
let availableQues=[];
let correctCount=0;

function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split("=");
        if (decodeURIComponent(pair[0]) === variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return null;
}
res.name = getQueryVariable("name");

const qtype = getQueryVariable("qtype");
function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split("=");
        if (decodeURIComponent(pair[0]) === variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return null;
}
function getQues(){
    const totalQues =quiz.length;
    for(let i=0; i<totalQues ; i++){
        availableQues.push(quiz[i]);
    }
    console.log(availableQues)
}

function setQues(){
    quesCount++;
    document.getElementById("quesno").innerHTML="Question " + (quesCount) + " of " + quizlen;
    
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
    console.log();
    // quesCount++;
}

function checkAns(){
    var choice;
    var ele = document.getElementsByName('option');
        for (let i=0; i<ele.length ;i++){
             if(ele[i].checked){
                choice=ele[i].value;
                ele[i].checked=false;
                // console.log("Choose" + ele[i].value + " op"+i);
             }
        }
    console.log("from js index"+currQues.ans);
    if (choice == currQues.ans){
        console.log("correct answer");
        correctCount++;

    }
    else{
        console.log("notcorrect answer");
    }
}

function result(){
    console.log("Corr ans:"+correctCount+ " Total Question :"+quizlen);
    document.getElementById("name").textContent="Dhruv : ";
    // document.getElementById("total").textContent="Total Question :";
    // document.getElementById("acc").textContent="Accuracy : "+ (correctCount/quizlen); 


}

function setresult(){
    console.log("in result set");
    // res.name="Dhruv Shrotriya";
    // res.age="20";
    res.corr=2;
    res.total=200;
}
function next(){
    if(quesCount== quizlen){
        
        // setresult();
        console.log("Quiz Over");
        window.location.href = `quizResult.html?variable1=${encodeURIComponent(res.name)}&variable2=${encodeURIComponent(correctCount)}&variable3=${encodeURIComponent(quizlen)}&variable4=${encodeURIComponent(qtype)}`;
        // window.location.href = "quizResult.html?value=" + encodeURIComponent("MY name is Dhruv");;
        // console.log("after");
        // result();

    }
    else{
        checkAns();
        // document.getElementById("myDiv").style.backgroundColor = "lightblue";
        setQues();
    }
}

window.onload= function(){   
    // setresult();
    getQues();
    setQues();
}
