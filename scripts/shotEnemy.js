var shotEnemy = {
  _shots: [],
  x: enemySprite.x + 15,
  y: enemySprite.y + 60,
  height: 5,
  width: 5,
  color: "red",
  gravity: 0,
  speed: 6,
  jumpForce: 23.6,
  amoutToJump: 0,
  score: 0,
  timeToInsert: 0,

  insert(enemy) {
    const shotAudio = new Audio();
    shotAudio.src = "./audios/laser_enemy.wav";
    shotAudio.load();
    shotAudio.play();

    this._shots.push({
      x: enemy.x + 30,
      y: enemy.y + 30,
      player: playerSprite,
    });

    this.timeToInsert = 140;
  },

  update() {
    enemySprite._enemys.map((enemy) => {
      if (!playerSprite.destroy) {
        if (this.timeToInsert <= 0) {
          this.insert(enemy);
        } else {
          this.timeToInsert--;
        }
      }
    });

    this._shots.map((item, index) => {
      item.y += this.speed;

      if (item.y >= HEIGHT) {
        this._shots.splice(index, 1);
      }

      if (!playerSprite.destroy && playerSprite.y <= item.y && playerSprite.x + 50 >= item.x && playerSprite.x <= item.x + 5) {
        this._shots.splice(index, 1);
        playerLife--;
        console.log(score, playerLife);
      }
    });
  },

  toDraw() {
    this._shots.map((item) => {
      context.beginPath();
      context.arc(item.x, item.y, this.width, 0, Math.PI * 2);
      context.fillStyle = this.color;
      context.stroke();
      context.fill();
    });
  },
};
