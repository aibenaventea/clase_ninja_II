class Ninja{
    nombre ="";
    vida = 100;
    velocidad = 3;
    fuerza = 3;

    showStats(){
        console.log(`Nombre: ${this.nombre}, vida: ${this.vida}, velocidad: ${this.velocidad}, fuerza: ${this.fuerza}`)
    }

    punch(parameter) {
        let dañoPunch = 5;
        parameter.vida -= dañoPunch; 
        console.log(`${this.nombre} pego un puñetazo a ${parameter.nombre} y este perdio 5 de vida`)
        this.showStats();
        parameter.showStats();
    }

    kick(parameter) {
        let dañoKick = 15 * this.fuerza;
        parameter.vida -= dañoKick; 
        console.log(`${this.nombre} pego una patada a ${parameter.nombre} y este perdio 15 de vida`)
        this.showStats();
        parameter.showStats();
        parameter.punch(this);
    }
}

let blueNinja = new Ninja()
blueNinja.nombre = "RamenMan";
blueNinja.fuerza = 1;

let redNinja = new Ninja()
redNinja.nombre = "TofuLover";

redNinja.punch(blueNinja);
blueNinja.kick(redNinja);

