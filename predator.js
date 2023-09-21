class Predator extends Animal {
    constructor(w) {
      super(w);
    }
  
    display() {
      if (!this.alive) {
        return;
      }
      fill(255, 0, 0);
      noStroke();
      rect(0, 0, this.sz * 2, 10);
    }
  
    step() {
      super.step();
      this.energy -= random(2.5, 3.5);
      if (this.shouldReproduce()) {
        this.w.addAnimal(new Predator(this.w));
      }
      if (this.nearBy(this.sz, Prey)) {
        this.energy = 200;
      }
      if (this.energy <= 0) {
        this.die();
      }
    }
  }
  