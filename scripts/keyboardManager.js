var keyCode = {
  Space: "Space",
  KeyW: "KeyW",
  KeyS: "KeyS",
  KeyA: "KeyA",
  KeyD: "KeyD",
};

const keyboardManager = (event) => {
  isKeyUp = true;

  if (event.code !== keyCode.Space && keyCode[event.code]) {
    keyPressed = event.code;
  }

  if (event.code === keyCode.Space) {
    isShoot = true;
  }
};

const resetKeyPressed = () => keyPressed = null;

const isKeyUpPressed = () => keyPressed === keyCode.KeyW;

const isKeyDownPressed = () => keyPressed === keyCode.KeyS;

const isKeyLeftPressed = () => keyPressed === keyCode.KeyA;

const isKeyRightPressed = () => keyPressed === keyCode.KeyD;
