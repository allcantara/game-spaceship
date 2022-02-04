const toDraw = () => {
  context.fillStyle = "#000";
  context.fillRect(0, 0, WIDTH, HEIGHT);

  context.fillStyle = "#fff";
  context.font = "16px sans-serif";

  let lifeImage = new Image();
  lifeImage.src = "/images/life.png";
  context.drawImage(lifeImage, 2, 2, 30, 30);
  context.fillText(playerLife, 35, 22);

  let scoreImage = new Image();
  scoreImage.src = "/images/point.png";
  context.drawImage(scoreImage, 2, 28, 30, 30);
  context.fillText(score, 35, 48);

  let recordImage = new Image();
  recordImage.src = "/images/record.png";
  context.drawImage(recordImage, 2, 57, 30, 26);
  context.fillText(record, 35, 74);


  starsSprite.toDraw();
  enemySprite.toDraw();
  playerSprite.toDraw();
  shotPlayer.toDraw();
  shotEnemy.toDraw();
};

const update = () => {
  record = getRecord();
  if (!record) {
    changeRecord(0);
  }
  frames++;
  playerSprite.update();
  shotPlayer.update();
  enemySprite.update();
  starsSprite.update();
  shotEnemy.update();
};

const run = () => {
  update();
  toDraw();

  window.requestAnimationFrame(run);
};

const start = () => {
  run();
};

start();
