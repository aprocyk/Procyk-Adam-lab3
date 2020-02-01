document.addEventListener('DOMContentLoaded', appStart);

let field, ball, maxX, maxY, animateball, ballx, bally, difficulty;
let holeArray = [];

function appStart() {
    field = document.querySelector('.field')
    ball = document.querySelector('.ball')
    // maxX = field.clientWidth - ball.clientWidth
    // maxY = field.clientHeight - ball.clientHeight
    animateball = () => move;
    window.addEventListener('deviceorientation', move)
    ball.style.left = '200px';
    ball.style.top = '200px';
    difficulty = 5;
    
    generateHole();
}

function handleGravity() {
    let xVelocity = event.gamma * 0.1;
    let yVelocity = event.beta * 0.1;
    let ballYPos = parseInt(ball.style.top) + yVelocity + 'px';
    let ballXPos = parseInt(ball.style.left) + xVelocity + 'px';
    ball.style.top = ballYPos;
    ball.style.left = ballXPos;
    checkCollsion();
}
function move() {
    handleGravity();
    window.requestAnimationFrame(animateball);
}
function generateHole() {
    for (let i = 0; i < difficulty; i++) {
        let toph = Math.floor(Math.random() * (field.clientHeight - 100));
        let lefth = Math.floor(Math.random() * (field.clientWidth - 100));
        const hole = document.createElement('div');
        hole.className = 'hole';
        hole.style.left = lefth + 'px';
        hole.style.top = toph + 'px';
        holeArray.push({ toph, lefth });
        field.appendChild(hole);
    }
}
function checkCollsion() {
    holeArray.forEach((item) => {
        if (parseInt(ball.style.top) > item.toph
            && parseInt(ball.style.left) > item.lefth
            && parseInt(ball.style.top) < item.toph + 100
            && parseInt(ball.style.left) < item.lefth + 100) {
            console.log("Collision");
        }

    })


}