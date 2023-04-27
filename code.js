let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Your Code Here!
let rollDie = function() {
    let result = Math.floor(Math.random() * 6) + 1;
    console.log(`You rolled a ${result}`);
    return result;
}

let rollTwo = function() {
    let result = 0;
    for (let roll = 1; roll <= 2; roll++) {
        result += rollDie();
    }

    let finalResult = document.getElementById("result");
    finalResult.innerText = `You rolled a ${result}!`;
    
    return result;
}

let roll = document.getElementById("roll");
roll.addEventListener("click", rollTwo);



