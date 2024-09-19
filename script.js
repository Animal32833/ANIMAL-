document.getElementById('menu-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturar los datos del formulario
    const edad = parseInt(document.getElementById('edad').value);
    const altura = parseInt(document.getElementById('altura').value); // en cm
    const peso = parseFloat(document.getElementById('peso').value); // en kg
    const sexo = document.getElementById('sexo').value;
    const actividad = document.getElementById('actividad').value;
    const objetivo = document.getElementById('objetivo').value; // Objetivo del usuario
    const restricciones = Array.from(document.querySelectorAll('input[name="restriccion"]:checked'))
                               .map(checkbox => checkbox.value);
    const dia = document.getElementById('dia').value;

    // Fórmula para calcular el metabolismo basal (MB):
    let caloriasDiarias;
    if (sexo === "masculino") {
        caloriasDiarias = 10 * peso + 6.25 * altura - 5 * edad + 5; // Fórmula Harris-Benedict para hombres
    } else {
        caloriasDiarias = 10 * peso + 6.25 * altura - 5 * edad - 161; // Fórmula Harris-Benedict para mujeres
    }

    // Ajuste de calorías según la actividad física:
    switch (actividad) {
        case 'musculacion':
            caloriasDiarias *= 1.55; // Actividad moderada
            break;
        case 'crossfit':
            caloriasDiarias *= 1.75; // Actividad intensa
            break;
        case 'funcional':
            caloriasDiarias *= 1.4; // Actividad ligera
            break;
    }

    // Ajuste de calorías según el objetivo
    if (objetivo === 'perder') {
        caloriasDiarias *= 0.85; // Reducimos calorías para pérdida de peso
    } else if (objetivo === 'ganar') {
        caloriasDiarias *= 1.15; // Aumentamos calorías para ganar masa muscular
    }

    // Distribución de macronutrientes (40% carbohidratos, 30% proteínas, 30% grasas)
    const carbohidratosDiarios = (caloriasDiarias * 0.4) / 4; // 4 calorías por gramo de carbohidrato
    const proteinasDiarias = (caloriasDiarias * 0.3) / 4; // 4 calorías por gramo de proteína
    const grasasDiarias = (caloriasDiarias * 0.3) / 9; // 9 calorías por gramo de grasa

    // Dividimos los macronutrientes por comida: desayuno, almuerzo, cena
    const carbohidratosDesayuno = carbohidratosDiarios * 0.3;
    const carbohidratosAlmuerzo = carbohidratosDiarios * 0.4;
    const carbohidratosCena = carbohidratosDiarios * 0.3;

    const proteinasDesayuno = proteinasDiarias * 0.3;
    const proteinasAlmuerzo = proteinasDiarias * 0.4;
    const proteinasCena = proteinasDiarias * 0.3;

    const grasasDesayuno = grasasDiarias * 0.3;
    const grasasAlmuerzo = grasasDiarias * 0.4;
    const grasasCena = grasasDiarias * 0.3;

    // Menú inicial con formato HTML
    let menu = `<strong>Menú personalizado para ${dia}:</strong><br>`;
    menu += `<p><strong>Edad:</strong> ${edad}, <strong>Altura:</strong> ${altura}cm, <strong>Peso:</strong> ${peso}kg, <strong>Sexo:</strong> ${sexo}</p>`;
    menu += `<p><strong>Actividad física:</strong> ${actividad}</p>`;
    menu += `<p><strong>Objetivo:</strong> ${objetivo === 'perder' ? 'Perder peso' : objetivo === 'ganar' ? 'Ganar masa muscular' : 'Mantener peso'}</p>`;
    menu += `<p><strong>Calorías diarias estimadas:</strong> ${Math.round(caloriasDiarias)} kcal</p>`;
    menu += `<p><strong>Distribución de macronutrientes:</strong> ${Math.round(carbohidratosDiarios)}g de carbohidratos, ${Math.round(proteinasDiarias)}g de proteínas, ${Math.round(grasasDiarias)}g de grasas</p>`;
    menu += `<p><strong>Restricciones alimenticias:</strong> ${restricciones.length ? restricciones.join(', ') : 'Ninguna'}</p>`;

    // Menú por día de la semana con alimentos específicos
    switch (dia) {
        case 'lunes':
            menu += generarMenuDiaLunes(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, objetivo);
            break;
        case 'martes':
            menu += generarMenuDiaMartes(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, objetivo);
            break;
        case 'miercoles':
            menu += generarMenuDiaMiercoles(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, objetivo);
            break;
        case 'jueves':
            menu += generarMenuDiaJueves(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, objetivo);
            break;
        case 'viernes':
            menu += generarMenuDiaViernes(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, objetivo);
            break;
        case 'sabado':
            menu += generarMenuDiaSabado(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, objetivo);
            break;
        case 'domingo':
            menu += generarMenuDiaDomingo(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, objetivo);
            break;
    }

    // Mostrar el resultado con formato HTML
    document.getElementById('resultado-menu').innerHTML = menu;
});

