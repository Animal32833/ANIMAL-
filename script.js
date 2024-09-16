document.getElementById("nutricionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const genero = document.getElementById("genero").value;
    const objetivo = document.getElementById("objetivo").value;

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

    // Mostrar el resultado
    document.getElementById("resultadoDieta").innerHTML = planDieta;
});
