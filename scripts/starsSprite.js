var starsSprite = {
  _stars: [{ x: Math.floor(WIDTH * Math.random()), y: 0, width: 3, height: 3 }],
  y: 0,
  height: 2,
  width: 2,
  colors: ["#fff", "#ddd", "#555", "#777", "#eee"],
  timeToInsert: 0,
  speed: 9,

  insert() {
    this._stars.push({ x: Math.floor(WIDTH * Math.random()) - this.height, y: this.y, width: this.width, height: this.height, color: this.colors[Math.floor(5 * Math.random())] });
    this.timeToInsert = 1 + Math.floor(3 * Math.random());
  },

  update() {
    if (this.timeToInsert === 0) {
      this.insert();
      this.insert();
      this.insert();
    } else {
      this.timeToInsert--;
    }

    this._stars.map((item, index) => {
      item.y += this.speed;

      if (item.y >= HEIGHT - this.height) {
        this._stars.splice(index, 1);
      }
    });
  },

  toDraw() {
    this._stars.map((item) => {
      context.fillStyle = item.color;
      context.fillRect(item.x, item.y, item.width, item.height);
    });
  },
};
