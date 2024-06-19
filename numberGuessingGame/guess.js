const num = Math.floor(Math.random(num)*10);
let times=0;

document.getElementById("submit").onclick = function() {
    let guess = document.getElementById("guessfield").value;

    times+=1;

    if(guess<num){
       alert("Wrong guessing.Try a higher number");
    }

    else if(guess>num){
        alert("Wrong guessing.Try a lesser number");
    }

    else{
        alert(`You won.The answer is ${num}.It took ${times} guesses for you to give correct answer.`)
    }
}

