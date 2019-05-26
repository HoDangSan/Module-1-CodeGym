function updateMyGame() {
    mygame.clear();
    ball.ballMove();
    ball.drawBall();
    if (ball.x + ball.radius >= player.x && ball.x <= player.x + player.width &&
        ball.y + ball.radius >= player.y && ball.y <= player.y + player.height) {
        ball.speedY = -ball.speedY;
    }

    player.drawPlayer();

}

function mouseMoveHandler(e) {
    player.x = e.clientX - mygame.canvas.offsetLeft - player.width / 2;
}

function gameOver() {
    mygame.context.font = "40px Comic Sans MS";
    mygame.context.fillStyle = "red";
    mygame.context.textAlign = "center";
    mygame.context.fillText("Game Over", mygame.canvas.width / 2, mygame.canvas.height / 2);
}