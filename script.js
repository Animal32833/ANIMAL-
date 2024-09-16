// Base de datos de 100 recetas con restricciones alimentarias
const recetas = [
    // Desayunos
    { nombre: "Avena con Frutas", calorias: 350, proteinas: 10, carbohidratos: 60, grasas: 5, restricciones: ["sin gluten", "vegetariano"], tipo: "desayuno" },
    { nombre: "Tostadas con Aguacate", calorias: 250, proteinas: 5, carbohidratos: 30, grasas: 15, restricciones: ["vegano", "sin gluten"], tipo: "desayuno" },
    { nombre: "Batido de Proteínas con Plátano", calorias: 300, proteinas: 25, carbohidratos: 30, grasas: 10, restricciones: ["sin gluten", "vegetariano"], tipo: "desayuno" },
    { nombre: "Tortilla de Claras con Espinaca", calorias: 200, proteinas: 20, carbohidratos: 5, grasas: 5, restricciones: ["sin gluten", "vegetariano"], tipo: "desayuno" },
    { nombre: "Smoothie de Fresas y Yogur", calorias: 150, proteinas: 10, carbohidratos: 30, grasas: 2, restricciones: ["sin gluten"], tipo: "desayuno" },
    { nombre: "Pan Integral con Mermelada", calorias: 180, proteinas: 6, carbohidratos: 35, grasas: 3, restricciones: ["vegetariano"], tipo: "desayuno" },
    { nombre: "Huevos Revueltos con Jamón", calorias: 300, proteinas: 20, carbohidratos: 5, grasas: 20, restricciones: ["sin gluten"], tipo: "desayuno" },
    { nombre: "Porridge de Avena con Frutos Rojos", calorias: 350, proteinas: 12, carbohidratos: 60, grasas: 5, restricciones: ["vegetariano"], tipo: "desayuno" },
    { nombre: "Yogur Griego con Miel", calorias: 250, proteinas: 15, carbohidratos: 30, grasas: 5, restricciones: ["vegetariano"], tipo: "desayuno" },
    { nombre: "Bagel Integral con Queso Crema", calorias: 400, proteinas: 15, carbohidratos: 60, grasas: 15, restricciones: ["vegetariano"], tipo: "desayuno" },

    // Almuerzos
    { nombre: "Pollo a la Parrilla con Arroz", calorias: 500, proteinas: 40, carbohidratos: 60, grasas: 10, restricciones: ["sin gluten"], tipo: "almuerzo" },
    { nombre: "Ensalada de Quinoa y Vegetales", calorias: 400, proteinas: 15, carbohidratos: 60, grasas: 10, restricciones: ["vegano", "sin gluten"], tipo: "almuerzo" },
    { nombre: "Wrap de Pollo", calorias: 450, proteinas: 35, carbohidratos: 45, grasas: 15, restricciones: ["sin gluten"], tipo: "almuerzo" },
    { nombre: "Tacos de Pavo con Guacamole", calorias: 500, proteinas: 40, carbohidratos: 50, grasas: 15, restricciones: ["sin gluten"], tipo: "almuerzo" },
    { nombre: "Bowl de Atún con Vegetales", calorias: 450, proteinas: 40, carbohidratos: 40, grasas: 15, restricciones: ["sin gluten"], tipo: "almuerzo" },
    { nombre: "Lasaña de Berenjena", calorias: 400, proteinas: 30, carbohidratos: 30, grasas: 15, restricciones: ["vegetariano"], tipo: "almuerzo" },
    { nombre: "Pechuga de Pavo con Verduras", calorias: 350, proteinas: 45, carbohidratos: 20, grasas: 10, restricciones: ["sin gluten"], tipo: "almuerzo" },
    { nombre: "Arroz Integral con Frijoles", calorias: 450, proteinas: 15, carbohidratos: 80, grasas: 5, restricciones: ["vegano", "sin gluten"], tipo: "almuerzo" },
    { nombre: "Sándwich de Pollo a la Parrilla", calorias: 500, proteinas: 35, carbohidratos: 50, grasas: 15, restricciones: ["sin gluten"], tipo: "almuerzo" },
    { nombre: "Hamburguesa de Lentejas", calorias: 400, proteinas: 20, carbohidratos: 60, grasas: 10, restricciones: ["vegano", "sin gluten"], tipo: "almuerzo" },

    // Cenas
    { nombre: "Salmón al Horno", calorias: 450, proteinas: 40, carbohidratos: 5, grasas: 30, restricciones: ["sin gluten", "pescatariano"], tipo: "cena" },
    { nombre: "Tofu Salteado con Verduras", calorias: 350, proteinas: 20, carbohidratos: 30, grasas: 10, restricciones: ["vegano", "sin gluten"], tipo: "cena" },
    { nombre: "Pechuga de Pollo Asada", calorias: 400, proteinas: 45, carbohidratos: 20, grasas: 10, restricciones: ["sin gluten"], tipo: "cena" },
    { nombre: "Ensalada César con Pollo", calorias: 350, proteinas: 30, carbohidratos: 15, grasas: 20, restricciones: ["sin gluten"], tipo: "cena" },
    { nombre: "Pizza de Coliflor", calorias: 400, proteinas: 20, carbohidratos: 40, grasas: 15, restricciones: ["vegetariano", "sin gluten"], tipo: "cena" },
    { nombre: "Lomo de Cerdo con Espárragos", calorias: 500, proteinas: 45, carbohidratos: 10, grasas: 25, restricciones: ["sin gluten"], tipo: "cena" },
    { nombre: "Tilapia al Limón", calorias: 300, proteinas: 35, carbohidratos: 5, grasas: 15, restricciones: ["sin gluten", "pescatariano"], tipo: "cena" },
    { nombre: "Espagueti de Calabacín", calorias: 350, proteinas: 20, carbohidratos: 30, grasas: 10, restricciones: ["vegano", "sin gluten"], tipo: "cena" },
    { nombre: "Pollo al Curry con Verduras", calorias: 450, proteinas: 40, carbohidratos: 20, grasas: 20, restricciones: ["sin gluten"], tipo: "cena" },
    { nombre: "Sopa de Lentejas", calorias: 300, proteinas: 20, carbohidratos: 40, grasas: 10, restricciones: ["vegano", "sin gluten"], tipo: "cena" },

    // Snacks
    { nombre: "Yogur con Almendras", calorias: 200, proteinas: 10, carbohidratos: 20, grasas: 10, restricciones: ["sin gluten", "vegetariano"], tipo: "snack" },
    { nombre: "Frutas con Mantequilla de Almendra", calorias: 250, proteinas: 5, carbohidratos: 40, grasas: 10, restricciones: ["vegano", "sin gluten"], tipo: "snack" },
    { nombre: "Barra de Proteína Casera", calorias: 300, proteinas: 25, carbohidratos: 30, grasas: 15, restricciones: ["sin gluten"], tipo: "snack" },
    { nombre: "Hummus con Palitos de Zanahoria", calorias: 150, proteinas: 5, carbohidratos: 15, grasas: 5, restricciones: ["vegano", "sin gluten"], tipo: "snack" },
    { nombre: "Tostadas de Arroz con Atún", calorias: 200, proteinas: 20, carbohidratos: 15, grasas: 5, restricciones: ["sin gluten"], tipo: "snack" },
    { nombre: "Nueces Mixtas", calorias: 250, proteinas: 5, carbohidratos: 10, grasas: 20, restricciones: ["vegano", "sin gluten"], tipo: "snack" },
    { nombre: "Batido de Proteínas", calorias: 250, proteinas: 30, carbohidratos: 20, grasas: 5, restricciones: ["sin gluten", "vegetariano"], tipo: "snack" },
    { nombre: "Galletas de Avena con Chocolate", calorias: 300, proteinas: 5, carbohidratos: 50, grasas: 10, restricciones: ["sin gluten"], tipo: "snack" },
    { nombre: "Smoothie Verde", calorias: 200, proteinas: 10, carbohidratos: 30, grasas: 5, restricciones: ["sin gluten", "vegano"], tipo: "snack" },
    { nombre: "Manzana con Mantequilla de Maní", calorias: 150, proteinas: 5, carbohidratos: 30, grasas: 10, restricciones: ["vegano", "sin gluten"], tipo: "snack" },
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
