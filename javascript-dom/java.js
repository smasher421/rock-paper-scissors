// DOM Manipulation






const content  = document.querySelector('.content');
console.log(content);

content.style.color = 'blue';


const div = document.createElement('div');


console.log(div);


const p = document.querySelector('#red');
console.log(p);


p.style.color = 'red';



const h3 = document.querySelector('#blue');
console.log(h3);
h3.style.color = 'blue';


const div1 = document.querySelector('.exercise');
console.log(div1);


div1.style.backgroundColor = 'pink';

const btn = document.querySelector('#btn');


// btn.onclick = () => alert("Hello World");

// const btn2 = document.querySelector("#btn2");
// btn.addEventListener('click', () =>
// {
//     alert("Hello world!");
// });


// function alertFunction() {
//     alert("YAY! YOU DID IT!");
//   }

btn.addEventListener('click', function (e) {
    console.log(e.target);
  });


    btn.addEventListener('click', function (e) {
        e.target.style.background = 'blue';
      });




const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        alert(button.id);
    });
});


const body = document.body;

body.append("Hello World");