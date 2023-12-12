// Función prototipo CuentaBancaria
function CuentaBancaria(nombre, dni, saldo = 0) {
    this.nombre = nombre;
    this.dni = dni;
    this.saldo = saldo;
    this.numeroCuenta = "ES" + Math.floor(Math.random() * 99999999999999999999).toString().padStart(20, '0');
  }
  
  // Método para mostrar los datos de la cuenta por consola
  CuentaBancaria.prototype.mostrarDatos = function () {
    console.log(`Nombre: ${this.nombre} \nDNI: ${this.dni} \nNúmero de Cuenta: ${this.numeroCuenta} \nSaldo: ${this.saldo}€`);
  };
  
  // Método para realizar un ingreso en la cuenta
  CuentaBancaria.prototype.realizarIngreso = function (monto) {
    if (monto > 0) {
      this.saldo += monto;
      console.log(`Ingreso realizado. Nuevo saldo: ${this.saldo}€`);
    } else {
      console.log("Error: El monto debe ser un número positivo.");
    }
  };
  
  // Método para realizar un retiro de la cuenta
  CuentaBancaria.prototype.realizarRetiro = function (monto) {
    if (monto > 0 && monto <= this.saldo) {
      this.saldo -= monto;
      console.log(`Retiro realizado. Nuevo saldo: ${this.saldo}€`);
    } else {
      console.log("Error: Monto inválido o insuficiente saldo.");
    }
  };
  
  // Método para realizar una transferencia a otra cuenta, utilizamos 2 parametros "cuentaDestino" y "monto"
  CuentaBancaria.prototype.realizarTransferencia = function (cuentaDestino, monto) {
    if (monto > 0 && monto <= this.saldo) {
      this.saldo -= monto;
      cuentaDestino.realizarIngreso(monto);
      console.log(`Transferencia realizada. Nuevo saldo: ${this.saldo}€`);
    } else {
      console.log("Error: Monto inválido o insuficiente saldo para transferencia.");
    }
  };
  
  // Instanciando objetos para pruebas
  const cuentaCamilo = new CuentaBancaria("Camilo Pérez", "12345678A", 2000);
  const cuentaAlessandro = new CuentaBancaria("Alessandro Alvarez", "87654321B", 1500);
  
  // Mostrando datos iniciales
  cuentaCamilo.mostrarDatos();
  console.log("--------------------------------------------------------------");
  cuentaAlessandro.mostrarDatos();
  
  // Realizando operaciones
  cuentaAlessandro.realizarIngreso(100);
  cuentaAlessandro.realizarTransferencia(cuentaCamilo, 300);
  
  // Mostrando datos después de operaciones
  console.log("--------------------------------------------------------------");
  cuentaCamilo.mostrarDatos();
  console.log("--------------------------------------------------------------");
  cuentaAlessandro.mostrarDatos();
  