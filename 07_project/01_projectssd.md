#project related dom

##project link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1 Solution

```javascript
console.log("meet")
const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")


buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function (e){
      console.log(e)
      console.log(e.target)
      if(e.target.id==='grey'){
        body.style.backgroundColor=e.target.id;
      }
      if(e.target.id==='white'){
        body.style.backgroundColor=e.target.id;
      }
      if(e.target.id==='blue'){
        body.style.backgroundColor=e.target.id;
      }
      if(e.target.id==='yellow'){
        body.style.backgroundColor=e.target.id;
      }
      if(e.target.id==='purple'){
        body.style.backgroundColor=e.target.id;
      }
  })
})
```

## Project 2 Solution

```javascript

const form = document.querySelector('form');
//this usecase will give you empty
// const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML=`please give a valid height ${height}`
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML=`please give a valid weight ${weight}`
  }
  else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)
    //show the result
    results.innerHTML=`<span>${bmi}</span>`
  }
});

```

## project 3 Solution

```javascript
const clock=document.getElementById('clock')
// const clock=document.querySelector('#clock')  (optional)



setInterval(function(){
  let date=new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML=date.toLocaleTimeString();
},1000)

```


## project 4 Solution

```javascript
let randomnumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess = [];
let numguess = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateguess(guess);
  });
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert('please enter valid number');
  } else if (guess < 1) {
    alert('please enter a number more than 1');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    prevguess.push(guess);
    if (numguess === 11) {
      dispplayguess(guess);
      displaymessage(`Game Over. Random number was ${randomnumber}`);
      endgame();
    } else {
      dispplayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === randomnumber) {
    displaymessage(`you guessted right`);
  } else if (guess < randomnumber) {
    displaymessage(`number is too low`);
  } else if (guess > randomnumber) {
    displaymessage(`number is too high`);
  }
}
function dispplayguess(guess) {
  userinput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numguess++;
  remaining.innerHTML = `${11 - numguess}`;
}

function displaymessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newgame">Start new game</h2>`;
  startOver.appendChild(p);
  playgame = false;
  newgame();
}
function newgame() {
  const newgamebutton = document.querySelector('#newgame');
  newgamebutton.addEventListener('click', function (e) {
    randomnumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numguess}`;
    userinput.removeAttribute('Disabled');
    startOver.removeChild(p);

    playgame = true;
  });
}



```