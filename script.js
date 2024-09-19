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

    // Menú inicial con base en los macronutrientes
    let menu = `<strong>Menú personalizado para ${dia}:</strong><br>`;
    menu += `<p><strong>Edad:</strong> ${edad}, <strong>Altura:</strong> ${altura}cm, <strong>Peso:</strong> ${peso}kg, <strong>Sexo:</strong> ${sexo}</p>`;
    menu += `<p><strong>Actividad física:</strong> ${actividad}</p>`;
    menu += `<p><strong>Objetivo:</strong> ${objetivo === 'perder' ? 'Perder peso' : objetivo === 'ganar' ? 'Ganar masa muscular' : 'Mantener peso'}</p>`;
    menu += `<p><strong>Calorías diarias estimadas:</strong> ${Math.round(caloriasDiarias)} kcal</p>`;
    menu += `<p><strong>Distribución de macronutrientes:</strong> ${Math.round(carbohidratosDiarios)}g de carbohidratos, ${Math.round(proteinasDiarias)}g de proteínas, ${Math.round(grasasDiarias)}g de grasas</p>`;
    menu += `<p><strong>Restricciones alimenticias:</strong> ${restricciones.length ? restricciones.join(', ') : 'Ninguna'}</p>`;

    // Menú por día de la semana
    switch (dia) {
        case 'lunes':
            menu += generarMenuDiaLunes(carbohidratosDiarios, proteinasDiarias, grasasDiarias, restricciones, objetivo);
            break;
        case 'martes':
            menu += generarMenuDiaMartes(carbohidratosDiarios, proteinasDiarias, grasasDiarias, restricciones, objetivo);
            break;
        case 'miercoles':
            menu += generarMenuDiaMiercoles(carbohidratosDiarios, proteinasDiarias, grasasDiarias, restricciones, objetivo);
            break;
        case 'jueves':
            menu += generarMenuDiaJueves(carbohidratosDiarios, proteinasDiarias, grasasDiarias, restricciones, objetivo);
            break;
        case 'viernes':
            menu += generarMenuDiaViernes(carbohidratosDiarios, proteinasDiarias, grasasDiarias, restricciones, objetivo);
            break;
        case 'sabado':
            menu += generarMenuDiaSabado(carbohidratosDiarios, proteinasDiarias, grasasDiarias, restricciones, objetivo);
            break;
        case 'domingo':
            menu += generarMenuDiaDomingo(carbohidratosDiarios, proteinasDiarias, grasasDiarias, restricciones, objetivo);
            break;
    }

    // Mostrar el resultado con formato HTML
    document.getElementById('resultado-menu').innerHTML = menu;
});

// Funciones para generar menús específicos de cada día con más variedad y ajustes según el objetivo

function generarMenuDiaLunes(carbohidratos, proteinas, grasas, restricciones, objetivo) {
    let menuLunes = '<h3>Menú del lunes:</h3><ul>';
    if (objetivo === 'perder') {
        menuLunes += '<li>Desayuno: Avena con frutos rojos y leche de almendras (reducido en carbohidratos).</li>';
        menuLunes += '<li>Almuerzo: Ensalada de pollo a la plancha con quinoa y espinacas.</li>';
        menuLunes += '<li>Cena: Pescado al horno con verduras al vapor.</li>';
    } else if (objetivo === 'mantener') {
        menuLunes += '<li>Desayuno: Avena con frutas frescas y frutos secos.</li>';
        menuLunes += '<li>Almuerzo: Pollo a la plancha con arroz integral y brócoli.</li>';
        menuLunes += '<li>Cena: Pescado al horno con patatas asadas.</li>';
    } else if (objetivo === 'ganar') {
        menuLunes += '<li>Desayuno: Tostadas integrales con aguacate y huevo (alto en carbohidratos).</li>';
        menuLunes += '<li>Almuerzo: Pechuga de pollo a la plancha con pasta integral y espinacas.</li>';
        menuLunes += '<li>Cena: Salmón con quinoa y verduras salteadas.</li>';
    }
    menuLunes += '</ul>';
    return menuLunes;
}

