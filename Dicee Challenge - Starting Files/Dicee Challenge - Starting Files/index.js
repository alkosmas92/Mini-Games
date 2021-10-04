function random_num() {
    var num = Math.random() *6;
    num = Math.round(num);
    return num;
    /*console.log(num);*/
}


var critirion1;
var critirion2;

var criterion1 = random_num();


for(var i = 0 ; i <= 1000 ; i ++){


    if(criterion1===1){
        document.querySelector("img.img1").setAttribute("src","images/dice1.png");
    }

    if(criterion1===2){
        document.querySelector("img.img1").setAttribute("src","images/dice2.png");
    }

    if(criterion1===3){
        document.querySelector("img.img1").setAttribute("src","images/dice3.png");
    }

    if(criterion1===4){
        document.querySelector("img.img1").setAttribute("src","images/dice4.png");
    }

    if(criterion1===5){
        document.querySelector("img.img1").setAttribute("src","images/dice5.png");
    }

    if(criterion1===6){
        document.querySelector("img.img1").setAttribute("src","images/dice6.png");
    }

}
for(var i = 0 ; i <= 1000 ; i ++){

    var criterion2 = random_num();

    if(criterion2===1){
        document.querySelector("img.img2").setAttribute("src","images/dice1.png");
    }

    if(criterion2===2){
        document.querySelector("img.img2").setAttribute("src","images/dice2.png");
    }

    if(criterion2===3){
        document.querySelector("img.img2").setAttribute("src","images/dice3.png");
    }

    if(criterion2===4){
        document.querySelector("img.img2").setAttribute("src","images/dice4.png");
    }

    if(criterion2===5){
        document.querySelector("img.img2").setAttribute("src","images/dice5.png");
    }

    if(criterion2===6){
        document.querySelector("img.img2").setAttribute("src","images/dice6.png");
    }

}

if (criterion1 === criterion2){

    document.querySelector("h1").innerHTML = "DRAW !";
}
if (criterion1 > criterion2){

    document.querySelector("h1").innerHTML = "🚩PLAY 1 WINS!";
}
if (criterion1 < criterion2){

    document.querySelector("h1").innerHTML = "PLAY 2 WINS🚩!";
}