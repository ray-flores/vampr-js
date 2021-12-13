class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVamps = 0;
    let currentVamp = this;

    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      numberOfVamps++;
    }

    return numberOfVamps;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

    // Returns the vampire object with that name, or null if no vampire exists with that name
    vampireWithName(name) {

    }
  
    // Returns the total number of vampires that exist
    get totalDescendents() {
  
    }
  
    // Returns an array of all the vampires that were converted after 1980
    get allMillennialVampires() {
  
    }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

const original = new Vampire("Original", 0);

const ansel = new Vampire("Ansel", 1);
const bart = new Vampire("Bart", 2);

const elgort = new Vampire("Elgort", 2);
const sarah = new Vampire("Sarah", 3);

const andrew = new Vampire("Andrew", 3);

original.addOffspring(ansel);
original.addOffspring(bart);

ansel.addOffspring(elgort);
ansel.addOffspring(sarah);

elgort.addOffspring(andrew);




module.exports = Vampire;

