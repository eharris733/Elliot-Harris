class Animal {
    constructor(w) {
      this.x = random(width);
      this.y = random(height);
      this.tspeed = 0.1;
      this.fspeed = 2;
      this.sz = 15;
      this.energy = 200;
      // Changed the rate to be lower
      this.reproductionRate = globalConfig.predatorReproductionRate;
      this.heading = random(2 * PI);
      this.alive = true;
      this.w = w;
    }
  
    display() {
      //Implemented differently for Prey and Predator
    }
  
    show() {
      if (this.alive) {
        push();
        translate(this.x, this.y);
        rotate(this.heading);
        this.display();
        pop();
      }
    }
  
    shouldReproduce() {
      return random(1) < this.reproductionRate;
    }
  
    turn(dRads) {
      this.heading += dRads;
    }
  
    forward(amount) {
      this.x += cos(this.heading) * amount;
      this.y += sin(this.heading) * amount;
    }
  
    move() {
      this.turn(random(-this.tspeed, this.tspeed));
      this.forward(random(this.fspeed));
    }
  
    step() {
      this.move();
      this.fence();
    }
  
    wrap() {
      if (this.x > width) this.x = 0;
      else if (this.x < 0) this.x = width;
  
      if (this.y > height) this.y = 0;
      else if (this.y < 0) this.y = height;
    }
  
    fence() {
      this.x = constrain(this.x, 0, width);
      this.y = constrain(this.y, 0, height);
    }
  
    die() {
      this.alive = false;
    }
  
    distance(a) {
      return dist(this.x, this.y, a.x, a.y);
    }
  
    nearBy(maxD, T) {
      return this.w.nearBy(this, maxD, T);
    }
  }
  