var WIDTH,
  HEIGHT,
  context,
  canvas,
  frames,
  keyPressed,
  isShoot = false,
  isKeyUp = false,
  obstaclesSpeed = 12,
  playerLife = 10,
  score = 0,
  record;

const _createCanvas = () => {
  canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  canvas.style.border = "1px solid #fff";

  context = canvas.getContext("2d");
  document.body.appendChild(canvas);
  document.addEventListener("keypress", keyboardManager);
  document.addEventListener("keyup", () => {
    isKeyUp = false;
    isShoot = false;
  });
};

const getRecord = () => {
  return localStorage.getItem("@spaceship_record") 
}

const changeRecord = (value) => {
  record = value;
  localStorage.setItem("@spaceship_record", value);
}

const _initGlobalConfig = () => {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight + 200;

  if (WIDTH >= 500) {
    WIDTH = 600;
    HEIGHT = 600 + 200;
  }

  _createCanvas();
};

_initGlobalConfig();
