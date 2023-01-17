let rectX = 0;
let fr = 90;
let clr;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  frameRate(fr);
  clr = color("white");
  let r = random
}
function draw() {
  background("black");
  stroke("white");
  strokeWeight(0);
  fill("white");
  textSize(20);
  // 67 percent screen zoom works best for viewing
  text("National Star Day", windowWidth / 2 - 100, windowHeight / 2);
  text("April 12th", windowWidth/2-65,windowHeight/2+50);
  stroke("white");
  strokeWeight(4 / 3);
  point(5, 20);
  point(11 / 2, 20);
  point(6, 20);
  point(13 / 2, 20);
  point(7, 20);
  point(15 / 2, 20);
  point(8, 20);
  point(17, 20);
  point(9, 20);
  point(19, 20);
  point(10, 20);
  point(21 / 2, 20);
  strokeWeight(4 / 2);
  point(50, 400);
  point(80, 350);
  point(85, 355);
  point(90, 410);
  strokeWeight(4 / 2);
  point(100, 300);
  point(100, 410);
  point(120, 130);
  point(150, 430);
  point(190, 200);
  point(192, 300);
  point(193, 298);
  point(190, 500);
  strokeWeight(4 / 3);
  point(200, 100);
  point(200, 500);
  point(200, 400);
  point(250, 550);
  point(250, 360);
  point(290, 290);
  point(299, 286);
  point(299, 296);
  point(299,500)
  point(299,600)
  strokeWeight(4 / 2);
  point(300, 20);
  point(300, 299);
  point(300, 298);
  point(301, 290);
  point(301, 296);
  point(302, 290);
  strokeWeight(3 / 2);
  point(302, 298);
  point(303, 290);
  point(303, 298);
  point(304, 290);
  point(304, 298);
  point(305, 290);
  point(305, 300);
  point(306, 290);
  point(306, 300);
  point(300, 300);
  point(300, 400);
  strokeWeight(4 / 3);
  point(300, 500);
  point(300, 600);
  point(350, 655);
  strokeWeight(4 / 3);
  point(400, 200);
  point(480, 400);
  point(400, 600);
  point(450, 150);
  strokeWeight(4 / 2);
  point(500, 60);
  point(500, 100);
  point(500, 200);
  point(500, 300);
  point(500, 400);
  point(500, 500);
  point(530, 500);
  point(560, 400);
  point(565, 594);
  point(568, 600);
  point(570, 587);
  strokeWeight(4 / 3);
  point(600, 30);
  point(600, 300);
  point(600, 400);
  point(600, 506);
  point(610,700)
  point(625,705)
  point(640,710)
  point(665,715)
  point(680,710)
  point(695,705)
  point(695,700)
  point(696, 416);
  point(699, 600);
  strokeWeight(4 / 2);
  point(705,600)
  point(710,605)
  point(715,500)
  point(715,40)
  point(715,638)
  point(750, 400);
  point(750, 500);
  point(790, 300);
  strokeWeight(4 / 2);
  point(800, 20);
  point(800, 50);
  strokeWeight(4 / 2);
  point(800, 250);
  point(810, 35);
  point(820, 80);
  point(830, 90);
  point(830,500)
  point(820,530)
  point(810,560)
  point(820,590)
  point(830,620)
  point(820,50)
  point(810,150)
  point(850,190)
  point(850,240)
  point(850,290)
  point(850,340)
  point(855,200)
  point(855,300)
  point(855,350)
  point(855,400)
  strokeWeight(4 / 3);
  point(900, 40);
  point(910, 50);
  strokeWeight(10/3)
  point(windowWidth-windowWidth/2, windowHeight-windowHeight)
  for (let i = 0; i < 700; i++) {
    let r = random(700);
    stroke("white");
    strokeWeight(3);
    point(r * i, r * i);
    fr = 15;
  }
  noStroke();
  rectX = rectX += 5;
  if (rectX >= width) {
    if (fr >= 1) {
      clr = color("white");
      fr = 90;
      frameRate(fr);
    } else {
      clr = color("white");
      fr = 10;
      frameRate(fr);
    }
    rectX = 0;
  }
  fill(clr);
  stroke("white");
  strokeWeight(2 / 8);
  circle(rectX, rectX, 3);
  line(rectX, rectX, rectX - 50, rectX - 40);
  strokeWeight(2 / 3);
  translate(100, 5);
  circle(rectX, rectX, 3);
  line(rectX, rectX, rectX - 40, rectX - 40);
  strokeWeight(2 / 8);
  translate(10, 30);
  circle(rectX, rectX, 3);
  line(rectX, rectX, rectX - 20, rectX - 20);
  translate(100, 135);
  circle(rectX - 650, rectX - 650, 3);
  line(rectX, rectX, rectX - 55, rectX - 55);
  translate(110, 130);
  circle(rectX - 640, rectX - 640, 9 / 5);
  line(rectX - 640, rectX - 640, rectX - 660, rectX - 660);
  translate(200, 280);
  strokeWeight(2);
  circle(rectX - 10, rectX - 10, 9 / 5);
  strokeWeight(5 / 25);
  line(rectX - 10, rectX - 10, rectX - 60, rectX - 60);
  translate(300, 30);
  strokeWeight(2);
  circle(rectX, rectX, 9 / 5);
  strokeWeight(6 / 25);
  line(rectX, rectX, rectX - 40, rectX - 40);
  translate(rectX - 10, rectX - 10);
  strokeWeight(2 / 8);
  circle(rectX - 10, rectX - 10, 5);
  strokeWeight(5 / 25);
  line(rectX - 10, rectX - 10, rectX - 300, rectX - 300);
  translate(rectX, rectX);
  strokeWeight(2 / 9);
  circle(rectX, rectX, 2);
  line(rectX, rectX, rectX - 10, rectX - 10);
  translate(30, 9);
  strokeWeight(5);
  circle(rectX - 30, rectX - 30, 2 / 3);
  strokeWeight(2 / 8);
  line(rectX - 30, rectX - 30, rectX - 400, rectX - 400);
  translate(rectX + 30, rectX + 9);
  strokeWeight(5);
  circle(rectX - 30, rectX - 30, 2 / 9);
  strokeWeight(2 / 8);
  line(rectX - 30, rectX - 30, rectX - 400, rectX - 400);
    translate(100, 190);
  strokeWeight(2);
  circle(rectX - 20, rectX - 20, 10 / 5);
  strokeWeight(5 / 25);
  line(rectX - 20, rectX - 20, rectX - 80, rectX - 80);
}