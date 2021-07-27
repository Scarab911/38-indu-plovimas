class Plates {
    constructor(owner) {
        this.owner = owner;
        this.plates = 0;
        this.cleanPlates = 0;
        this.usedPlates = 0;
    }
    intro() {
        if (this.plates === 0) {

            console.log(`Hi, this restoran has no plates! Please, buy some.`);
        } else {
            console.log(`Hi, this restoran has ${this.plates} plates!`);

        }
    }
    buyPlates(newPlates) {
        this.plates += newPlates;
        this.cleanPlates += newPlates;
        console.log(`Restoran purchased ${newPlates} plates.`);
    }
    usePlates(dishes) {
        // const cleanPlates = this.cleanPlatesCount(false);
        if (this.cleanPlates < dishes) {
            console.log(`Restoran has ${this.cleanPlates} plates only, it's not enough. No action is taken.`);
            return
        }
        this.usedPlates += dishes;
        console.log(`Restoran has made some dishes for ${dishes} plates.`);
    }
    cleanPlatesCount() {
        this.cleanPlates = this.plates - this.usedPlates;
        if (this.cleanPlates === 0) {
            console.log(`Restoran is left with no clean plates.`);

        } else {

            console.log(`Restoran has ${this.cleanPlates} clean plates.`);
        }


    }
    cleanUp(washNumber) {
        if (this.usedPlates < washNumber) {

            console.log(`Restoran does not have so many dirty plates.`);
        } else {
            this.cleanPlates += washNumber;
            console.log(`All plates in the Restoran is clean!`);
        }
    }
}

module.exports = Plates;