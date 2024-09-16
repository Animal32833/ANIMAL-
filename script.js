// Base de recetas con restricciones alimentarias
const recetas = [
    {
        nombre: "Ensalada de Pollo y Aguacate",
        calorias: 400,
        proteinas: 30,
        carbohidratos: 20,
        grasas: 20,
        restricciones: ["sin gluten"], // Apta para celíacos
        descripcion: "Una ensalada fresca con pollo a la parrilla, aguacate, y aderezo de limón.",
    },
    {
        nombre: "Batido de Proteínas con Plátano",
        calorias: 300,
        proteinas: 25,
        carbohidratos: 30,
        grasas: 10,
        restricciones: ["sin gluten", "vegetariano"], // Apto para celíacos y vegetarianos
        descripcion: "Un batido perfecto para después del entrenamiento con plátano, leche de almendra y proteína en polvo.",
    },
    {
        nombre: "Filete de Salmón con Verduras",
        calorias: 500,
        proteinas: 40,
        carbohidratos: 10,
        grasas: 30,
        restricciones: ["sin gluten", "pescatariano"], // Apto para celíacos y pescatarianos
        descripcion: "Salmón al horno acompañado de verduras al vapor, perfecto para una cena saludable.",
    },
    {
        nombre: "Tofu a la plancha con quinoa",
        calorias: 350,
        proteinas: 20,
        carbohidratos: 50,
        grasas: 10,
        restricciones: ["vegano", "sin gluten"], // Apto para veganos y celíacos
        descripcion: "Tofu marinado a la plancha con quinoa y verduras al vapor.",
    },
    // Agrega más recetas según sea necesario
];

// Función para mostrar recetas basadas en calorías y restricciones alimentarias
function mostrarRecetas(caloriasDiarias, restriccionesUsuario) {
    const recetasFiltradas = recetas.filter(receta => {
        // Filtrar las recetas que se ajusten a las restricciones del usuario
        const cumpleRestricciones = restriccionesUsuario
            ? receta.restricciones.includes(restriccionesUsuario.toLowerCase())
            : true;
        
        return receta.calorias <= caloriasDiarias / 3 && cumpleRestricciones;
    });

    // Si hay recetas disponibles, las mostramos
    if (recetasFiltradas.length > 0) {
        let recetasHTML = "<h3>Recetas sugeridas:</h3><ul>";
        recetasFiltradas.forEach(receta => {
            recetasHTML += `
                <li>
                    <strong>${receta.nombre}</strong> - ${receta.calorias} calorías<br>
                    <em>${receta.descripcion}</em><br>
                    Proteínas: ${receta.proteinas}g, Carbohidratos: ${receta.carbohidratos}g, Grasas: ${receta.grasas}g
                </li>
            `;
        });
        recetasHTML += "</ul>";
        return recetasHTML;
    } else {
        return "<p>No se encontraron recetas que cumplan con tus restricciones alimentarias.</p>";
    }
}

// Función para generar el plan de dieta y recetas
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

    // Mostrar el plan de dieta y las recetas sugeridas
    const recetasSugeridas = mostrarRecetas(caloriasDiarias, restricciones);
    document.getElementById("resultadoDieta").innerHTML = planDieta + recetasSugeridas;
});
