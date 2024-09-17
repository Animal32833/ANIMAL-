// Datos de menú por día
const menu = {
    lunes: [
        {nombre: "Desayuno: Avena con frutas", descripcion: "Avena con manzana y frutos rojos", calorias: 350, proteinas: 12, carbohidratos: 55, grasas: 8, ingredientes: [{nombre: "Avena", gramos: 50}, {nombre: "Manzana", gramos: 100}]},
        {nombre: "Almuerzo: Pollo con ensalada", descripcion: "Pechuga de pollo a la plancha con ensalada mixta", calorias: 450, proteinas: 30, carbohidratos: 20, grasas: 15},
        // Otros platos...
    ],
    // Otros días...
};

// Función para generar el menú personalizado según el día seleccionado
function generarMenu() {
    const dia = document.getElementById('dia-semana').value;
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = ''; // Limpiar el contenido anterior

    if (menu[dia]) {
        menu[dia].forEach(plato => {
            const platoHTML = `
                <div class="comida">
                    <h3>${plato.nombre}</h3>
                    <p>${plato.descripcion}</p>
                    <p>Calorías: ${plato.calorias}</p>
                    <p>Proteínas: ${plato.proteinas}g</p>
                    <p>Carbohidratos: ${plato.carbohidratos}g</p>
                    <p>Grasas: ${plato.grasas}g</p>
                    <p>Ingredientes: ${plato.ingredientes.map(i => i.nombre + " (" + i.gramos + "g)").join(', ')}</p>
                </div>
            `;
            menuContainer.innerHTML += platoHTML;
        });
    } else {
        menuContainer.innerHTML = "<p>No hay menú disponible para este día.</p>";
    }
}

// Validación del formulario
document.getElementById("user-form").addEventListener("submit", function(event) {
    const dni = document.getElementById("dni").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const edad = document.getElementById("edad").value;
    const objetivo = document.getElementById("objetivo").value;

    if (!dni || !peso || !altura || !edad) {
        alert("Por favor, complete todos los campos.");
        event.preventDefault();
    } else {
        alert("Datos guardados correctamente.");
    }
});
