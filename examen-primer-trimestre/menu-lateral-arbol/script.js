// Obtengo todos los elementos con la clase "arrow"
const arrows = document.querySelectorAll('.arrow');

// Para cada flecha agrego un evento click con una funcion
arrows.forEach(arrow => {
  arrow.addEventListener('click', function() {
    const subMenu = this.parentElement.nextElementSibling; 
    // parentElement --> Coge el elemento padre
    // nextElementSibling --> Coge el elemento siguiente del elemento padre

    // Cambia la visibilidad del submenú, si estan los datos ocultos se muestran y viceversa
    subMenu.classList.toggle('show');

    // Al clickar la flecha gira 90º, si la flecha no muestra los datos está en su posicion original
    this.classList.toggle('rotate-arrow');
  });
});
