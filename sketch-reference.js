function rotation(degrees) {
  rotate(radians(degrees))
}


function setup() {
    createCanvas(300, 300);
}

function draw(){

    background(255, 242, 235);
    noStroke();

    push() //FLOWER OF LIFE PATTERN
      ellipse(450, 450, 210, 210)
      translate(150, 150);
      blendMode(MULTIPLY);
      fill(247, 175, 207);
        for (let i=0; i<6; i++) {
          ellipse(-60, 0, 120, 120);
          rotation(60)
        }
    pop()

    push() //CIRCLE FRAMING THE HEXAGON IN THE CENTER
      blendMode(MULTIPLY);
      translate(150, 150);
      fill(247, 76, 207);
      ellipse(0, 0, 120, 120);
    pop()

    push() //DARKEST TRIANGLE IN THE CENTRAL HEXAGON SHAPE
      translate(150, 150);
      fill(0, 242, 199);
      for (let i=0; i<6; i++) {
        triangle(-52, 30, -52, -30, 0, 0);
        rotation(60)
      }
    pop()

    push() //LIGHTEST TRIANGLE IN THE CENTRAL HEXAGON SHAPE
      translate(150, 150);
      fill(197, 255, 215);
      for (let i=0; i<6; i++) {
        triangle(-52, -30, 0, 0, -35, 0)
        rotation(60)
      }
    pop()

    push() // CENTRAL TURQUOIUSE HEXAGON
      translate(150, 150);
      fill(0, 144, 207);
      for (let i=0; i<6; i++) {
        triangle(-52, 30, -35, 0, 0, 0)
        rotation(60)
      }
    pop()


  }