function generarMenuDiaMartes(carbohidratos, proteinas, grasas, restricciones, objetivo) {
    let menuMartes = '<h3>Menú del martes:</h3><ul>';
    if (objetivo === 'perder') {
        menuMartes += '<li>Desayuno: Yogur con frutos secos y semillas (bajo en carbohidratos).</li>';
        menuMartes += '<li>Almuerzo: Tofu con ensalada de lentejas y vegetales.</li>';
        menuMartes += '<li>Cena: Ensalada de garbanzos con espinacas y aceite de oliva.</li>';
    } else if (objetivo === 'mantener') {
        menuMartes += '<li>Desayuno: Batido de frutas con avena y leche de almendras.</li>';
        menuMartes += '<li>Almuerzo: Pollo a la plancha con arroz integral y verduras al vapor.</li>';
        menuMartes += '<li>Cena: Ensalada de quinoa con salmón a la plancha.</li>';
    } else if (objetivo === 'ganar') {
        menuMartes += '<li>Desayuno: Tostadas con mantequilla de maní y plátano (alto en calorías).</li>';
        menuMartes += '<li>Almuerzo: Tofu con pasta integral y verduras asadas.</li>';
        menuMartes += '<li>Cena: Ensalada de lentejas con carne a la parrilla.</li>';
    }
    menuMartes += '</ul>';
    return menuMartes;
}

function generarMenuDiaMiercoles(carbohidratos, proteinas, grasas, restricciones, objetivo) {
    let menuMiercoles = '<h3>Menú del miércoles:</h3><ul>';
    if (objetivo === 'perder') {
        menuMiercoles += '<li>Desayuno: Batido de espinacas, piña y proteína vegana.</li>';
        menuMiercoles += '<li>Almuerzo: Ensalada de garbanzos con vegetales frescos.</li>';
        menuMiercoles += '<li>Cena: Pavo al horno con espinacas salteadas.</li>';
    } else if (objetivo === 'mantener') {
        menuMiercoles += '<li>Desayuno: Yogur con frutas y avena.</li>';
        menuMiercoles += '<li>Almuerzo: Pollo al grill con pasta integral y ensalada.</li>';
        menuMiercoles += '<li>Cena: Salmón con quinoa y verduras al vapor.</li>';
    } else if (objetivo === 'ganar') {
        menuMiercoles += '<li>Desayuno: Tostadas con aguacate, huevo y jamón serrano.</li>';
        menuMiercoles += '<li>Almuerzo: Carne magra con arroz integral y vegetales.</li>';
        menuMiercoles += '<li>Cena: Pavo al horno con batatas asadas.</li>';
    }
    menuMiercoles += '</ul>';
    return menuMiercoles;
}

function generarMenuDiaJueves(carbohidratos, proteinas, grasas, restricciones, objetivo) {
    let menuJueves = '<h3>Menú del jueves:</h3><ul>';
    if (objetivo === 'perder') {
        menuJueves += '<li>Desayuno: Tostadas integrales con aguacate y tomate.</li>';
        menuJueves += '<li>Almuerzo: Ensalada de lentejas con espinacas frescas.</li>';
        menuJueves += '<li>Cena: Pescado a la plancha con calabacines al vapor.</li>';
    } else if (objetivo === 'mantener') {
        menuJueves += '<li>Desayuno: Avena con frutas y yogur.</li>';
        menuJueves += '<li>Almuerzo: Pollo a la plancha con arroz integral y brócoli.</li>';
        menuJueves += '<li>Cena: Salmón con patatas asadas y ensalada verde.</li>';
    } else if (objetivo === 'ganar') {
        menuJueves += '<li>Desayuno: Tostadas con huevo, aguacate y jamón.</li>';
        menuJueves += '<li>Almuerzo: Carne de res a la parrilla con arroz y verduras.</li>';
        menuJueves += '<li>Cena: Pechuga de pollo con pasta y espinacas.</li>';
    }
    menuJueves += '</ul>';
    return menuJueves;
}

