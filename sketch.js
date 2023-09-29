let w;
var canvas;

function windowResized(){
  resizeCanvas(windowWidth, document.body.scrollHeight);
}

function setWorld(){
  w = new World();
  for (let i = 0; i < globalConfig.prey; i++) {
    w.addAnimal(new Prey(w));
  }

  for (let i = 0; i < globalConfig.predators; i++) {
    w.addAnimal(new Predator(w));
  }
}

function setup() {
  canvas = createCanvas(windowWidth, document.body.scrollHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  setWorld();
}

function draw() {
  background(240);
  w.tic();
  drawPop();
}

function drawPop() {
  let numPrey = w.count(Prey);
  let numPredator = w.count(Predator);
  
  if(numPrey == 0 | numPredator == 0){
    setWorld();
  }
 
    noStroke();
    fill(0, 0, 255, 124);
    rect(0, 10, numPrey*3, 18);
    fill(255, 0, 0, 124);
    rect (0, 30, numPredator*3, 18);
}
