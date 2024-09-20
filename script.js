function generarMenuDiaLunes(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, sexo, actividad) {
    let menuLunes = '<h3>Menú del lunes:</h3><ul>';

    const esVegano = restricciones.includes('vegano');
    const esVegetariano = restricciones.includes('vegetariano');
    const esCeliaco = restricciones.includes('celiaco');
    const sinAzucar = restricciones.includes('sinAzucar');

    // Desayuno
    if (esVegano) {
        menuLunes += `<li>Desayuno: Tostadas con aguacate y batido de proteínas veganas <span onclick="toggleDetalles('detallesDesayunoLunes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (esVegetariano) {
        menuLunes += `<li>Desayuno: Avena con frutas frescas y nueces <span onclick="toggleDetalles('detallesDesayunoLunes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (esCeliaco) {
        menuLunes += `<li>Desayuno: Yogur sin gluten con frutos secos <span onclick="toggleDetalles('detallesDesayunoLunes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (sinAzucar) {
        menuLunes += `<li>Desayuno: Avena sin azúcar con frutas <span onclick="toggleDetalles('detallesDesayunoLunes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else {
        menuLunes += `<li>Desayuno: Avena con frutas y batido de proteínas <span onclick="toggleDetalles('detallesDesayunoLunes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    }

    menuLunes += `<div id="detallesDesayunoLunes" style="display:none;">
        <p>Ingredientes: Avena (50g), Frutas (100g), Batido de proteínas (30g).</p>
        <p>Calorías: ${Math.round(carbohidratosDesayuno * 4 + proteinasDesayuno * 4 + grasasDesayuno * 9)} kcal, Proteínas: ${Math.round(proteinasDesayuno)}g, Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g</p>
    </div>`;

    // Almuerzo
    let opcionProteina = actividad === 'crossfit' ? 'Tofu' : 'Pollo';
    if (esVegano) opcionProteina = 'Tofu';
    if (esVegetariano) opcionProteina = 'Huevos';
    
    menuLunes += `<li>Almuerzo: ${opcionProteina} a la plancha con arroz integral y brócoli <span onclick="toggleDetalles('detallesAlmuerzoLunes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    menuLunes += `<div id="detallesAlmuerzoLunes" style="display:none;">
        <p>Ingredientes: ${opcionProteina} (200g), Arroz integral (100g), Brócoli (50g).</p>
        <p>Calorías: ${Math.round(carbohidratosAlmuerzo * 4 + proteinasAlmuerzo * 4 + grasasAlmuerzo * 9)} kcal, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g</p>
    </div>`;

    // Cena
    if (esCeliaco) {
        menuLunes += `<li>Cena: Pescado al horno con ensalada sin gluten <span onclick="toggleDetalles('detallesCenaLunes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (sinAzucar) {
        menuLunes += `<li>Cena: Pescado al horno con ensalada sin aderezos azucarados <span onclick="toggleDetalles('detallesCenaLunes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else {
        menuLunes += `<li>Cena: Pescado al horno con ensalada <span onclick="toggleDetalles('detallesCenaLunes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    }

    menuLunes += `<div id="detallesCenaLunes" style="display:none;">
        <p>Ingredientes: Pescado (150g), Ensalada (200g).</p>
        <p>Calorías: ${Math.round(carbohidratosCena * 4 + proteinasCena * 4 + grasasCena * 9)} kcal, Proteínas: ${Math.round(proteinasCena)}g, Carbohidratos: ${Math.round(carbohidratosCena)}g, Grasas: ${Math.round(grasasCena)}g</p>
    </div>`;

    menuLunes += '</ul>';
    return menuLunes;
}

// Función para el martes
function generarMenuDiaMartes(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, sexo, actividad) {
    let menuMartes = '<h3>Menú del martes:</h3><ul>';

    const esVegano = restricciones.includes('vegano');
    const esVegetariano = restricciones.includes('vegetariano');
    const esCeliaco = restricciones.includes('celiaco');
    const sinAzucar = restricciones.includes('sinAzucar');

    // Desayuno
    if (esVegano) {
        menuMartes += `<li>Desayuno: Batido de proteínas veganas con avena y plátano <span onclick="toggleDetalles('detallesDesayunoMartes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (esVegetariano) {
        menuMartes += `<li>Desayuno: Yogur con frutas frescas y nueces <span onclick="toggleDetalles('detallesDesayunoMartes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (esCeliaco) {
        menuMartes += `<li>Desayuno: Tostadas sin gluten con aguacate <span onclick="toggleDetalles('detallesDesayunoMartes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (sinAzucar) {
        menuMartes += `<li>Desayuno: Avena sin azúcar con frutos rojos <span onclick="toggleDetalles('detallesDesayunoMartes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else {
        menuMartes += `<li>Desayuno: Yogur con avena y frutas frescas <span onclick="toggleDetalles('detallesDesayunoMartes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    }

    menuMartes += `<div id="detallesDesayunoMartes" style="display:none;">
        <p>Ingredientes: Yogur (200g), Avena (50g), Frutas frescas (100g).</p>
        <p>Calorías: ${Math.round(carbohidratosDesayuno * 4 + proteinasDesayuno * 4 + grasasDesayuno * 9)} kcal, Proteínas: ${Math.round(proteinasDesayuno)}g, Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g</p>
    </div>`;

    // Almuerzo
    let opcionProteina = actividad === 'musculacion' ? 'Pollo' : 'Tofu';
    if (esVegano) opcionProteina = 'Tofu';
    if (esVegetariano) opcionProteina = 'Huevos';

    menuMartes += `<li>Almuerzo: ${opcionProteina} a la plancha con ensalada de quinoa y espinacas <span onclick="toggleDetalles('detallesAlmuerzoMartes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    menuMartes += `<div id="detallesAlmuerzoMartes" style="display:none;">
        <p>Ingredientes: ${opcionProteina} (200g), Quinoa (100g), Espinacas (50g).</p>
        <p>Calorías: ${Math.round(carbohidratosAlmuerzo * 4 + proteinasAlmuerzo * 4 + grasasAlmuerzo * 9)} kcal, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g</p>
    </div>`;

    // Cena
    if (esCeliaco) {
        menuMartes += `<li>Cena: Pavo al horno con verduras al vapor sin gluten <span onclick="toggleDetalles('detallesCenaMartes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (sinAzucar) {
        menuMartes += `<li>Cena: Pavo al horno con verduras al vapor sin aderezo <span onclick="toggleDetalles('detallesCenaMartes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else {
        menuMartes += `<li>Cena: Pavo al horno con verduras al vapor <span onclick="toggleDetalles('detallesCenaMartes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    }

    menuMartes += `<div id="detallesCenaMartes" style="display:none;">
        <p>Ingredientes: Pavo (150g), Verduras al vapor (200g).</p>
        <p>Calorías: ${Math.round(carbohidratosCena * 4 + proteinasCena * 4 + grasasCena * 9)} kcal, Proteínas: ${Math.round(proteinasCena)}g, Carbohidratos: ${Math.round(carbohidratosCena)}g, Grasas: ${Math.round(grasasCena)}g</p>
    </div>`;

    menuMartes += '</ul>';
    return menuMartes;
}

// Función para el miércoles
function generarMenuDiaMiercoles(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, sexo, actividad) {
    let menuMiercoles = '<h3>Menú del miércoles:</h3><ul>';

    const esVegano = restricciones.includes('vegano');
    const esVegetariano = restricciones.includes('vegetariano');
    const esCeliaco = restricciones.includes('celiaco');
    const sinAzucar = restricciones.includes('sinAzucar');

    // Desayuno
    if (esVegano) {
        menuMiercoles += `<li>Desayuno: Batido de espinacas y proteína vegana <span onclick="toggleDetalles('detallesDesayunoMiercoles')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (esVegetariano) {
        menuMiercoles += `<li>Desayuno: Avena con frutas frescas y leche de almendras <span onclick="toggleDetalles('detallesDesayunoMiercoles')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (esCeliaco) {
        menuMiercoles += `<li>Desayuno: Yogur sin gluten con frutos secos <span onclick="toggleDetalles('detallesDesayunoMiercoles')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (sinAzucar) {
        menuMiercoles += `<li>Desayuno: Avena sin azúcar con frutas <span onclick="toggleDetalles('detallesDesayunoMiercoles')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else {
        menuMiercoles += `<li>Desayuno: Avena con frutas y batido de proteínas <span onclick="toggleDetalles('detallesDesayunoMiercoles')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    }

    menuMiercoles += `<div id="detallesDesayunoMiercoles" style="display:none;">
        <p>Ingredientes: Avena (50g), Frutas (100g), Batido de proteínas (30g).</p>
        <p>Calorías: ${Math.round(carbohidratosDesayuno * 4 + proteinasDesayuno * 4 + grasasDesayuno * 9)} kcal, Proteínas: ${Math.round(proteinasDesayuno)}g, Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g</p>
    </div>`;

    // Almuerzo
    let opcionProteina = actividad === 'funcional' ? 'Quinoa' : 'Pollo';
    if (esVegano) opcionProteina = 'Quinoa';
    if (esVegetariano) opcionProteina = 'Huevos';

    menuMiercoles += `<li>Almuerzo: ${opcionProteina} con ensalada de espinacas y garbanzos <span onclick="toggleDetalles('detallesAlmuerzoMiercoles')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    menuMiercoles += `<div id="detallesAlmuerzoMiercoles" style="display:none;">
        <p>Ingredientes: ${opcionProteina} (200g), Espinacas (100g), Garbanzos (50g).</p>
        <p>Calorías: ${Math.round(carbohidratosAlmuerzo * 4 + proteinasAlmuerzo * 4 + grasasAlmuerzo * 9)} kcal, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g</p>
    </div>`;

    // Cena
    if (esCeliaco) {
        menuMiercoles += `<li>Cena: Salmón a la parrilla con ensalada sin gluten <span onclick="toggleDetalles('detallesCenaMiercoles')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (sinAzucar) {
        menuMiercoles += `<li>Cena: Pescado con ensalada verde sin aderezos azucarados <span onclick="toggleDetalles('detallesCenaMiercoles')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else {
        menuMiercoles += `<li>Cena: Pescado al horno con ensalada <span onclick="toggleDetalles('detallesCenaMiercoles')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    }

    menuMiercoles += `<div id="detallesCenaMiercoles" style="display:none;">
        <p>Ingredientes: Pescado (150g), Ensalada (200g).</p>
        <p>Calorías: ${Math.round(carbohidratosCena * 4 + proteinasCena * 4 + grasasCena * 9)} kcal, Proteínas: ${Math.round(proteinasCena)}g, Carbohidratos: ${Math.round(carbohidratosCena)}g, Grasas: ${Math.round(grasasCena)}g</p>
    </div>`;

    menuMiercoles += '</ul>';
    return menuMiercoles;
}

// Función para el jueves
function generarMenuDiaJueves(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, sexo, actividad) {
    let menuJueves = '<h3>Menú del jueves:</h3><ul>';

    const esVegano = restricciones.includes('vegano');
    const esVegetariano = restricciones.includes('vegetariano');
    const esCeliaco = restricciones.includes('celiaco');
    const sinAzucar = restricciones.includes('sinAzucar');

    // Desayuno
    if (esVegano) {
        menuJueves += `<li>Desayuno: Tostadas con aguacate y batido de proteínas veganas <span onclick="toggleDetalles('detallesDesayunoJueves')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (esVegetariano) {
        menuJueves += `<li>Desayuno: Avena con frutas frescas y nueces <span onclick="toggleDetalles('detallesDesayunoJueves')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (esCeliaco) {
        menuJueves += `<li>Desayuno: Yogur sin gluten con frutos secos <span onclick="toggleDetalles('detallesDesayunoJueves')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (sinAzucar) {
        menuJueves += `<li>Desayuno: Avena sin azúcar con frutas <span onclick="toggleDetalles('detallesDesayunoJueves')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else {
        menuJueves += `<li>Desayuno: Avena con frutas y batido de proteínas <span onclick="toggleDetalles('detallesDesayunoJueves')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    }

    menuJueves += `<div id="detallesDesayunoJueves" style="display:none;">
        <p>Ingredientes: Avena (50g), Frutas (100g), Batido de proteínas (30g).</p>
        <p>Calorías: ${Math.round(carbohidratosDesayuno * 4 + proteinasDesayuno * 4 + grasasDesayuno * 9)} kcal, Proteínas: ${Math.round(proteinasDesayuno)}g, Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g</p>
    </div>`;

    // Almuerzo
    let opcionProteina = actividad === 'musculacion' ? 'Pollo' : 'Tofu';
    if (esVegano) opcionProteina = 'Tofu';
    if (esVegetariano) opcionProteina = 'Huevos';

    menuJueves += `<li>Almuerzo: ${opcionProteina} a la parrilla con ensalada de quinoa y espinacas <span onclick="toggleDetalles('detallesAlmuerzoJueves')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    menuJueves += `<div id="detallesAlmuerzoJueves" style="display:none;">
        <p>Ingredientes: ${opcionProteina} (200g), Quinoa (100g), Espinacas (50g).</p>
        <p>Calorías: ${Math.round(carbohidratosAlmuerzo * 4 + proteinasAlmuerzo * 4 + grasasAlmuerzo * 9)} kcal, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g</p>
    </div>`;

    // Cena
    if (esCeliaco) {
        menuJueves += `<li>Cena: Pescado al horno con ensalada sin gluten <span onclick="toggleDetalles('detallesCenaJueves')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (sinAzucar) {
        menuJueves += `<li>Cena: Pescado al horno con ensalada sin aderezos azucarados <span onclick="toggleDetalles('detallesCenaJueves')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else {
        menuJueves += `<li>Cena: Pescado al horno con ensalada <span onclick="toggleDetalles('detallesCenaJueves')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    }

    menuJueves += `<div id="detallesCenaJueves" style="display:none;">
        <p>Ingredientes: Pescado (150g), Ensalada (200g).</p>
        <p>Calorías: ${Math.round(carbohidratosCena * 4 + proteinasCena * 4 + grasasCena * 9)} kcal, Proteínas: ${Math.round(proteinasCena)}g, Carbohidratos: ${Math.round(carbohidratosCena)}g, Grasas: ${Math.round(grasasCena)}g</p>
    </div>`;

    menuJueves += '</ul>';
    return menuJueves;
}

// Función para el viernes
function generarMenuDiaViernes(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, sexo, actividad) {
    let menuViernes = '<h3>Menú del viernes:</h3><ul>';

    const esVegano = restricciones.includes('vegano');
    const esVegetariano = restricciones.includes('vegetariano');
    const esCeliaco = restricciones.includes('celiaco');
    const sinAzucar = restricciones.includes('sinAzucar');

    // Desayuno
    if (esVegano) {
        menuViernes += `<li>Desayuno: Batido de proteínas veganas con avena y plátano <span onclick="toggleDetalles('detallesDesayunoViernes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (esVegetariano) {
        menuViernes += `<li>Desayuno: Yogur con frutas frescas y nueces <span onclick="toggleDetalles('detallesDesayunoViernes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (esCeliaco) {
        menuViernes += `<li>Desayuno: Tostadas sin gluten con aguacate <span onclick="toggleDetalles('detallesDesayunoViernes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (sinAzucar) {
        menuViernes += `<li>Desayuno: Avena sin azúcar con frutos rojos <span onclick="toggleDetalles('detallesDesayunoViernes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else {
        menuViernes += `<li>Desayuno: Yogur con avena y frutas frescas <span onclick="toggleDetalles('detallesDesayunoViernes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    }

    menuViernes += `<div id="detallesDesayunoViernes" style="display:none;">
        <p>Ingredientes: Yogur (200g), Avena (50g), Frutas frescas (100g).</p>
        <p>Calorías: ${Math.round(carbohidratosDesayuno * 4 + proteinasDesayuno * 4 + grasasDesayuno * 9)} kcal, Proteínas: ${Math.round(proteinasDesayuno)}g, Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g</p>
    </div>`;

    // Almuerzo
    let opcionProteina = actividad === 'crossfit' ? 'Tofu' : 'Pollo';
    if (esVegano) opcionProteina = 'Tofu';
    if (esVegetariano) opcionProteina = 'Huevos';

    menuViernes += `<li>Almuerzo: ${opcionProteina} con ensalada de espinacas y quinoa <span onclick="toggleDetalles('detallesAlmuerzoViernes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    menuViernes += `<div id="detallesAlmuerzoViernes" style="display:none;">
        <p>Ingredientes: ${opcionProteina} (200g), Quinoa (100g), Espinacas (50g).</p>
        <p>Calorías: ${Math.round(carbohidratosAlmuerzo * 4 + proteinasAlmuerzo * 4 + grasasAlmuerzo * 9)} kcal, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g</p>
    </div>`;

    // Cena
    if (esCeliaco) {
        menuViernes += `<li>Cena: Pescado al horno con ensalada sin gluten <span onclick="toggleDetalles('detallesCenaViernes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (sinAzucar) {
        menuViernes += `<li>Cena: Pescado al horno con ensalada sin aderezos azucarados <span onclick="toggleDetalles('detallesCenaViernes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else {
        menuViernes += `<li>Cena: Pescado al horno con ensalada <span onclick="toggleDetalles('detallesCenaViernes')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    }

    menuViernes += `<div id="detallesCenaViernes" style="display:none;">
        <p>Ingredientes: Pescado (150g), Ensalada (200g).</p>
        <p>Calorías: ${Math.round(carbohidratosCena * 4 + proteinasCena * 4 + grasasCena * 9)} kcal, Proteínas: ${Math.round(proteinasCena)}g, Carbohidratos: ${Math.round(carbohidratosCena)}g, Grasas: ${Math.round(grasasCena)}g</p>
    </div>`;

    menuViernes += '</ul>';
    return menuViernes;
}

// Función para el sábado
function generarMenuDiaSabado(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, sexo, actividad) {
    let menuSabado = '<h3>Menú del sábado:</h3><ul>';

    const esVegano = restricciones.includes('vegano');
    const esVegetariano = restricciones.includes('vegetariano');
    const esCeliaco = restricciones.includes('celiaco');
    const sinAzucar = restricciones.includes('sinAzucar');

    // Desayuno
    if (esVegano) {
        menuSabado += `<li>Desayuno: Batido de proteínas veganas con avena y plátano <span onclick="toggleDetalles('detallesDesayunoSabado')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (esVegetariano) {
        menuSabado += `<li>Desayuno: Yogur con frutas frescas y nueces <span onclick="toggleDetalles('detallesDesayunoSabado')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (esCeliaco) {
        menuSabado += `<li>Desayuno: Tostadas sin gluten con aguacate <span onclick="toggleDetalles('detallesDesayunoSabado')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (sinAzucar) {
        menuSabado += `<li>Desayuno: Avena sin azúcar con frutos rojos <span onclick="toggleDetalles('detallesDesayunoSabado')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else {
        menuSabado += `<li>Desayuno: Yogur con avena y frutas frescas <span onclick="toggleDetalles('detallesDesayunoSabado')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    }

    menuSabado += `<div id="detallesDesayunoSabado" style="display:none;">
        <p>Ingredientes: Yogur (200g), Avena (50g), Frutas frescas (100g).</p>
        <p>Calorías: ${Math.round(carbohidratosDesayuno * 4 + proteinasDesayuno * 4 + grasasDesayuno * 9)} kcal, Proteínas: ${Math.round(proteinasDesayuno)}g, Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g</p>
    </div>`;

    // Almuerzo
    let opcionProteina = actividad === 'musculacion' ? 'Pollo' : 'Tofu';
    if (esVegano) opcionProteina = 'Tofu';
    if (esVegetariano) opcionProteina = 'Huevos';

    menuSabado += `<li>Almuerzo: ${opcionProteina} a la parrilla con ensalada de espinacas y quinoa <span onclick="toggleDetalles('detallesAlmuerzoSabado')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    menuSabado += `<div id="detallesAlmuerzoSabado" style="display:none;">
        <p>Ingredientes: ${opcionProteina} (200g), Quinoa (100g), Espinacas (50g).</p>
        <p>Calorías: ${Math.round(carbohidratosAlmuerzo * 4 + proteinasAlmuerzo * 4 + grasasAlmuerzo * 9)} kcal, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g</p>
    </div>`;

    // Cena
    if (esCeliaco) {
        menuSabado += `<li>Cena: Pescado al horno con ensalada sin gluten <span onclick="toggleDetalles('detallesCenaSabado')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (sinAzucar) {
        menuSabado += `<li>Cena: Pescado al horno con ensalada sin aderezos azucarados <span onclick="toggleDetalles('detallesCenaSabado')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else {
        menuSabado += `<li>Cena: Pescado al horno con ensalada <span onclick="toggleDetalles('detallesCenaSabado')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    }

    menuSabado += `<div id="detallesCenaSabado" style="display:none;">
        <p>Ingredientes: Pescado (150g), Ensalada (200g).</p>
        <p>Calorías: ${Math.round(carbohidratosCena * 4 + proteinasCena * 4 + grasasCena * 9)} kcal, Proteínas: ${Math.round(proteinasCena)}g, Carbohidratos: ${Math.round(carbohidratosCena)}g, Grasas: ${Math.round(grasasCena)}g</p>
    </div>`;

    menuSabado += '</ul>';
    return menuSabado;
}

// Función para el domingo
function generarMenuDiaDomingo(carbohidratosDesayuno, proteinasDesayuno, grasasDesayuno, carbohidratosAlmuerzo, proteinasAlmuerzo, grasasAlmuerzo, carbohidratosCena, proteinasCena, grasasCena, restricciones, sexo, actividad) {
    let menuDomingo = '<h3>Menú del domingo:</h3><ul>';

    const esVegano = restricciones.includes('vegano');
    const esVegetariano = restricciones.includes('vegetariano');
    const esCeliaco = restricciones.includes('celiaco');
    const sinAzucar = restricciones.includes('sinAzucar');

    // Desayuno
    if (esVegano) {
        menuDomingo += `<li>Desayuno: Tostadas integrales con aguacate y batido de proteínas veganas <span onclick="toggleDetalles('detallesDesayunoDomingo')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (esVegetariano) {
        menuDomingo += `<li>Desayuno: Avena con frutas frescas y nueces <span onclick="toggleDetalles('detallesDesayunoDomingo')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (esCeliaco) {
        menuDomingo += `<li>Desayuno: Yogur sin gluten con frutos secos <span onclick="toggleDetalles('detallesDesayunoDomingo')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (sinAzucar) {
        menuDomingo += `<li>Desayuno: Avena sin azúcar con frutas <span onclick="toggleDetalles('detallesDesayunoDomingo')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else {
        menuDomingo += `<li>Desayuno: Avena con frutas y batido de proteínas <span onclick="toggleDetalles('detallesDesayunoDomingo')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    }

    menuDomingo += `<div id="detallesDesayunoDomingo" style="display:none;">
        <p>Ingredientes: Avena (50g), Frutas (100g), Batido de proteínas (30g).</p>
        <p>Calorías: ${Math.round(carbohidratosDesayuno * 4 + proteinasDesayuno * 4 + grasasDesayuno * 9)} kcal, Proteínas: ${Math.round(proteinasDesayuno)}g, Carbohidratos: ${Math.round(carbohidratosDesayuno)}g, Grasas: ${Math.round(grasasDesayuno)}g</p>
    </div>`;

    // Almuerzo
    let opcionProteina = actividad === 'crossfit' ? 'Tofu' : 'Pollo';
    if (esVegano) opcionProteina = 'Tofu';
    if (esVegetariano) opcionProteina = 'Huevos';

    menuDomingo += `<li>Almuerzo: ${opcionProteina} a la plancha con ensalada de quinoa y espinacas <span onclick="toggleDetalles('detallesAlmuerzoDomingo')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    menuDomingo += `<div id="detallesAlmuerzoDomingo" style="display:none;">
        <p>Ingredientes: ${opcionProteina} (200g), Quinoa (100g), Espinacas (50g).</p>
        <p>Calorías: ${Math.round(carbohidratosAlmuerzo * 4 + proteinasAlmuerzo * 4 + grasasAlmuerzo * 9)} kcal, Proteínas: ${Math.round(proteinasAlmuerzo)}g, Carbohidratos: ${Math.round(carbohidratosAlmuerzo)}g, Grasas: ${Math.round(grasasAlmuerzo)}g</p>
    </div>`;

    // Cena
    if (esCeliaco) {
        menuDomingo += `<li>Cena: Salmón a la parrilla con ensalada sin gluten <span onclick="toggleDetalles('detallesCenaDomingo')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else if (sinAzucar) {
        menuDomingo += `<li>Cena: Pescado al horno con ensalada sin aderezos azucarados <span onclick="toggleDetalles('detallesCenaDomingo')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    } else {
        menuDomingo += `<li>Cena: Pescado al horno con ensalada <span onclick="toggleDetalles('detallesCenaDomingo')" style="cursor: pointer; color: lime;">Ver detalles ⯆</span></li>`;
    }

    menuDomingo += `<div id="detallesCenaDomingo" style="display:none;">
        <p>Ingredientes: Pescado (150g), Ensalada (200g).</p>
        <p>Calorías: ${Math.round(carbohidratosCena * 4 + proteinasCena * 4 + grasasCena * 9)} kcal, Proteínas: ${Math.round(proteinasCena)}g, Carbohidratos: ${Math.round(carbohidratosCena)}g, Grasas: ${Math.round(grasasCena)}g</p>
    </div>`;

    menuDomingo += '</ul>';
    return menuDomingo;
