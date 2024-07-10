function Animal(nome, especie) {
  this.nome = nome;
  this.especie = especie;
}

function Cachorro(nome, especie) {
  Animal.call(this, nome, especie);

  this.fazBarulho = function () {
    console.log("Au au");
  };
}

function Gato(nome, especie) {
  Animal.call(this, nome, especie);

  this.fazBarulho = function () {
    console.log("MIIIIIIAAAAU");
  };
}

const cachorro1 = new Cachorro("Pipoca", "dachshund");
const cachorro2 = new Cachorro("Bolita", "Vira-lata");
const gato = new Gato("Lux", "Branca");

cachorro1.fazBarulho();
console.log(cachorro1);

cachorro2.fazBarulho();
console.log(cachorro2);

gato.fazBarulho();
console.log(gato);
