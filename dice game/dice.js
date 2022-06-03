var randomnumber = Math.floor(Math.random()*6)+1;

var randomdiceimage = "dice" + randomnumber + ".png";

var randomimagesource = "images/" + randomdiceimage;

var img1 = document.querySelectorAll("img")[0].setAttribute("src", randomimagesource);

var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomdiceimage2 = "dice" + randomnumber2 + ".png";

var ramdomimagesource2 = "images/" + randomdiceimage2;

var img2= document.querySelectorAll("img")[1].setAttribute("src", ramdomimagesource2);

if(randomnumber>randomnumber2){
    document.querySelector("h2").innerHTML="Player 1 Win";
}
else if(randomnumber2>randomnumber){
    document.querySelector("h2").innerHTML="Player2 Win";
}
else{
    document.querySelector("h2").innerHTML="Draw! Try again";
}