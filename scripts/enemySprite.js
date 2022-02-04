var enemySprite = {
  _enemys: [],
  x: 0 + Math.floor((WIDTH - 60) * Math.random()),
  y: 0,
  height: 30,
  width: 60,
  color: "#ff9239",
  gravity: 0,
  speed: 4,
  timeToInsert: 0,

  insert() {
    this._enemys.push({
      x: 0 + Math.floor((WIDTH - 60) * Math.random()),
      y: -20,
    });

    if (score < 20) {
      this.timeToInsert = 10 + Math.floor(40 * Math.random());
    } else if (score >= 20 && score < 40) {
      this.timeToInsert = 10 + Math.floor(30 * Math.random());
    } else if (score >= 40 && score <= 60) {
      this.timeToInsert = 8 + Math.floor(30 * Math.random());
    } else {
      this.timeToInsert = 8 + Math.floor(20 * Math.random());
    }
  },

  update() {
    if (score < 20) {
      this.speed = 4;
    } else if (score >= 20 && score < 40) {
      this.speed = 5;
    } else {
      this.speed = 6;
    }
    
    if (!playerSprite.destroy && this.timeToInsert <= 0) {
      this.insert();
    } else {
      this.timeToInsert--;
    }

    this._enemys.map((item, index) => {
      item.y += this.speed;

      if (item.y >= HEIGHT) {
        this._enemys.splice(index, 1);
      }

      if (!playerSprite.destroy && playerSprite.y <= item.y && playerSprite.x + 50 >= item.x && playerSprite.x <= item.x + 60) {
        this._enemys.splice(index, 1);
        playerSprite.destroy = true;
        playerLife = 0;

        let savedScore = getRecord();
        if (savedScore && savedScore < score) {
          changeRecord(score);
        }
      }
    });

  },

  toDraw() {
    let image = new Image();

    image.src = "./images/enemy.png";

    this._enemys.map((item) => {
      context.drawImage(image, item.x, item.y, this.width, this.height);
    });
  },
};
