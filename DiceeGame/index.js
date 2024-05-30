var randomNumber1 = (Math.floor(Math.random()*6)+1);
var randomNumber2 = (Math.floor(Math.random()*6)+1);


const imgFor1 = document.getElementsByClassName("img1")[0];
imgFor1.setAttribute("src", "/images/dice"+randomNumber1+".png");

const imgFor2 = document.getElementsByClassName("img2")[0];
imgFor2.setAttribute("src", "/images/dice"+randomNumber2+".png");

const heading = document.querySelector("h1");

if(randomNumber1 > randomNumber2)
    {
        heading.innerHTML="You win!"
    }
else if (randomNumber1 === randomNumber2) {
    heading.innerHTML="Draw!"

} else {
    heading.innerHTML="You lose!"

}