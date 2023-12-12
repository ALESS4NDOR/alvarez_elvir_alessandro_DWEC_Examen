// Clase Aula
class Aula {
  constructor(numero, capacidad) {
    this.numero = numero;
    this.capacidad = capacidad;
  }

  // Sobrescribe el método presentarMateriales() para la clase Aula
  presentarMateriales() {
    console.log(`Bienvenidos al aula ${this.numero}, la cual tiene capacidad para ${this.capacidad} personas`);
  }
}

// Clase Musica hereda de la Clase Aula
class Musica extends Aula {
  // Sobrescribe el método presentarMateriales() para la clase Musica
  presentarMateriales() {
    console.log(`Bienvenidos al aula de música número ${this.numero}. Hoy presentaremos los materiales necesarios para la clase de saxofón. Solamente tenemos ${this.capacidad} plazas.`);
  }
}

// Clase Tecnologia hereda de la Clase Aula
class Tecnologia extends Aula {
  constructor(numero, capacidad, ordenadores) {
    super(numero, capacidad);
    this.ordenadores = ordenadores;
  }

  // Sobrescribe el método presentarMateriales() para la clase Tecnologia
  presentarMateriales() {
    console.log(`Bienvenidos al aula de tecnología número ${this.numero}. El día de hoy hemos comprado ${this.ordenadores} ordenadores adicionales para aprender a programar. En total, ahora tenemos ${this.capacidad} estudiantes de capacidad.`);
  }
}

// Instanciando objetos
var aula1 = new Aula(1, 20);
var aulaMusica = new Musica(2, 10);
var aulaTecnologia = new Tecnologia(3, 30, 20);

// Ejecutando el método presentarMateriales() para el Aula, aulaMusica y aulaTecnologia
aula1.presentarMateriales();
aulaMusica.presentarMateriales();
aulaTecnologia.presentarMateriales();

// Característica de POO para sobrescribir métodos: polimorfismo
console.log("La característica de la POO que permite sobrescribir los métodos en herencia es el polimorfismo.");
