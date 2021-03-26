const colors = ["green", "red", "blue","yellow", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    //get random nuber btw 0-3
   const randomNumber = getRandomNumber();
   console.log(randomNumber);
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber]
});

// function that will generate num 0-3

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);


}