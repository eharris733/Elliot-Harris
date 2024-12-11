class Prey extends Animal {
    constructor(w) {
      super(w);
      this.reproductionRate = globalConfig.reproductionRate;
    }
  
    display() {
      if (!this.alive) {
        return;
      }
      fill(70, 130, 180, 150); // Semi-transparent blue
      noStroke();
      ellipse(0, 0, this.sz * 2, 10);
    }
  
    step() {
      super.step();
  
      if (this.nearBy(this.sz, Predator)) {
        this.die();
      }
      if (this.shouldReproduce()) {
        this.w.addAnimal(new Prey(this.w));
      }
    }
  }
  