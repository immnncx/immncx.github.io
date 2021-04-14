function Starttest(){
var questions = [{
        question: 'Q1:Days of a week minus to the day of CreativeInterationdesign(ClassNewMedia) ?',
        answer: '3',
        affirm: 'Bingo!',
        rebuttal: 'Hmm.maybe there is something wrong with my grammar'
    },
    {
        question: 'Q2:Try to plus 20 and a Taiwanese singer from China Blue:)',
        answer: '520',
        affirm: 'Great!what i wanna tell you is the answer',
        rebuttal: 'Its ok Maybe i am selfhyper alot that you still cant get my meaning!'
    },
    {
        question:'Q3:Singles’Valentine day?',
        answer:'0',
        affirm:'awwwsome!!!',
        rebuttal:'There is no a valentine day belong to singles.'
    }
  ];

for (var i = 0; i < 3; i++) {
    answer = prompt(questions[i].question);


    if (answer !== questions[i].answer) {
        alert(questions[i].rebuttal);
        i--;
    } else {
        alert(questions[i].affirm);
    }
}

{var x = document.getElementById('quiz');
 x.innerHTML=>"Thanks For all the patient<3 ";
 x.style.color="#F286F9";
}
}
