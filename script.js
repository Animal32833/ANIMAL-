// Base de datos de 100 recetas con restricciones alimentarias y objetivos de nutrición
const recetas = [
    // Desayunos
    { nombre: "Avena con Frutas", calorias: 350, proteinas: 10, carbohidratos: 60, grasas: 5, restricciones: ["sin gluten", "vegetariano"], tipo: "desayuno", objetivos: ["mantener_peso", "ganar_masa"] },
    { nombre: "Tostadas con Aguacate", calorias: 250, proteinas: 5, carbohidratos: 30, grasas: 15, restricciones: ["vegano", "sin gluten"], tipo: "desayuno", objetivos: ["mantener_peso", "perder_peso"] },
    { nombre: "Batido de Proteínas con Plátano", calorias: 300, proteinas: 25, carbohidratos: 30, grasas: 10, restricciones: ["sin gluten", "vegetariano"], tipo: "desayuno", objetivos: ["ganar_masa"] },
    { nombre: "Tortilla de Claras con Espinaca", calorias: 200, proteinas: 20, carbohidratos: 5, grasas: 5, restricciones: ["sin gluten", "vegetariano"], tipo: "desayuno", objetivos: ["mantener_peso", "perder_peso"] },
    { nombre: "Smoothie de Fresas y Yogur", calorias: 150, proteinas: 10, carbohidratos: 30, grasas: 2, restricciones: ["sin gluten"], tipo: "desayuno", objetivos: ["perder_peso"] },
    { nombre: "Pan Integral con Mermelada", calorias: 180, proteinas: 6, carbohidratos: 35, grasas: 3, restricciones: ["vegetariano"], tipo: "desayuno", objetivos: ["mantener_peso"] },
    { nombre: "Huevos Revueltos con Jamón", calorias: 300, proteinas: 20, carbohidratos: 5, grasas: 20, restricciones: ["sin gluten"], tipo: "desayuno", objetivos: ["ganar_masa"] },
    { nombre: "Porridge de Avena con Frutos Rojos", calorias: 350, proteinas: 12, carbohidratos: 60, grasas: 5, restricciones: ["vegetariano"], tipo: "desayuno", objetivos: ["mantener_peso", "ganar_masa"] },
    { nombre: "Yogur Griego con Miel", calorias: 250, proteinas: 15, carbohidratos: 30, grasas: 5, restricciones: ["vegetariano"], tipo: "desayuno", objetivos: ["mantener_peso", "ganar_masa"] },
    { nombre: "Bagel Integral con Queso Crema", calorias: 400, proteinas: 15, carbohidratos: 60, grasas: 15, restricciones: ["vegetariano"], tipo: "desayuno", objetivos: ["ganar_masa"] },

    // Almuerzos
    { nombre: "Pollo a la Parrilla con Arroz", calorias: 500, proteinas: 40, carbohidratos: 60, grasas: 10, restricciones: ["sin gluten"], tipo: "almuerzo", objetivos: ["mantener_peso", "ganar_masa"] },
    { nombre: "Ensalada de Quinoa y Vegetales", calorias: 400, proteinas: 15, carbohidratos: 60, grasas: 10, restricciones: ["vegano", "sin gluten"], tipo: "almuerzo", objetivos: ["perder_peso", "mantener_peso"] },
    { nombre: "Wrap de Pollo", calorias: 450, proteinas: 35, carbohidratos: 45, grasas: 15, restricciones: ["sin gluten"], tipo: "almuerzo", objetivos: ["mantener_peso", "ganar_masa"] },
    { nombre: "Tacos de Pavo con Guacamole", calorias: 500, proteinas: 40, carbohidratos: 50, grasas: 15, restricciones: ["sin gluten"], tipo: "almuerzo", objetivos: ["ganar_masa"] },
    { nombre: "Bowl de Atún con Vegetales", calorias: 450, proteinas: 40, carbohidratos: 40, grasas: 15, restricciones: ["sin gluten"], tipo: "almuerzo", objetivos: ["mantener_peso", "ganar_masa"] },
    { nombre: "Lasaña de Berenjena", calorias: 400, proteinas: 30, carbohidratos: 30, grasas: 15, restricciones: ["vegetariano"], tipo: "almuerzo", objetivos: ["perder_peso", "mantener_peso"] },
    { nombre: "Pechuga de Pavo con Verduras", calorias: 350, proteinas: 45, carbohidratos: 20, grasas: 10, restricciones: ["sin gluten"], tipo: "almuerzo", objetivos: ["perder_peso", "mantener_peso"] },
    { nombre: "Arroz Integral con Frijoles", calorias: 450, proteinas: 15, carbohidratos: 80, grasas: 5, restricciones: ["vegano", "sin gluten"], tipo: "almuerzo", objetivos: ["mantener_peso"] },
    { nombre: "Sándwich de Pollo a la Parrilla", calorias: 500, proteinas: 35, carbohidratos: 50, grasas: 15, restricciones: ["sin gluten"], tipo: "almuerzo", objetivos: ["mantener_peso", "ganar_masa"] },
    { nombre: "Hamburguesa de Lentejas", calorias: 400, proteinas: 20, carbohidratos: 60, grasas: 10, restricciones: ["vegano", "sin gluten"], tipo: "almuerzo", objetivos: ["mantener_peso", "perder_peso"] },

    // Cenas
    { nombre: "Salmón al Horno", calorias: 450, proteinas: 40, carbohidratos: 5, grasas: 30, restricciones: ["sin gluten", "pescatariano"], tipo: "cena", objetivos: ["mantener_peso", "ganar_masa"] },
    { nombre: "Tofu Salteado con Verduras", calorias: 350, proteinas: 20, carbohidratos: 30, grasas: 10, restricciones: ["vegano", "sin gluten"], tipo: "cena", objetivos: ["perder_peso", "mantener_peso"] },
    { nombre: "Pechuga de Pollo Asada", calorias: 400, proteinas: 45, carbohidratos: 20, grasas: 10, restricciones: ["sin gluten"], tipo: "cena", objetivos: ["mantener_peso", "ganar_masa"] },
    { nombre: "Ensalada César con Pollo", calorias: 350, proteinas: 30, carbohidratos: 15, grasas: 20, restricciones: ["sin gluten"], tipo: "cena", objetivos: ["mantener_peso"] },
    { nombre: "Pizza de Coliflor", calorias: 400, proteinas: 20, carbohidratos: 40, grasas: 15, restricciones: ["vegetariano", "sin gluten"], tipo: "cena", objetivos: ["mantener_peso", "perder_peso"] },
    { nombre: "Lomo de Cerdo con Espárragos", calorias: 500, proteinas: 45, carbohidratos: 10, grasas: 25, restricciones: ["sin gluten"], tipo: "cena", objetivos: ["ganar_masa"] },
    { nombre: "Tilapia al Limón", calorias: 300, proteinas: 35, carbohidratos: 5, grasas: 15, restricciones: ["sin gluten", "pescatariano"],

];

// Función para mostrar opciones de menú diario y permitir la selección de cada comida
function mostrarOpcionesDeComida(caloriasDiarias, restriccionesUsuario, comidasPorDia, diaSeleccionado) {
    const caloriasPorComida = caloriasDiarias / comidasPorDia;
    let opcionesComidas = `<h3>Opciones para ${diaSeleccionado}:</h3>`;

    for (let i = 0; i < comidasPorDia; i++) {
        const recetasFiltradas = recetas.filter(receta => {
            const cumpleRestricciones = restriccionesUsuario
                ? receta.restricciones.includes(restriccionesUsuario.toLowerCase())
                : true;
            return receta.calorias <= caloriasPorComida && cumpleRestricciones;
        });

        opcionesComidas += `<label>Comida ${i + 1}:</label><select id="comida_${diaSeleccionado}_${i}">`;

        // Mostrar múltiples opciones para cada comida
        recetasFiltradas.forEach(receta => {
            opcionesComidas += `<option value="${receta.nombre}">
                ${receta.nombre} (${receta.calorias} calorías)
            </option>`;
        });

        opcionesComidas += `</select><br>`;
    }

    return opcionesComidas;
}

// Función para generar el menú final basado en las elecciones del usuario
function generarMenuFinal(caloriasDiarias, comidasPorDia, diaSeleccionado) {
    let menuFinal = "<h3>Tu Menú Final:</h3><ul>";

    for (let i = 0; i < comidasPorDia; i++) {
        const comidaSeleccionada = document.getElementById(`comida_${diaSeleccionado}_${i}`).value;
        menuFinal += `<li>Comida ${i + 1}: ${comidaSeleccionada}</li>`;
    }

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
    const diaSeleccionado = document.getElementById("dia").value; // Día seleccionado

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

    // Mostrar opciones de comida para el día seleccionado
    const opcionesDeComida = mostrarOpcionesDeComida(caloriasDiarias, restricciones, comidasPorDia, diaSeleccionado);
    document.getElementById("opcionesComida").innerHTML = opcionesDeComida;

    // Escuchar el evento de generación del menú final cuando el usuario haga sus selecciones
    document.getElementById("generarMenuFinal").addEventListener("click", function() {
        const menuFinal = generarMenuFinal(caloriasDiarias, comidasPorDia, diaSeleccionado);
        document.getElementById("resultadoDieta").innerHTML = menuFinal;
    });
});
