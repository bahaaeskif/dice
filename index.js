let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelectorAll(".dice img")[0].setAttribute("src", `images/dice${randomNumber1}.png`);

document.querySelectorAll(".dice img")[1].setAttribute("src", `images/dice${randomNumber2}.png`);

let stringH1 = "";

if(randomNumber1 > randomNumber2){
    stringH1 = "🚩The Player1 wins";
    document.querySelector("h1").innerHTML = stringH1;
    document.querySelector("h1").classList.add("small-text");
}
else if (randomNumber1 < randomNumber2){
    stringH1 = "The Player2 wins🚩";
    document.querySelector("h1").classList.add("small-text");
    document.querySelector("h1").innerHTML = stringH1;
}
else{
    stringH1 = "🚩Draw!!🚩";
    document.querySelector("h1").classList.add("small-text");
    document.querySelector("h1").innerHTML = stringH1;
}