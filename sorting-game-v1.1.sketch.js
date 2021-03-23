// CONTROLS:
//  Spacebar - swap
//
// OBJECTIVE:
//  Sort the array with
//  the least amount of
//  swaps and time possible

let values
let cols = 10
let mul
let sel = 0
let start = false
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
    
    if(start) {
      text(`Running time: ${Date.now() - start}ms`, 5, 30)
    }
    
    mutated = false
  }
}

function keyPressed() {
  if(!start) {
    start = Date.now()
  }
  
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
    case 32: // ' '
      if(sel <= 0) {
        return
      }

      swap(values, sel, sel - 1)
      mutated = true
        
      break
  }
}
  
function swap(arr,i,j) {
  stats.swaps++
  
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
