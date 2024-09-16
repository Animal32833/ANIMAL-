// Base de recetas con restricciones alimentarias
const recetas = [
    {
        nombre: "Ensalada de Pollo y Aguacate",
        calorias: 400,
        proteinas: 30,
        carbohidratos: 20,
        grasas: 20,
        restricciones: ["sin gluten"],
        descripcion: "Una ensalada fresca con pollo a la parrilla, aguacate, y aderezo de limón.",
    },
    {
        nombre: "Batido de Proteínas con Plátano",
        calorias: 300,
        proteinas: 25,
        carbohidratos: 30,
        grasas: 10,
        restricciones: ["sin gluten", "vegetariano"],
        descripcion: "Un batido perfecto para después del entrenamiento con plátano, leche de almendra y proteína en polvo.",
    },
    {
        nombre: "Filete de Salmón con Verduras",
        calorias: 500,
        proteinas: 40,
        carbohidratos: 10,
        grasas: 30,
        restricciones: ["sin gluten", "pescatariano"],
        descripcion: "Salmón al horno acompañado de verduras al vapor.",
    },
    {
        nombre: "Tofu a la plancha con quinoa",
        calorias: 350,
        proteinas: 20,
        carbohidratos: 50,
        grasas: 10,
        restricciones: ["vegano", "sin gluten"],
        descripcion: "Tofu marinado a la plancha con quinoa y verduras al vapor.",
    },
    // Agrega más recetas según sea necesario
];

// Función para mostrar recetas basadas en calorías, restricciones y el número de comidas
function mostrarRecetasPorDia(caloriasDiarias, restriccionesUsuario, comidasPorDia) {
    const caloriasPorComida = caloriasDiarias / comidasPorDia;
    let comidas = [];
    
    for (let i = 0; i < comidasPorDia; i++) {
        const recetasFiltradas = recetas.filter(receta => {
            const cumpleRestricciones = restriccionesUsuario
                ? receta.restricciones.includes(restriccionesUsuario.toLowerCase())
                : true;
            return receta.calorias <= caloriasPorComida && cumpleRestricciones;
        });
        
        if (recetasFiltradas.length > 0) {
            // Seleccionar una receta aleatoria para cada comida
            const recetaSeleccionada = recetasFiltradas[Math.floor(Math.random() * recetasFiltradas.length)];
            comidas.push(recetaSeleccionada);
        } else {
            comidas.push({
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
    let comidasHTML = "<h3>Comidas del día:</h3><ul>";
    comidas.forEach((comida, index) => {
        comidasHTML += `
            <li><strong>Comida ${index + 1}:</strong> ${comida.nombre} (${comida.calorias} calorías)<br>
            <em>${comida.descripcion}</em><br>
            Proteínas: ${comida.proteinas}g, Carbohidratos: ${comida.carbohidratos}g, Grasas: ${comida.grasas}g
            </li>
        `;
    });
    comidasHTML += "</ul>";
    
    return comidasHTML;
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

    // Calcular BMR (Tasa Metabólica Basal) usando la fórmula de Harris-Benedict
    let bmr;
    if (genero === "masculino") {
        bmr = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * edad);
    } else {
        bmr = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * edad);
    }

    // Calcular las calorías diarias dependiendo del objetivo
    let caloriasDiarias;
    if (objetivo === "perder_peso") {
        caloriasDiarias = bmr * 1.2 - 500; // Reducir 500 calorías para perder peso
    } else if (objetivo === "ganar_masa") {
        caloriasDiarias = bmr * 1.5 + 300; // Añadir 300 calorías para ganar masa
    } else {
        caloriasDiarias = bmr * 1.2; // Mantenimiento
    }

    // Generar un plan de dieta basado en las calorías
    const planDieta = `
        <p><strong>${nombre}</strong>, según tus datos:</p>
        <p>Edad: ${edad} años, Peso: ${peso} kg, Altura: ${altura} cm.</p>
        <p>Necesitas aproximadamente <strong>${caloriasDiarias.toFixed(2)} calorías</strong> diarias para cumplir tu objetivo de <strong>${objetivo}</strong>.</p>
        <p><strong>Recomendación de macronutrientes:</strong></p>
        <ul>
            <li>Proteínas: ${(caloriasDiarias * 0.3 / 4).toFixed(2)} g</li>
            <li>Carbohidratos: ${(caloriasDiarias * 0.4 / 4).toFixed(2)} g</li>
            <li>Grasas: ${(caloriasDiarias * 0.3 / 9).toFixed(2)} g</li>
        </ul>
    `;

    // Mostrar el plan de dieta y las recetas del día
    const comidasDelDia = mostrarRecetasPorDia(caloriasDiarias, restricciones, comidasPorDia);
    document.getElementById("resultadoDieta").innerHTML = planDieta + comidasDelDia;
});