// Funciones para generar menús específicos de cada día con más variedad y ajuste de macronutrientes y restricciones alimenticias

function generarMenuDiaLunes(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, objetivo) {
    let menuLunes = '<h3>Menú del lunes:</h3><ul>';
    // Variaciones en función de las restricciones alimenticias
    if (restricciones.includes('vegano')) {
        menuLunes += `<li>Desayuno: Tostadas integrales con aguacate y batido de proteínas veganas. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuLunes += `<li>Almuerzo: Ensalada de quinoa con tofu y vegetales. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuLunes += `<li>Cena: Hamburguesa de lentejas con ensalada de espinacas. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('vegetariano')) {
        menuLunes += `<li>Desayuno: Avena con frutas y nueces. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuLunes += `<li>Almuerzo: Ensalada de garbanzos con arroz integral. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuLunes += `<li>Cena: Tortilla de espinacas y champiñones. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('celiaco')) {
        menuLunes += `<li>Desayuno: Yogur sin gluten con avena libre de gluten y frutos rojos. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuLunes += `<li>Almuerzo: Pechuga de pollo con quinoa y brócoli. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuLunes += `<li>Cena: Salmón con vegetales al vapor sin gluten. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('sinAzucar')) {
        menuLunes += `<li>Desayuno: Avena sin azúcar con frutas frescas. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuLunes += `<li>Almuerzo: Pollo a la plancha con ensalada de hojas verdes sin aderezo azucarado. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuLunes += `<li>Cena: Pescado al horno con verduras al vapor. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else {
        // Si no hay restricciones alimenticias
        if (objetivo === 'perder') {
            menuLunes += `<li>Desayuno: Avena con frutos rojos y leche de almendras. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuLunes += `<li>Almuerzo: Ensalada de pollo a la plancha con quinoa y espinacas. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuLunes += `<li>Cena: Pescado al horno con verduras al vapor. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        } else if (objetivo === 'mantener') {
            menuLunes += `<li>Desayuno: Avena con frutas frescas y frutos secos. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuLunes += `<li>Almuerzo: Pollo a la plancha con arroz integral y brócoli. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuLunes += `<li>Cena: Pescado al horno con patatas asadas. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        } else if (objetivo === 'ganar') {
            menuLunes += `<li>Desayuno: Tostadas integrales con aguacate y huevo. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuLunes += `<li>Almuerzo: Pechuga de pollo a la plancha con pasta integral y espinacas. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuLunes += `<li>Cena: Salmón con quinoa y verduras salteadas. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        }
    }
    menuLunes += '</ul>';
    return menuLunes;
}

function generarMenuDiaMartes(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, objetivo) {
    let menuMartes = '<h3>Menú del martes:</h3><ul>';
    if (restricciones.includes('vegano')) {
        menuMartes += `<li>Desayuno: Batido de proteínas veganas con avena y plátano. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuMartes += `<li>Almuerzo: Ensalada de lentejas con tofu y espinacas. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuMartes += `<li>Cena: Hamburguesa vegana con quinoa y aguacate. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('vegetariano')) {
        menuMartes += `<li>Desayuno: Yogur con frutos secos y avena. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuMartes += `<li>Almuerzo: Tortilla de espinacas con arroz integral. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuMartes += `<li>Cena: Tofu salteado con verduras. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('celiaco')) {
        menuMartes += `<li>Desayuno: Avena sin gluten con nueces y frutas. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuMartes += `<li>Almuerzo: Pollo a la plancha con quinoa y ensalada. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuMartes += `<li>Cena: Pescado al horno con vegetales sin gluten. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('sinAzucar')) {
        menuMartes += `<li>Desayuno: Tostadas integrales sin azúcar con mantequilla de maní. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuMartes += `<li>Almuerzo: Pollo con ensalada verde sin aderezo. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuMartes += `<li>Cena: Pescado con verduras al vapor. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else {
        // Sin restricciones alimenticias
        if (objetivo === 'perder') {
            menuMartes += `<li>Desayuno: Yogur bajo en grasa con avena y frutos secos. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuMartes += `<li>Almuerzo: Pollo a la plancha con ensalada de espinacas. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuMartes += `<li>Cena: Pescado al horno con espárragos. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        } else if (objetivo === 'mantener') {
            menuMartes += `<li>Desayuno: Avena con frutas y yogur. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuMartes += `<li>Almuerzo: Pollo a la plancha con arroz integral y verduras. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuMartes += `<li>Cena: Ensalada de quinoa con salmón a la plancha. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        } else if (objetivo === 'ganar') {
            menuMartes += `<li>Desayuno: Tostadas con mantequilla de maní y plátano. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuMartes += `<li>Almuerzo: Pollo con pasta integral y verduras. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuMartes += `<li>Cena: Carne a la parrilla con arroz integral. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        }
    }
    menuMartes += '</ul>';
    return menuMartes;
}


function generarMenuDiaMiercoles(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, objetivo) {
    let menuMiercoles = '<h3>Menú del miércoles:</h3><ul>';
    if (restricciones.includes('vegano')) {
        menuMiercoles += `<li>Desayuno: Batido de espinacas y proteína vegana. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuMiercoles += `<li>Almuerzo: Ensalada de garbanzos con espinacas. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuMiercoles += `<li>Cena: Tofu a la plancha con arroz integral. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('vegetariano')) {
        menuMiercoles += `<li>Desayuno: Avena con leche de almendras y frutas frescas. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuMiercoles += `<li>Almuerzo: Tortilla de espinacas con ensalada de tomate. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuMiercoles += `<li>Cena: Pimientos rellenos de quinoa. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('celiaco')) {
        menuMiercoles += `<li>Desayuno: Yogur sin gluten con avena libre de gluten y frutos secos. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuMiercoles += `<li>Almuerzo: Pollo con ensalada de hojas verdes sin gluten. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuMiercoles += `<li>Cena: Pescado al horno con vegetales sin gluten. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('sinAzucar')) {
        menuMiercoles += `<li>Desayuno: Tostadas sin azúcar con aguacate y huevo. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuMiercoles += `<li>Almuerzo: Pollo a la plancha con ensalada de espinacas. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuMiercoles += `<li>Cena: Pescado al horno con espárragos. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else {
        // Sin restricciones alimenticias
        if (objetivo === 'perder') {
            menuMiercoles += `<li>Desayuno: Avena con frutos rojos y leche de almendras. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuMiercoles += `<li>Almuerzo: Pollo a la plancha con ensalada verde. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuMiercoles += `<li>Cena: Pescado al horno con verduras. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        } else if (objetivo === 'mantener') {
            menuMiercoles += `<li>Desayuno: Yogur con avena y frutas frescas. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuMiercoles += `<li>Almuerzo: Pollo con pasta integral y espinacas. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuMiercoles += `<li>Cena: Ensalada de quinoa con salmón a la parrilla. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        } else if (objetivo === 'ganar') {
            menuMiercoles += `<li>Desayuno: Tostadas con mantequilla de maní y plátano. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuMiercoles += `<li>Almuerzo: Pollo a la parrilla con arroz integral. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuMiercoles += `<li>Cena: Carne a la parrilla con verduras. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        }
    }
    menuMiercoles += '</ul>';
    return menuMiercoles;
}


function generarMenuDiaJueves(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, objetivo) {
    let menuJueves = '<h3>Menú del jueves:</h3><ul>';
    if (restricciones.includes('vegano')) {
        menuJueves += `<li>Desayuno: Tostadas integrales con aguacate y batido de proteínas veganas. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuJueves += `<li>Almuerzo: Ensalada de garbanzos con espinacas y aguacate. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuJueves += `<li>Cena: Hamburguesa de lentejas con ensalada verde. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('vegetariano')) {
        menuJueves += `<li>Desayuno: Avena con frutos secos y yogur. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuJueves += `<li>Almuerzo: Tortilla de espinacas con ensalada de quinoa. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuJueves += `<li>Cena: Pimientos rellenos de arroz integral. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('celiaco')) {
        menuJueves += `<li>Desayuno: Yogur sin gluten con avena libre de gluten y frutos rojos. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuJueves += `<li>Almuerzo: Pollo a la plancha con ensalada de espinacas. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuJueves += `<li>Cena: Pescado con vegetales sin gluten. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('sinAzucar')) {
        menuJueves += `<li>Desayuno: Tostadas sin azúcar con aguacate y huevo. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuJueves += `<li>Almuerzo: Pollo a la plancha con ensalada verde. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuJueves += `<li>Cena: Pescado al horno con espárragos. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else {
        if (objetivo === 'perder') {
            menuJueves += `<li>Desayuno: Avena con frutos rojos y leche de almendras. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuJueves += `<li>Almuerzo: Pollo a la plancha con ensalada verde. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuJueves += `<li>Cena: Pescado al horno con verduras al vapor. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        } else if (objetivo === 'mantener') {
            menuJueves += `<li>Desayuno: Yogur con avena y frutas frescas. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuJueves += `<li>Almuerzo: Pollo con pasta integral y espinacas. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuJueves += `<li>Cena: Ensalada de quinoa con salmón a la parrilla. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        } else if (objetivo === 'ganar') {
            menuJueves += `<li>Desayuno: Tostadas con mantequilla de maní y plátano. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuJueves += `<li>Almuerzo: Pollo con arroz integral y ensalada verde. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuJueves += `<li>Cena: Carne a la parrilla con arroz integral. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        }
    }
    menuJueves += '</ul>';
    return menuJueves;
}


function generarMenuDiaViernes(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, objetivo) {
    let menuViernes = '<h3>Menú del viernes:</h3><ul>';
    if (restricciones.includes('vegano')) {
        menuViernes += `<li>Desayuno: Avena con leche de almendras y frutas frescas. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuViernes += `<li>Almuerzo: Ensalada de quinoa con tofu y espinacas. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuViernes += `<li>Cena: Hamburguesa vegana con batata al horno. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('vegetariano')) {
        menuViernes += `<li>Desayuno: Yogur con frutas frescas y nueces. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuViernes += `<li>Almuerzo: Tortilla de espinacas con ensalada de arroz integral. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuViernes += `<li>Cena: Ensalada de garbanzos con espinacas. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('celiaco')) {
        menuViernes += `<li>Desayuno: Tostadas sin gluten con aguacate y tomate. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuViernes += `<li>Almuerzo: Pollo con ensalada de espinacas. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuViernes += `<li>Cena: Pescado al horno con verduras al vapor. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('sinAzucar')) {
        menuViernes += `<li>Desayuno: Avena sin azúcar con frutas frescas. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuViernes += `<li>Almuerzo: Pollo con ensalada de hojas verdes sin aderezo azucarado. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuViernes += `<li>Cena: Pescado con vegetales al vapor. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else {
        if (objetivo === 'perder') {
            menuViernes += `<li>Desayuno: Avena con frutos rojos y leche de almendras. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuViernes += `<li>Almuerzo: Pollo a la plancha con ensalada verde. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuViernes += `<li>Cena: Pescado al horno con verduras al vapor. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        } else if (objetivo === 'mantener') {
            menuViernes += `<li>Desayuno: Yogur con avena y frutas frescas. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuViernes += `<li>Almuerzo: Pollo con pasta integral y espinacas. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuViernes += `<li>Cena: Ensalada de quinoa con salmón a la parrilla. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        } else if (objetivo === 'ganar') {
            menuViernes += `<li>Desayuno: Tostadas con mantequilla de maní y plátano. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuViernes += `<li>Almuerzo: Pollo con arroz integral y ensalada verde. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuViernes += `<li>Cena: Carne a la parrilla con arroz integral. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        }
    }
    menuViernes += '</ul>';
    return menuViernes;
}


function generarMenuDiaSabado(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, objetivo) {
    let menuSabado = '<h3>Menú del sábado:</h3><ul>';
    if (restricciones.includes('vegano')) {
        menuSabado += `<li>Desayuno: Batido de proteínas veganas con avena. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuSabado += `<li>Almuerzo: Ensalada de lentejas con quinoa. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuSabado += `<li>Cena: Hamburguesa vegana con ensalada de espinacas. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('vegetariano')) {
        menuSabado += `<li>Desayuno: Yogur con avena y frutas frescas. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuSabado += `<li>Almuerzo: Tortilla de espinacas con ensalada de tomate. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuSabado += `<li>Cena: Pimientos rellenos de arroz integral. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('celiaco')) {
        menuSabado += `<li>Desayuno: Tostadas sin gluten con aguacate. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuSabado += `<li>Almuerzo: Pollo con ensalada de espinacas y quinoa. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuSabado += `<li>Cena: Pescado al horno con vegetales sin gluten. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('sinAzucar')) {
        menuSabado += `<li>Desayuno: Avena sin azúcar con frutas frescas. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuSabado += `<li>Almuerzo: Pollo con ensalada de hojas verdes sin aderezo. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuSabado += `<li>Cena: Pescado al horno con verduras al vapor. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else {
        if (objetivo === 'perder') {
            menuSabado += `<li>Desayuno: Avena con frutos rojos y leche de almendras. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuSabado += `<li>Almuerzo: Pollo a la plancha con ensalada verde. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuSabado += `<li>Cena: Pescado al horno con verduras al vapor. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        } else if (objetivo === 'mantener') {
            menuSabado += `<li>Desayuno: Yogur con avena y frutas frescas. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuSabado += `<li>Almuerzo: Pollo con pasta integral y espinacas. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuSabado += `<li>Cena: Ensalada de quinoa con salmón a la parrilla. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        } else if (objetivo === 'ganar') {
            menuSabado += `<li>Desayuno: Tostadas con mantequilla de maní y plátano. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuSabado += `<li>Almuerzo: Pollo con arroz integral y ensalada verde. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuSabado += `<li>Cena: Carne a la parrilla con arroz integral. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        }
    }
    menuSabado += '</ul>';
    return menuSabado;
}


function generarMenuDiaDomingo(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, objetivo) {
    let menuDomingo = '<h3>Menú del domingo:</h3><ul>';
    if (restricciones.includes('vegano')) {
        menuDomingo += `<li>Desayuno: Tostadas con aguacate y batido de proteínas veganas. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuDomingo += `<li>Almuerzo: Ensalada de lentejas con espinacas y aguacate. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuDomingo += `<li>Cena: Hamburguesa de lentejas con quinoa. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('vegetariano')) {
        menuDomingo += `<li>Desayuno: Avena con leche de almendras y frutos secos. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuDomingo += `<li>Almuerzo: Tortilla de espinacas con ensalada de quinoa. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuDomingo += `<li>Cena: Pimientos rellenos de arroz integral. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('celiaco')) {
        menuDomingo += `<li>Desayuno: Tostadas sin gluten con aguacate. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuDomingo += `<li>Almuerzo: Pollo a la plancha con ensalada verde y quinoa. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuDomingo += `<li>Cena: Pescado al horno con vegetales sin gluten. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else if (restricciones.includes('sinAzucar')) {
        menuDomingo += `<li>Desayuno: Avena sin azúcar con frutas frescas. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
        menuDomingo += `<li>Almuerzo: Pollo con ensalada de hojas verdes sin aderezo azucarado. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
        menuDomingo += `<li>Cena: Pescado al horno con verduras al vapor. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
    } else {
        if (objetivo === 'perder') {
            menuDomingo += `<li>Desayuno: Avena con frutos rojos y leche de almendras. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuDomingo += `<li>Almuerzo: Pollo a la plancha con ensalada verde. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuDomingo += `<li>Cena: Pescado al horno con verduras al vapor. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        } else if (objetivo === 'mantener') {
            menuDomingo += `<li>Desayuno: Yogur con avena y frutas frescas. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuDomingo += `<li>Almuerzo: Pollo con pasta integral y espinacas. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuDomingo += `<li>Cena: Ensalada de quinoa con salmón a la parrilla. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        } else if (objetivo === 'ganar') {
            menuDomingo += `<li>Desayuno: Tostadas con mantequilla de maní y plátano. (Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Proteínas: ${Math.round(proteinasDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g)</li>`;
            menuDomingo += `<li>Almuerzo: Pollo con arroz integral y ensalada verde. (Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g)</li>`;
            menuDomingo += `<li>Cena: Carne a la parrilla con arroz integral. (Carbohidratos: ${Math.round(carbohidratosCena)}g, Proteínas: ${Math.round(proteinasCena)}g, Grasas: ${Math.round(grasasCena)}g)</li>`;
        }
    }
    menuDomingo += '</ul>';
    return menuDomingo;
}

