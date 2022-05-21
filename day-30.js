// https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript

// SantaClausable Interface

function isSantaClausable(obj) {
  const methods = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'];
  return methods.every(method => typeof obj[method] === 'function');
}

/***********************************************************************/

// https://www.codewars.com/kata/52e5e86b2ff32887280002e4/train/javascript

// Cylon Evolution

class Cylon {
  constructor(model) {
    this.model = model;
    this.attack = () => "Destroy all humans!";
  }
}

class HumanSkin extends Cylon {
  constructor(model) {
    super(model) 
      this.infiltrate = () => "Infiltrate the colonies";
  }
}
