function setup() {
    createCanvas(1024, 768);
    background(68, 37, 58);
}

let elY1 = 500;
let elY2 = 450;
let elFalling1 = false;
let elFalling2 = false;
let rising1 = false;
let rising2 = false;
const ellipsepPosition = [{
        x: 250,
        y: elY1,
        width: 100,
        height: 40,
    },
    {
        x: 100,
        y: elY2,
        width: 70,
        height: 30,
    },
    {
        x: 150,
        y: 700,
        width: 300,
        height: 68,
    },

]

function draw() {
    // draw triangle strip//
    //check if in falling state//
    //if falling increase the psotion of the y ellipsses//
    if (elFalling1 === true) {
        elY1 += 1
    }
    if (elFalling2 === true) {
        elY2 += 2
    }
    //if rising decrease the Y position of the ellipsise//
    if (rising1 === true) {
        elY1 -= 1
    }
    if (rising2 === true) {
        elY2 -= 2
    }
    // Check if ellipse has reached lowest point if it has start rising//
    if (elY1 > 670) {
        elFalling1 = false;
        rising1 = true;
    }
    if (elY2 > 670) {
        elFalling2 = false;
        rising2 = true;
    }
    //check if ellipses have return back to original position if they have then stop rising//
    if (elY1 < 480) {
        rising1 = false;
    }
    if (elY2 < 420) {
        rising2 = false;
    }
    push()
    fill(67, 89, 117)
    beginShape(TRIANGLE_STRIP);
    vertex(30, 100);
    vertex(40, 20);
    vertex(50, 75);
    vertex(60, 70);
    vertex(70, 75);
    vertex(80, 20);
    vertex(90, 75);
    endShape();
    pop()

    //draw arc 

    push()
    fill(156, 46, 75)
    arc(370, 200, 100, 39, 75, 5);
    pop()

    //draw ellipse and multiple ellipses in a for loop 
    push()
    fill(38, 129, 139);
    for (let i = 0; i < ellipsepPosition.length; i++) {
        let el = ellipsepPosition[i]
        if(i===0){
            let = ellipse(el.x, elY1, el.width, el.height)

        }
        else if(i === 1){
            let = ellipse(el.x, elY2, el.width, el.height)

        }
        else{
            let = ellipse(el.x, el.y, el.width, el.height)
        }
    }
    pop()
    //draw gold line

    push()
    stroke(173, 101, 44);
    strokeWeight(4);
    line(1, 400, width, 300);
    pop()

    //draw green line
    push()
    stroke(21, 112, 98);
    strokeWeight(4);
    line(300, 0, 350, height);
    pop()

}
function mouseClicked() {
elFalling1 = true;
elFalling2 = true;
    

    return false;
  }