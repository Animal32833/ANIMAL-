// Función para generar un menú semanal basado en calorías, restricciones y número de comidas
function generarMenuSemanal(caloriasDiarias, restriccionesUsuario, comidasPorDia) {
    let menuSemanal = "<h3>Menú Semanal:</h3><ul>";
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    // Generar un menú diferente para cada día
    diasSemana.forEach(dia => {
        menuSemanal += `<h4>${dia}:</h4>`;
        let caloriasPorComida = caloriasDiarias / comidasPorDia;
        let comidasDia = [];

        for (let i = 0; i < comidasPorDia; i++) {
            const recetasFiltradas = recetas.filter(receta => {
                const cumpleRestricciones = restriccionesUsuario
                    ? receta.restricciones.includes(restriccionesUsuario.toLowerCase())
                    : true;
                return receta.calorias <= caloriasPorComida && cumpleRestricciones;
            });

            if (recetasFiltradas.length > 0) {
                const recetaSeleccionada = recetasFiltradas[Math.floor(Math.random() * recetasFiltradas.length)];
                comidasDia.push(recetaSeleccionada);
            } else {
                comidasDia.push({
                    nombre: "No hay recetas disponibles para esta comida.",
                    descripcion: "Por favor ajusta tus restricciones alimentarias o cantidad de calorías.",
                    calorias: 0,
                    proteinas: 0,
                    carbohidratos: 0,
                    grasas: 0
                });
            }
        }

        // Generar HTML para las comidas del día
        comidasDia.forEach((comida, index) => {
            menuSemanal += `
                <li><strong>Comida ${index + 1}:</strong> ${comida.nombre} (${comida.calorias} calorías)<br>
                <em>${comida.descripcion}</em><br>
                Proteínas: ${comida.proteinas}g, Carbohidratos: ${comida.carbohidratos}g, Grasas: ${comida.grasas}g
                </li>
            `;
        });
    });

    menuSemanal += "</ul>";
    return menuSemanal;
}

// Función para manejar el envío del formulario
document.getElementById("nutricionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const genero = document.getElementById("genero").value;
    const objetivo = document.getElementById("objetivo").value;
    const restricciones = document.getElementById("restricciones").value; // Restricciones alimentarias
    const comidasPorDia = document.getElementById("comidas").value; // Número de comidas

    // Calcular BMR (Tasa Metabólica Basal)
    let bmr;
    if (genero === "masculino") {
        bmr = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * edad);
    } else {
        bmr = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * edad);
    }

    // Calcular las calorías diarias dependiendo del objetivo
    let caloriasDiarias;
    if (objetivo === "perder_peso") {
        caloriasDiarias = bmr * 1.2 - 500;
    } else if (objetivo === "ganar_masa") {
        caloriasDiarias = bmr * 1.5 + 300;
    } else {
        caloriasDiarias = bmr * 1.2;
    }

    // Generar el menú semanal
    const menuSemanal = generarMenuSemanal(caloriasDiarias, restricciones, comidasPorDia);
    document.getElementById("resultadoDieta").innerHTML = menuSemanal;
});
