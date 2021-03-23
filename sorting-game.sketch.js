let values
let cols = 10
let mul
let sel = 0
let stats = {
  swaps: 0
}

/** optimization */
let mutated = true

function setup() {
  mul = width / cols
  
  createCanvas(400, 400);
  values = Array(cols)
    .fill().map(() => random(height))
  
  mul = width / mul
}

function draw() {
  text(stats.swaps, 5, 15)
  
  if(mutated) {
    background(0);
    let min = values[0]
    let flag = false
    
    for(let i = 0, l = values.length; i < l; i++) {
      let v = values[i]
      fill('red')
      
      if(v < min) {
        flag = true
      }
      
      if(v >= min && !flag) {
        fill('green')
        min = v
      }
      
      if(sel === i) {
        fill('yellow')
      }

      rect(mul * i, height, mul, -values[i])
    }
    
    mutated = false
  }
}

function keyPressed() {
  switch(keyCode) {
    case RIGHT_ARROW:
      sel += 1
      sel -= 1 * sel >= values.length
      mutated = true
      break
    case LEFT_ARROW:
      sel -= 1
      sel *= sel >= 0
      mutated = true
      break
    case 81:
      if(sel <= 0) {
        return
      }

      swap(values, sel, sel - 1)
      mutated = true
  }
}
  
function swap(arr,i,j) {
  stats.swaps++
  
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
