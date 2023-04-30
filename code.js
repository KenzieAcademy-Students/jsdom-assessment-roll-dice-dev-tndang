let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Your Code Here!
let rollDie = function() { // This function gives a random number between 1 to 6, simulating a dice
    let rollResult = Math.floor(Math.random() * 6) + 1;
    console.log(`You rolled a ${rollResult}`);
    return rollResult;
}

let rollPair = function() { // This function simulates rolling a pair of dice returning the result and saving it to the results array
    let pairResult = 0;
    for (let roll = 1; roll <= 2; roll++) {
        pairResult += rollDie();
    }
    results[pairResult] += 1;

    let finalResult = document.getElementById("result");
    finalResult.innerText = `You rolled a ${pairResult}!`;
    
    return pairResult;
}

let pairThousandRolls = function() { // This function simulates rolling one thousand additional pairs of dice
    for (let roll = 1; roll <= 1000; roll++) {
        rollPair();
    }

    let finalResult = document.getElementById("result");
    finalResult.innerText = `You rolled an additional 1000 times!`;

    roll.removeEventListener("click", renderGraph);
}

let removeThousandRenderer = function() { // This function removes the event listener 1000 roll button renderGraph function when called on
    rollThousand.removeEventListener("click", renderGraph);
}

let renderGraph = function () { // This function creates the div and paragraph elements within the graph div
    let graph = document.getElementById("graph");

    for (let rollIndex = 2; rollIndex < results.length; rollIndex++) {
        let divElement = document.createElement("div");
        graph.append(divElement);
        divElement.className = "graphBarContainer";

        let divBarElement = document.createElement("div");
        divElement.append(divBarElement);
        divBarElement.className = "graphBar"
        divBarElement.id = `resultBar${rollIndex}`;

        let paragraphElement = document.createElement("p");
        divElement.append(paragraphElement);
        paragraphElement.id = `resultsWere${rollIndex}`;
    }
}

let graphUpdate = function () { // This function updates the graph results render
    for (let rollIndex = 2; rollIndex < results.length; rollIndex++) {
        let graphText = document.getElementById(`resultsWere${rollIndex}`);
        graphText.innerText = `You rolled a ${rollIndex}: \n${results[rollIndex]} times`;
    }
}

let barElement = function () { // This function determines and sets the bar percentage for each result comparable to the other results
    for (let rollIndex = 2; rollIndex < results.length; rollIndex++) {
        let resultsTotalSum = 0;
        let resultsPercentage = 0;
        let percentageModifier = 200;

        for (let index = 2; index < results.length; index++) {
            resultsTotalSum += results[index];
        }

        resultsPercentage = Math.round((results[rollIndex] / resultsTotalSum) * percentageModifier); 

        let barElement = document.getElementById(`resultBar${rollIndex}`);
        barElement.style.height = `${resultsPercentage}%`;
    }
}

let roll = document.getElementById("roll");
let rollThousand = document.getElementById("rollThousand");

roll.addEventListener("click", rollPair);
roll.addEventListener("click", renderGraph, {once : true});
roll.addEventListener("click", removeThousandRenderer);
roll.addEventListener("click", graphUpdate);
roll.addEventListener("click", barElement);

rollThousand.addEventListener("click", pairThousandRolls);
rollThousand.addEventListener("click", renderGraph, {once : true});
rollThousand.addEventListener("click", graphUpdate);
rollThousand.addEventListener("click", barElement);









