// var shapes = require('./shapes')
// console.log(shapes)

function rotation(degrees) {
  rotate(radians(degrees))
}


function setup() {
    createCanvas(900, 900);
}

function draw(){

    background(255, 242, 235);
    noStroke();

    push()
    fill(247, 76, 207);
    tint(255, 127);
      ellipse(450, 450, 120, 120);
      fill(247, 175, 207);
      ellipse(390, 450, 120, 120);
    pop()

    push()
    translate(450, 450);
    fill(0, 242, 199);
      triangle(-52, 30, -52, -30, 0, 0);
      rotation(60)
      triangle(-52, 30, -52, -30, 0, 0);
      rotation(60)
      triangle(-52, 30, -52, -30, 0, 0);
      rotation(60)
      triangle(-52, 30, -52, -30, 0, 0);
      rotation(60)
      triangle(-52, 30, -52, -30, 0, 0);
      rotation(60)
      triangle(-52, 30, -52, -30, 0, 0);
    pop()

    push()
    translate(450, 450);
    fill(197, 255, 215);
      triangle(-52, -30, 0, 0, -35, 0)
      rotation(60)
      triangle(-52, -30, 0, 0, -35, 0)
      rotation(60)
      triangle(-52, -30, 0, 0, -35, 0)
      rotation(60)
      triangle(-52, -30, 0, 0, -35, 0)
      rotation(60)
      triangle(-52, -30, 0, 0, -35, 0)
      rotation(60)
      triangle(-52, -30, 0, 0, -35, 0)
    pop()

    push()
    translate(450, 450);
    fill(0, 144, 207);
      triangle(-52, 30, -35, 0, 0, 0)
      rotation(60)
      triangle(-52, 30, -35, 0, 0, 0)
      rotation(60)
      triangle(-52, 30, -35, 0, 0, 0)
      rotation(60)
      triangle(-52, 30, -35, 0, 0, 0)
      rotation(60)
      triangle(-52, 30, -35, 0, 0, 0)
      rotation(60)
      triangle(-52, 30, -35, 0, 0, 0)
    pop()




  }
