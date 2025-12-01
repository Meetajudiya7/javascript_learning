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