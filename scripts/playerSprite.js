var playerSprite = {
  x: WIDTH / 2 - 25,
  y: HEIGHT - 100,
  height: 50,
  width: 50,
  color: "#ff9239",
  gravity: 0,
  speed: 6,
  jumpForce: 23.6,
  amoutToJump: 0,
  score: 0,
  destroy: false,

  update() {
    if (!this.destroy) {
      if (isKeyUpPressed()) {
        this.speed += this.gravity;
        this.y -= this.speed;

        if (this.y <= 0) {
          this.y = 0;
          this.resetSpeed();
        }
      }

      if (isKeyDownPressed()) {
        this.speed += this.gravity;
        this.y += this.speed;

        if (this.y >= HEIGHT - 50) {
          this.y = HEIGHT - 50;
          this.resetSpeed();
        }
      }

      if (isKeyLeftPressed()) {
        this.speed += this.gravity;
        this.x -= this.speed;

        if (this.x <= 0) {
          this.x = 0;
          this.resetSpeed();
        }
      }

      if (isKeyRightPressed()) {
        this.speed += this.gravity;
        this.x += this.speed;

        if (this.x >= WIDTH - 50) {
          this.x = WIDTH - 50;
          this.resetSpeed();
        }
      }
    }

    if(playerLife <= 0) {
      this.destroy = true;

      let savedScore = getRecord();
      if(savedScore && savedScore < score) {
        changeRecord(score)
      }
    } 
  },

  resetSpeed() {
    this.speed = 6;
  },

  toDraw() {
    let image = new Image();

    if (this.destroy) image.src = "./images/explosion.png";
    else image.src = "./images/ship.png";

    context.drawImage(image, this.x, this.y, this.width, this.height);
  },
};
