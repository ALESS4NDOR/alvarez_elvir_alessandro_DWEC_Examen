// Creamos la funcion "saludarSegunHora()"
function saludarSegunHora(){
    // Se crea una instancia de la clase Date y utilizo su metodo "getHours()" para obtener la hora actual del sistema 
    var hora = new Date().getHours();
    
    if(hora >= 5 && hora < 12){
        console.log("Buenos Dias");
        document.write("Buenos Dias");
    }else if (hora >= 12 && hora <= 18){
        console.log("Buenas Tardes");
        document.write("Buenas Tardes");
    }else{
        console.log("Buenas Noches");
        document.write("Buenas Noches");
    }
}

console.log(saludarSegunHora());

// document.write(saludarSegunHora());
