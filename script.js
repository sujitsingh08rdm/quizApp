let data = [
  {
    Q: 'a flashing red traffic light signifies that a driver should do what?',
    a: 'stop',
    b: 'speed up',
    c: 'proceed with caution',
    d: 'honk the horn',
    ans: 'a',
  },
  {
    Q: 'a knish is traditionally stuffed with what filling?',
    a: 'potato',
    b: 'creamed corn',
    c: 'lemon custard',
    d: 'raspberry jelly',
    ans: 'a',
  },
  {
    Q: 'a pita is a type of what?',
    a: 'fresh fruit',
    b: 'flat bread',
    c: 'French tart',
    d: 'friend bean dip',
    ans: 'b',
  },
  {
    Q: "a portrait that comically exaggerates a person's physical traits is called a what?",
    a: 'landscape',
    b: 'caricature',
    c: 'still life',
    d: 'Impressionism',
    ans: 'b',
  },
  {
    Q: 'a second-year college student is usually called a what?',
    a: 'sophomore',
    b: 'senior',
    c: 'freshman ',
    d: 'junior ',
    ans: 'a',
  },
  {
    Q: 'a student who earns a J.d. can begin his or her career as a what?',
    a: 'lawyer',
    b: 'bricklayer',
    c: 'doctor',
    d: 'accountant',
    ans: 'a',
  },
  {
    Q: 'a triptych is a work of art that is painted on how many panels?',
    a: 'two',
    b: 'three',
    c: 'five',
    d: 'eight',
    ans: 'b',
  },
];

let question = document.getElementById('qns');
let option1 = document.getElementById('opt1');
let option2 = document.getElementById('opt2');
let option3 = document.getElementById('opt3');
let option4 = document.getElementById('opt4');

let answers = document.querySelectorAll('.options');

let num = 0;
let score = 0;
let myScore = document.querySelector('.myScore');
let nextBtn = document.getElementById('next');

question.innerHTML = data[num].Q;
option1.innerHTML = data[num].a;
option2.innerHTML = data[num].b;
option3.innerHTML = data[num].c;
option4.innerHTML = data[num].d;

function checkAns() {
  let ans;
  answers.forEach((curElement) => {
    if (curElement.checked) {
      ans = curElement.id;
      console.log(ans);
    }
  });
  return ans;
}

function disSelect() {
  answers.forEach((curElement) => {
    curElement.checked = false;
  });
}

function next() {
  let checkedAns = checkAns();

  if (checkedAns == data[num].ans) {
    score++;
    console.log(score);
  }

  num++;
  disSelect();
  if (num < data.length) {
    question.innerHTML = data[num].Q;
    option1.innerHTML = data[num].a;
    option2.innerHTML = data[num].b;
    option3.innerHTML = data[num].c;
    option4.innerHTML = data[num].d;
  } else {
    myScore.innerHTML = `You scored ${score}/${data.length} <br/><br/>
    <button onClick="location.reload()">Play Again</button>`;

    nextBtn.style.display = 'none';
    document.querySelector('.btn').style.backgroundColor = 'lightblue';
  }
}
