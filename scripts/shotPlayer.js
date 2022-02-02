var shotPlayer = {
  _shots: [],
  x: playerSprite.x + 22,
  y: playerSprite.y - 20,
  height: 20,
  width: 10,
  color: "#ff9239",
  gravity: 0,
  speed: 9,
  jumpForce: 23.6,
  amoutToJump: 0,
  score: 0,
  timeToInsert: 0,

  insert() {
    const shotAudio = new Audio();
    shotAudio.src = "./audios/laser_player.wav";
    shotAudio.load();
    shotAudio.play();

    this._shots.push({
      x: playerSprite.x + 22,
      y: playerSprite.y - 20,
    });

    this.timeToInsert = 3;
  },

  update() {
    if (isShoot && this.timeToInsert <= 0) {
      this.insert();
    } else {
      this.timeToInsert--;
    }

    this._shots.map((item, index) => {
      item.y -= this.speed;

      if (item.y <= 0) {
        this._shots.splice(index, 1);
      }

      enemySprite._enemys.map((enemy, enemyIndex) => {
        if (item.y <= enemy.y + 15 && item.x >= enemy.x - 5 && item.x <= enemy.x + 60) {
          this._shots.splice(index, 1);
          enemySprite._enemys.splice(enemyIndex, 1);
          score++;
          console.log(score, playerLife)
        }
      });
    });
  },

  toDraw() {
    let image = new Image();
    image.src = "./images/shot_player.png";
    this._shots.map((item) => {
      context.drawImage(image, item.x, item.y, this.width, this.height);
    });
  },
};
