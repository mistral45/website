const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const tenincreaseBtn = document.getElementById("tenincreaseBtn");
const tendecreaseBtn = document.getElementById("tendecreaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
tenincreaseBtn.onclick = function(){
    count+=10;
    countLabel.textContent = count;
}
tendecreaseBtn.onclick = function(){
    count-=10;
    countLabel.textContent = count;
}

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        count++;
        countLabel.textContent = count;
    }
  })

  document.addEventListener('keyup', event => {
    if (event.code === 'KeyR') {
        count = 0;
        countLabel.textContent = count;
    }
  })

  document.addEventListener('keyup', event => {
    if (event.code === 'Backspace') {
        count--;
        countLabel.textContent = count;
    }
  })
  document.addEventListener('keyup', event => {
    if (event.code === 'KeyE') {
        count+=10;
        countLabel.textContent = count;
    }
  })

  document.addEventListener('keyup', event => {
    if (event.code === 'KeyQ') {
        count-=10;
        countLabel.textContent = count;
    }
  })