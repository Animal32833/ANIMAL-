// Función para mostrar opciones de menú diario y permitir la selección de cada comida
function mostrarOpcionesDeComida(caloriasDiarias, restriccionesUsuario, comidasPorDia) {
    const caloriasPorComida = caloriasDiarias / comidasPorDia;
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    let opcionesComidas = "";

    // Generar opciones para cada día
    diasSemana.forEach(dia => {
        opcionesComidas += `<h4>${dia}:</h4>`;

        for (let i = 0; i < comidasPorDia; i++) {
            const recetasFiltradas = recetas.filter(receta => {
                const cumpleRestricciones = restriccionesUsuario
                    ? receta.restricciones.includes(restriccionesUsuario.toLowerCase())
                    : true;
                return receta.calorias <= caloriasPorComida && cumpleRestricciones;
            });

            opcionesComidas += `<label>Comida ${i + 1}:</label><select id="comida_${dia}_${i}">`;

            // Mostrar múltiples opciones para cada comida
            recetasFiltradas.forEach(receta => {
                opcionesComidas += `<option value="${receta.nombre}">
                    ${receta.nombre} (${receta.calorias} calorías)
                </option>`;
            });

            opcionesComidas += `</select><br>`;
        }
    });

    return opcionesComidas;
}

// Función para generar el menú final basado en las elecciones del usuario
function generarMenuFinal(caloriasDiarias, comidasPorDia) {
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    let menuFinal = "<h3>Tu Menú Final:</h3><ul>";

    diasSemana.forEach(dia => {
        menuFinal += `<h4>${dia}:</h4>`;
        for (let i = 0; i < comidasPorDia; i++) {
            const comidaSeleccionada = document.getElementById(`comida_${dia}_${i}`).value;
            menuFinal += `<li>Comida ${i + 1}: ${comidaSeleccionada}</li>`;
        }
    });

    menuFinal += "</ul>";
    return menuFinal;
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

    // Mostrar opciones de comida para cada día
    const opcionesDeComida = mostrarOpcionesDeComida(caloriasDiarias, restricciones, comidasPorDia);
    document.getElementById("opcionesComida").innerHTML = opcionesDeComida;

    // Escuchar el evento de generación del menú final cuando el usuario haga sus selecciones
    document.getElementById("generarMenuFinal").addEventListener("click", function() {
        const menuFinal = generarMenuFinal(caloriasDiarias, comidasPorDia);
        document.getElementById("resultadoDieta").innerHTML = menuFinal;
    });
});
