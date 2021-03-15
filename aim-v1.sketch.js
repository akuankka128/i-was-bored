let flags = 0b0
let frames = 0
let x = 0, y = 0
let lasthit = null

class Hit {
  constructor(x, y, distance, x2, y2) {
    this.x = x
    this.y = y
    this.d = distance
    this.x2 = x2
    this.y2 = y2
  }
}

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
    
    if(lasthit && lasthit.x2 && lasthit.y2) {
      let{ x, y, x2, y2 } = lasthit

      fill('black')
      circle(x,y, 3)
      circle(x2,y2, 3)
      line(x, y, x2, y2)
    }
  }
}

function mouseClicked() {
  let x1 = mouseX, y1 = mouseY
  let x2 = width / 2, y2 = height / 2
  
  lasthit = new Hit(
      mouseX, mouseY,
      dist(mouseX, mouseY, x, y),
      x, y
    )
  
  if(!(flags & 1)) {
    if(dist(x1, y1, x2, y2) <= 40) {
      lasthit = null
      
      flags ^= 1
      frames = Math.random() * 100 + 20
      
      x = Math.random() * width
      y = Math.random() * height
    }
  } else {    
    if(dist(mouseX, mouseY, x, y) <= 15) {
      start()
      flags ^= 1
    }
  }
}

function start() {
  background(0xffffff)
  fill('green');
  circle(width >> 1 height >> 1, 40);
}
