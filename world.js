class World {
    constructor() {
      this.MAX_ANIMALS = 200;
      this.animals = new Array(this.MAX_ANIMALS);
      this.num = 0;
    }
  
    tic() {
      for (let i = 0; i < this.num; i++) {
        this.animals[i].step();
        this.animals[i].show();
      }
      this.removeDead();
    }
  
    addAnimal(a) {
      this.animals[this.num] = a;
      this.num++;
    }
  
    count(T) {
      let count = 0;
      for (let i = 0; i < this.animals.length; i++) {
        if (this.animals[i] instanceof T) {
          count++;
        }
      }
      return count;
    }
  
    removeDead() {
      for (let i = this.num - 1; i >= 0; i--) {
        if (!this.animals[i].alive) {
          this.animals[i] = this.animals[this.num - 1];
          this.animals[this.num - 1] = null;
          this.num--;
        }
      }
    }
  
    nearBy(c, maxD, T) {
      for (let i = 0; i < this.num; i++) {
        let d = c.distance(this.animals[i]);
        if (d < maxD && this.animals[i] instanceof T) {
          return true;
        }
      }
      return false;
    }
  }
  