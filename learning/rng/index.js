
let result;
//let many = Number(document.getElementById("howmany").value);

// function generateResults(many){
//     for(let i=0;i<many;i++){
//         let min = document.getElementById("min").value;
//         let max = document.getElementById("max").value;
//         result = Math.random();
//         console.log(result)
//         result = result*(max-min);
//         console.log(result)
//         result = result + Number(min);
//         console.log(result)
//         result = Math.floor(result);
//         document.getElementById("result").textContent += ` ${result}`;
//     }
// }

// result = document.getElementById("generate").onclick = generateResults(1);
//document.getElementById("generatemany").onclick = generateResults(many);

//tried to do it a smart way and just make a function but something doesn't work
//I'll learn functions later on so it's ok, but for now I leave this less optimal code
result = document.getElementById("generate").onclick = function(){
    let many = 1;
    for(let i=0;i<many;i++){
        let min = document.getElementById("min").value;
        let max = document.getElementById("max").value;
        result = Math.random();
        result = result*(max-min);
        result = result + Number(min);
        result = Math.floor(result);
        document.getElementById("result").textContent += ` ${result} |`;
    }
}

result = document.getElementById("generatemany").onclick = function(){
    let many = Number(document.getElementById("howmany").value);
    for(let i=0;i<many;i++){
        let min = document.getElementById("min").value;
        let max = document.getElementById("max").value;
        result = Math.random();
        result = result*(max-min);
        result = result + Number(min);
        result = Math.floor(result);
        document.getElementById("result").textContent += ` ${result} |`;
    }
}

document.getElementById("reset").onclick = function(){
    document.getElementById("result").textContent = `Randomly generated numbers: `;
}
