

function rolldice(){
    var randomNumber1 = Math.ceil(Math.random()*6);
    console.log(randomNumber1);
    
    
    
    var randomDice = "assets/dice"+randomNumber1+".png";
    
    document.querySelector(".img1").setAttribute("src",randomDice);
    
    
    var randomNumber2 = Math.ceil(Math.random()*6);
    var randomDice = "assets/dice"+randomNumber2+".png";
    
    document.querySelector(".img2").setAttribute("src",randomDice);
    
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "🚩player 1 wins";
    } else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").textContent = "player 2 wins🚩";
    } else {
        document.querySelector("h1").textContent = "✌🏻 It's A draw"
    }
    
    
    }
    
    var button = document.querySelector(".btn");
    button.addEventListener("click",rolldice); 
    
    
    
    

    
