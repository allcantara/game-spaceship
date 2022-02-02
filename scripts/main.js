const toDraw = () => {
  context.fillStyle = "#000";
  context.fillRect(0, 0, WIDTH, HEIGHT);
  starsSprite.toDraw();
  enemySprite.toDraw();
  playerSprite.toDraw();
  shotPlayer.toDraw();
  shotEnemy.toDraw();
};

const update = () => {
  frames++;
  playerSprite.update();
  shotPlayer.update();
  enemySprite.update();
  starsSprite.update();
  shotEnemy.update()
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
