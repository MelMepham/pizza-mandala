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

    push() //FLOWER OF LIFE PATTERN
      ellipse(450,450,210,210)
    translate(450, 450);
    blendMode(MULTIPLY);
      fill(247, 175, 207);
      ellipse(-60, 0, 120, 120);
      rotation(60)
      ellipse(-60, 0, 120, 120);
      rotation(60)
      ellipse(-60, 0, 120, 120);
      rotation(60)
      ellipse(-60, 0, 120, 120);
      rotation(60)
      ellipse(-60, 0, 120, 120);
      rotation(60)
      ellipse(-60, 0, 120, 120);
    pop()

    push() //CIRCLE FRAMING THE HEXAGON IN THE CENTER
    blendMode(MULTIPLY);
    translate(450, 450);
    fill(247, 76, 207);
    ellipse(0, 0, 120, 120);
    pop()

    push() //DARKEST TRIANGLE IN THE CENTRAL HEXAGON SHAPE
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

    push() //LIGHTEST TRIANGLE IN THE CENTRAL HEXAGON SHAPE
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

    push() // CENTRAL TURQUOIUSE HEXAGON
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
