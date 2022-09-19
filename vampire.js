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
    let numberOfVampires = 0;
    let currentVampire = this;
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }
    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    if (!this.creator) {
      return this;
    }
    if (this.numberOfVampiresFromOriginal <= 1) {
      return this.creator;
    }
    if (this.name === vampire.name) {
      return this;
    }

    if (this.creator.name === vampire.name || this.name === vampire.creator.name) {
      if (this.creator.name === vampire.name) {
        return vampire;
      } else {
        return this;
      }
    }

    if (this.creator.name !== vampire.creator.name) {
      let arrayOfThis = [];
      let arrayOfVam = [];
      let thCreator = this.creator
      let vamCreator = vampire.creator
      while (thCreator) {
        arrayOfThis.push(thCreator);
        thCreator = thCreator.creator;
      }
      while (vamCreator) {
        arrayOfVam.push(vamCreator);
        vamCreator = vamCreator.creator;
      }

      for (let c of arrayOfThis) {
        for (let v of arrayOfVam) {
          if (c === v) {
            return v;
          }
        }
      }
    }
  }

  vampireWithName(name) {

  }

  // Returns the total number of vampires that exist
  get totalDescendents() {

  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {

  }
}

module.exports = Vampire;

