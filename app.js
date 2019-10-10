// const holes = document.querySelectorAll('.hole');
// const scoreBoard = document.querySelector('.score');
// const moles = document.querySelectorAll('.mole');
// let lastHole

// // get random time
// function randomTime(min, max) {
//     return Math.round(Math.random() + (max - min) + min)
// }

// // pick a random hole for mole to pop up in
// function randomHole(holes) {
//     const idx = Math.floor(Math.random() * holes.length)
//     const hole = holes[idx]


//     if (hole === lastHole) {
//         console.log(" Ah nah thats the same one bud")
//         return randomHole(holes)
//     }

//     // what ths will do is save the refrencereference to what one got popped up last - 
//     // time this function was called so that in here what we can do it we'll say, "if(hole
//     // = lastHole)" like if it was the same
//     lastHole = hole
//     return hole
// }

// // get moles up
// function peep() {
//     const time = randomTime(200, 1000);
//     const hole = randomHole(holes);
//     console.log(time, hole)
// }



const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        console.log('Ah nah thats the same one bud');
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}
function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}
function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000)
}
function bonk(e) {
    if (!e.isTrusted) return; // cheater!
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}
moles.forEach(mole => mole.addEventListener('click', bonk));