let flags = 0b0
let frames = 0
let x = 0, y = 0

function setup() {
  createCanvas(400, 400);
  start();
}

function draw() {
  if(flags & 1) {
    frames--
    background(0xffffff)
    
    if(frames <= 0) {
      fill('red')
      circle(x, y, 30)
    }
  }
}

function mouseClicked() {
  let x1 = mouseX, y1 = mouseY
  let x2 = width / 2, y2 = height / 2
  
  if(!(flags & 1)) {
    if(dist(x1, y1, x2, y2) <= 40) {
      flags ^= 1
      frames = Math.random() * 100 + 20
      
      x = Math.random() * width
      y = Math.random() * height
    }
  } else {
    if(dist(mouseX, mouseY, x, y) <= 30) {
      flags ^= 1
      start()
    }
  }
}

function start() {
  background(0xffffff)
  fill('green');
  circle(width / 2, height / 2, 40);
}
