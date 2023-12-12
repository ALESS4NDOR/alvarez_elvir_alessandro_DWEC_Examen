// Función para verificar si un número es primo
function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero > 1;
}

// Función para calcular la suma de números primos
function calcularSumaPrimos() {
    var suma = 0;
    for (var i = 1; i <= 15; i++) {
        var input = Number(prompt(`Ingrese el número ${i}:`)); // Con el metodo Number el prompt solo acepta valores numericos
        var numero = parseInt(input);

        // Validar que se ingrese un número válido
        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido.");
            i--; // Decrementar el contador para volver a solicitar el mismo número
            continue;
        }

        // Verificar y agregar a la suma el número si es primo
        if (esPrimo(numero)) {
            suma += numero;
        }
    }

    // Mostrar la suma de números primos
    alert(`La suma de los números primos es: ${suma}`);
}

// Llamar a la función al hacer clic
document.addEventListener("click", calcularSumaPrimos());
