const colors = ["green", "red", "rgba(133,122,200)", "#f15025","pink","blue","magenta","black"];
const btn = document.getElementById("btn");
const color = document.querySelector(".Color");

btn.addEventListener('click', function(){
    // get random number between 0 - 3
    const RandomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[RandomNumber];
    color.textContent = colors[RandomNumber]; 
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}