function generarMenuDiaViernes(carbohidratos, proteinas, grasas, restricciones, objetivo) {
    let menuViernes = '<h3>Menú del viernes:</h3><ul>';
    if (objetivo === 'perder') {
        menuViernes += '<li>Desayuno: Yogur con semillas de chía y frutos secos.</li>';
        menuViernes += '<li>Almuerzo: Ensalada de garbanzos con espinacas y aguacate.</li>';
        menuViernes += '<li>Cena: Pavo a la plancha con brócoli al vapor.</li>';
    } else if (objetivo === 'mantener') {
        menuViernes += '<li>Desayuno: Avena con frutas y yogur griego.</li>';
        menuViernes += '<li>Almuerzo: Pollo a la plancha con arroz integral y ensalada verde.</li>';
        menuViernes += '<li>Cena: Pescado al horno con patatas y verduras al vapor.</li>';
    } else if (objetivo === 'ganar') {
        menuViernes += '<li>Desayuno: Tostadas con aguacate, huevo y jamón serrano.</li>';
        menuViernes += '<li>Almuerzo: Pasta integral con carne de res y verduras.</li>';
        menuViernes += '<li>Cena: Salmón al horno con quinoa y espárragos.</li>';
    }
    menuViernes += '</ul>';
    return menuViernes;
}

function generarMenuDiaSabado(carbohidratos, proteinas, grasas, restricciones, objetivo) {
    let menuSabado = '<h3>Menú del sábado:</h3><ul>';
    if (objetivo === 'perder') {
        menuSabado += '<li>Desayuno: Batido de proteínas con espinacas y frutas.</li>';
        menuSabado += '<li>Almuerzo: Ensalada de pollo a la plancha con quinoa y verduras al vapor.</li>';
        menuSabado += '<li>Cena: Pescado a la parrilla con calabacín al vapor.</li>';
    } else if (objetivo === 'mantener') {
        menuSabado += '<li>Desayuno: Yogur griego con frutas y frutos secos.</li>';
        menuSabado += '<li>Almuerzo: Pollo a la parrilla con arroz integral y brócoli.</li>';
        menuSabado += '<li>Cena: Salmón a la plancha con patatas asadas.</li>';
    } else if (objetivo === 'ganar') {
        menuSabado += '<li>Desayuno: Tostadas con huevo, jamón y aguacate.</li>';
        menuSabado += '<li>Almuerzo: Pasta integral con carne de res y espinacas.</li>';
        menuSabado += '<li>Cena: Pavo al horno con batatas y espinacas.</li>';
    }
    menuSabado += '</ul>';
    return menuSabado;
}

function generarMenuDiaDomingo(carbohidratos, proteinas, grasas, restricciones, objetivo) {
    let menuDomingo = '<h3>Menú del domingo:</h3><ul>';
    if (objetivo === 'perder') {
        menuDomingo += '<li>Desayuno: Yogur griego con nueces y fresas.</li>';
        menuDomingo += '<li>Almuerzo: Ensalada de pollo con aguacate y espinacas.</li>';
        menuDomingo += '<li>Cena: Pescado al horno con brócoli.</li>';
    } else if (objetivo === 'mantener') {
        menuDomingo += '<li>Desayuno: Tostadas integrales con mantequilla de maní y plátano.</li>';
        menuDomingo += '<li>Almuerzo: Carne a la parrilla con arroz integral y ensalada verde.</li>';
        menuDomingo += '<li>Cena: Salmón con quinoa y verduras al vapor.</li>';
    } else if (objetivo === 'ganar') {
        menuDomingo += '<li>Desayuno: Panqueques de avena con frutas y miel.</li>';
        menuDomingo += '<li>Almuerzo: Carne de res con pasta integral y ensalada verde.</li>';
        menuDomingo += '<li>Cena: Pavo al horno con batatas y espinacas.</li>';
    }
    menuDomingo += '</ul>';
    return menuDomingo;
}
