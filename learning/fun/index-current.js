const columnElements = document.getElementsByTagName("tr");
const cellElements = document.getElementsByTagName("td");
const modifierSlider = document.getElementById("slider");
const modifierSliderA = document.getElementById("sliderA");
const modifierSliderB = document.getElementById("sliderB");

let x=0;
let y=0;
let modifier=1;
let a=0;
let b=0;
timer = setInterval(update, 50);
function update(){
    modifier = modifierSlider.value;
    a = modifierSliderA.value;
    b = modifierSliderB.value;
    for(let column of columnElements){
        for (let cell of cellElements){
            cell.style.backgroundColor = `hsl( ${((x*y*modifier*0.001)%a)-b}, 100%,  50%)`;
            y++;
        }
        x++;
    }
    // x=0; original plan but less fun tbh
    // y=0;
}


