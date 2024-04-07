const body = document.getElementById("everything");

let clicked = true;

function displayCords(event){
    body.textContent = `${event.screenX} ${event.screenY}`;
    clicked ? clicked = false : clicked = true;
    body.style.backgroundColor = clicked ? "red" : "blue";
}
body.addEventListener("click", displayCords);

const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event =>{
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y-=moveAmount;
                break;
            case "ArrowDown":
                y+=moveAmount;
                break;
            case "ArrowLeft":
                x-=moveAmount;
                break;
            case "ArrowRight":
                x+=moveAmount;
                break;
        }
        body.style.top = `${y}px`;
        body.style.left = `${x}px`;
    }
});