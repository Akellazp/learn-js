class Chameleon {
    constructor({ newColor = "green" } = {}) {
      this.newColor = newColor;
    }
    
    static colorChange(newColor) {
      this.newColor = newColor;
    }
    
    getColor() {
      return this.newColor;
    }
  }
  
  const freddie = new Chameleon();
  Chameleon.colorChange("orange");
  const color = freddie.getColor();
  console.log(color);