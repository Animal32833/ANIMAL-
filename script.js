// Datos de menú por día
const menu = {
    lunes: [
        {nombre: "Desayuno: Avena con frutas", descripcion: "Avena con manzana y frutos rojos", calorias: 350, proteinas: 12, carbohidratos: 55, grasas: 8, ingredientes: [{nombre: "Avena", gramos: 50}, {nombre: "Manzana", gramos: 100}]},
        {nombre: "Almuerzo: Pollo con ensalada", descripcion: "Pechuga de pollo a la plancha con ensalada mixta", calorias: 450, proteinas: 30, carbohidratos: 20, grasas: 15, ingredientes: [{nombre: "Pollo", gramos: 200}, {nombre: "Lechuga", gramos: 50}, {nombre: "Tomate", gramos: 50}]},
        {nombre: "Cena: Sopa de verduras", descripcion: "Sopa de zanahoria, papa y espinaca", calorias: 300, proteinas: 5, carbohidratos: 40, grasas: 10, ingredientes: [{nombre: "Zanahoria", gramos: 100}, {nombre: "Papa", gramos: 150}, {nombre: "Espinaca", gramos: 50}]},
        {nombre: "Snack: Yogur con almendras", descripcion: "Yogur griego con almendras", calorias: 150, proteinas: 8, carbohidratos: 12, grasas: 6, ingredientes: [{nombre: "Yogur", gramos: 100}, {nombre: "Almendras", gramos: 20}]},
        {nombre: "Media Mañana: Batido de proteína", descripcion: "Batido con leche y proteína de suero", calorias: 250, proteinas: 25, carbohidratos: 10, grasas: 5, ingredientes: [{nombre: "Leche", gramos: 200}, {nombre: "Proteína", gramos: 30}]},
        {nombre: "Merienda: Tostadas con aguacate", descripcion: "Tostadas de pan integral con aguacate y huevo", calorias: 300, proteinas: 10, carbohidratos: 40, grasas: 20, ingredientes: [{nombre: "Pan Integral", gramos: 60}, {nombre: "Aguacate", gramos: 50}, {nombre: "Huevo", gramos: 50}]}
    ],
    martes: [
        {nombre: "Desayuno: Yogur con granola", descripcion: "Yogur natural con granola y miel", calorias: 300, proteinas: 10, carbohidratos: 40, grasas: 10, ingredientes: [{nombre: "Yogur", gramos: 200}, {nombre: "Granola", gramos: 50}]},
        {nombre: "Almuerzo: Pasta con salsa de tomate", descripcion: "Pasta integral con salsa casera de tomate", calorias: 500, proteinas: 15, carbohidratos: 70, grasas: 15, ingredientes: [{nombre: "Pasta", gramos: 100}, {nombre: "Tomate", gramos: 200}]},
        {nombre: "Cena: Tacos de pescado", descripcion: "Tacos con pescado y vegetales", calorias: 400, proteinas: 25, carbohidratos: 45, grasas: 12, ingredientes: [{nombre: "Pescado", gramos: 150}, {nombre: "Tortilla de maíz", gramos: 50}, {nombre: "Vegetales", gramos: 100}]},
        {nombre: "Snack: Frutas con nueces", descripcion: "Manzana, plátano y nueces", calorias: 200, proteinas: 5, carbohidratos: 40, grasas: 10, ingredientes: [{nombre: "Manzana", gramos: 100}, {nombre: "Plátano", gramos: 80}, {nombre: "Nueces", gramos: 20}]},
        {nombre: "Media Mañana: Barras de proteína", descripcion: "Barras energéticas con frutos secos", calorias: 300, proteinas: 20, carbohidratos: 30, grasas: 10, ingredientes: [{nombre: "Frutos Secos", gramos: 50}, {nombre: "Proteína", gramos: 30}]},
        {nombre: "Merienda: Smoothie de espinacas", descripcion: "Batido verde con espinacas, manzana y limón", calorias: 180, proteinas: 5, carbohidratos: 35, grasas: 2, ingredientes: [{nombre: "Espinacas", gramos: 50}, {nombre: "Manzana", gramos: 100}, {nombre: "Limón", gramos: 20}]}
    ],
    miercoles: [
        {nombre: "Desayuno: Omelette con espinacas", descripcion: "Omelette de claras de huevo con espinacas y tomate", calorias: 250, proteinas: 20, carbohidratos: 10, grasas: 15, ingredientes: [{nombre: "Claras de Huevo", gramos: 120}, {nombre: "Espinacas", gramos: 50}, {nombre: "Tomate", gramos: 50}]},
        {nombre: "Almuerzo: Quinoa con verduras", descripcion: "Quinoa cocida con calabacín y zanahoria", calorias: 400, proteinas: 12, carbohidratos: 65, grasas: 8, ingredientes: [{nombre: "Quinoa", gramos: 100}, {nombre: "Calabacín", gramos: 80}, {nombre: "Zanahoria", gramos: 50}]},
        {nombre: "Cena: Pescado al horno", descripcion: "Pescado blanco al horno con papas y ensalada", calorias: 350, proteinas: 25, carbohidratos: 40, grasas: 10, ingredientes: [{nombre: "Pescado Blanco", gramos: 150}, {nombre: "Papas", gramos: 150}]},
        {nombre: "Snack: Nueces y almendras", descripcion: "Un puñado de nueces y almendras", calorias: 200, proteinas: 8, carbohidratos: 10, grasas: 15, ingredientes: [{nombre: "Nueces", gramos: 20}, {nombre: "Almendras", gramos: 20}]},
        {nombre: "Media Mañana: Batido de frutas", descripcion: "Batido de plátano, fresas y proteína", calorias: 250, proteinas: 15, carbohidratos: 45, grasas: 5, ingredientes: [{nombre: "Plátano", gramos: 100}, {nombre: "Fresas", gramos: 80}, {nombre: "Proteína", gramos: 30}]},
        {nombre: "Merienda: Galletas de avena", descripcion: "Galletas caseras de avena con arándanos", calorias: 220, proteinas: 6, carbohidratos: 40, grasas: 8, ingredientes: [{nombre: "Avena", gramos: 50}, {nombre: "Arándanos", gramos: 30}]}
    ],
    jueves: [
        {nombre: "Desayuno: Pan integral con mermelada", descripcion: "Tostadas de pan integral con mermelada sin azúcar", calorias: 200, proteinas: 8, carbohidratos: 30, grasas: 5, ingredientes: [{nombre: "Pan Integral", gramos: 60}, {nombre: "Mermelada Sin Azúcar", gramos: 20}]},
        {nombre: "Almuerzo: Pollo con arroz integral", descripcion: "Pechuga de pollo asada con arroz integral y brócoli", calorias: 500, proteinas: 30, carbohidratos: 50, grasas: 15, ingredientes: [{nombre: "Pollo", gramos: 200}, {nombre: "Arroz Integral", gramos: 100}, {nombre: "Brócoli", gramos: 50}]},
        {nombre: "Cena: Crepes de avena con espinacas", descripcion: "Crepes de avena rellenos con espinacas y ricotta", calorias: 300, proteinas: 20, carbohidratos: 40, grasas: 10, ingredientes: [{nombre: "Avena", gramos: 50}, {nombre: "Espinacas", gramos: 100}, {nombre: "Ricotta", gramos: 50}]},
        {nombre: "Snack: Yogur natural", descripcion: "Yogur natural con semillas de chía", calorias: 150, proteinas: 8, carbohidratos: 15, grasas: 5, ingredientes: [{nombre: "Yogur", gramos: 100}, {nombre: "Chía", gramos: 10}]},
        {nombre: "Media Mañana: Smoothie de avena", descripcion: "Smoothie con avena, plátano y canela", calorias: 280, proteinas: 10, carbohidratos: 55, grasas: 5, ingredientes: [{nombre: "Avena", gramos: 40}, {nombre: "Plátano", gramos: 100}, {nombre: "Canela", gramos: 5}]},
        {nombre: "Merienda: Ensalada de frutas", descripcion: "Ensalada de frutas con manzana, kiwi y fresas", calorias: 200, proteinas: 2, carbohidratos: 50, grasas: 1, ingredientes: [{nombre: "Manzana", gramos: 100}, {nombre: "Kiwi", gramos: 80}, {nombre: "Fresas", gramos: 50}]}
    ],
    viernes: [
        {nombre: "Desayuno: Tostadas con tomate", descripcion: "Tostadas de pan integral con tomate rallado y aceite de oliva", calorias: 220, proteinas: 6, carbohidratos: 30, grasas: 8, ingredientes: [{nombre: "Pan Integral", gramos: 60}, {nombre: "Tomate", gramos: 50}, {nombre: "Aceite de Oliva", gramos: 10}]},
        {nombre: "Almuerzo: Pavo con quinoa", descripcion: "Pavo a la plancha con quinoa y espárragos", calorias: 480, proteinas: 30, carbohidratos: 40, grasas: 15, ingredientes: [{nombre: "Pavo", gramos: 200}, {nombre: "Quinoa", gramos: 100}, {nombre: "Espárragos", gramos: 50}]},
        {nombre: "Cena: Ensalada de garbanzos", descripcion: "Ensalada de garbanzos con espinacas y tomates cherry", calorias: 350, proteinas: 15, carbohidratos: 45, grasas: 10, ingredientes: [{nombre: "Garbanzos", gramos: 150}, {nombre: "Espinacas", gramos: 50}, {nombre: "Tomates Cherry", gramos: 50}]},
        {nombre: "Snack: Frutos rojos con yogur", descripcion: "Frutos rojos con yogur griego y miel", calorias: 200, proteinas: 10, carbohidratos: 35, grasas: 5, ingredientes: [{nombre: "Frutos Rojos", gramos: 100}, {nombre: "Yogur", gramos: 100}]},
        {nombre: "Media Mañana: Pan de centeno con aguacate", descripcion: "Tostada de pan de centeno con aguacate", calorias: 260, proteinas: 8, carbohidratos: 35, grasas: 10, ingredientes: [{nombre: "Pan de Centeno", gramos: 60}, {nombre: "Aguacate", gramos: 50}]},
        {nombre: "Merienda: Tarta de manzana light", descripcion: "Tarta casera de manzana con canela y almendras", calorias: 250, proteinas: 6, carbohidratos: 45, grasas: 8, ingredientes: [{nombre: "Manzana", gramos: 100}, {nombre: "Almendras", gramos: 20}, {nombre: "Canela", gramos: 5}]}
    ],
    sabado: [
        {nombre: "Desayuno: Batido de avena y almendras", descripcion: "Batido de avena con almendras, leche y canela", calorias: 320, proteinas: 12, carbohidratos: 50, grasas: 10, ingredientes: [{nombre: "Avena", gramos: 50}, {nombre: "Almendras", gramos: 20}, {nombre: "Leche", gramos: 200}]},
        {nombre: "Almuerzo: Filete de ternera con ensalada", descripcion: "Filete de ternera a la plancha con ensalada de lechuga y zanahoria", calorias: 500, proteinas: 35, carbohidratos: 20, grasas: 25, ingredientes: [{nombre: "Ternera", gramos: 200}, {nombre: "Lechuga", gramos: 50}, {nombre: "Zanahoria", gramos: 50}]},
        {nombre: "Cena: Pollo al curry", descripcion: "Pechuga de pollo con salsa de curry y arroz integral", calorias: 450, proteinas: 30, carbohidratos: 50, grasas: 10, ingredientes: [{nombre: "Pollo", gramos: 200}, {nombre: "Arroz Integral", gramos: 100}, {nombre: "Curry", gramos: 5}]},
        {nombre: "Snack: Batido de proteínas", descripcion: "Batido de proteína de suero con agua", calorias: 120, proteinas: 25, carbohidratos: 5, grasas: 1, ingredientes: [{nombre: "Proteína", gramos: 30}]},
        {nombre: "Media Mañana: Galletas de avena", descripcion: "Galletas de avena con pasas y almendras", calorias: 220, proteinas: 8, carbohidratos: 35, grasas: 10, ingredientes: [{nombre: "Avena", gramos: 50}, {nombre: "Pasas", gramos: 20}, {nombre: "Almendras", gramos: 10}]},
        {nombre: "Merienda: Pan integral con pavo", descripcion: "Pan integral con lonchas de pavo y queso fresco", calorias: 300, proteinas: 15, carbohidratos: 40, grasas: 10, ingredientes: [{nombre: "Pan Integral", gramos: 60}, {nombre: "Pavo", gramos: 50}, {nombre: "Queso Fresco", gramos: 30}]}
    ],
    domingo: [
        {nombre: "Desayuno: Tortitas de avena", descripcion: "Tortitas de avena con plátano y miel", calorias: 400, proteinas: 15, carbohidratos: 70, grasas: 10, ingredientes: [{nombre: "Avena", gramos: 50}, {nombre: "Plátano", gramos: 100}, {nombre: "Miel", gramos: 20}]},
        {nombre: "Almuerzo: Ensalada de lentejas", descripcion: "Ensalada de lentejas con espinacas, zanahoria y huevo duro", calorias: 450, proteinas: 25, carbohidratos: 60, grasas: 10, ingredientes: [{nombre: "Lentejas", gramos: 150}, {nombre: "Espinacas", gramos: 50}, {nombre: "Huevo", gramos: 60}]},
        {nombre: "Cena: Pizza casera", descripcion: "Pizza casera de masa integral con queso mozzarella y vegetales", calorias: 500, proteinas: 20, carbohidratos: 60, grasas: 20, ingredientes: [{nombre: "Masa Integral", gramos: 100}, {nombre: "Queso Mozzarella", gramos: 50}, {nombre: "Vegetales", gramos: 50}]},
        {nombre: "Snack: Tarta de zanahoria", descripcion: "Tarta de zanahoria casera con nueces", calorias: 300, proteinas: 8, carbohidratos: 50, grasas: 12, ingredientes: [{nombre: "Zanahoria", gramos: 100}, {nombre: "Nueces", gramos: 20}]},
        {nombre: "Media Mañana: Batido de espinacas", descripcion: "Batido verde con espinacas, manzana y jengibre", calorias: 180, proteinas: 5, carbohidratos: 35, grasas: 2, ingredientes: [{nombre: "Espinacas", gramos: 50}, {nombre: "Manzana", gramos: 100}, {nombre: "Jengibre", gramos: 10}]},
        {nombre: "Merienda: Barritas de cereales", descripcion: "Barritas de cereales caseras con chocolate negro", calorias: 250, proteinas: 10, carbohidratos: 40, grasas: 8, ingredientes: [{nombre: "Cereales", gramos: 50}, {nombre: "Chocolate Negro", gramos: 20}]}
    ]
};

// Validación del formulario antes de enviar
document.getElementById("user-form").addEventListener("submit", function(event) {
    // Recolectar datos del formulario
    const dni = document.getElementById("dni").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const edad = document.getElementById("edad").value;
    const objetivo = document.getElementById("objetivo").value;
    
    // Validaciones simples
    if (dni === "" || peso === "" || altura === "" || edad === "") {
        alert("Por favor, complete todos los campos.");
        event.preventDefault(); // Evita el envío si hay algún campo vacío
    } else if (dni.length < 7 || dni.length > 8) {
        alert("El DNI debe tener entre 7 y 8 caracteres.");
        event.preventDefault();
    } else if (peso <= 0 || altura <= 0 || edad <= 0) {
        alert("Ingrese valores válidos en los campos de peso, altura y edad.");
        event.preventDefault();
    } else {
        alert("Datos guardados correctamente.");
        // Aquí puedes integrar la lógica para enviar los datos a tu servidor o backend
    }
});

// Función para generar el menú personalizado según el día seleccionado
function generarMenu() {
    const dia = document.getElementById('dia-semana').value;
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = ''; // Limpiar el contenido anterior

    // Verificamos si el menú del día existe
    if (menu[dia]) {
        // Iteramos sobre cada comida del día
        menu[dia].forEach(plato => {
            const platoHTML = `
                <div class="comida">
                    <h3>${plato.nombre}</h3>
                    <p>${plato.descripcion}</p>
                    <p>Calorías: ${plato.calorias}</p>
                    <p>Proteínas: ${plato.proteinas}g</p>
                    <p>Carbohidratos: ${plato.carbohidratos}g</p>
                    <p>Grasas: ${plato.grasas}g</p>
                    <p>Ingredientes: ${plato.ingredientes.map(i => \`\${i.nombre} (\${i.gramos}g)\`).join(', ')}</p>
                </div>
            `;
            // Agregamos cada plato al contenedor de menús
            menuContainer.innerHTML += platoHTML;
        });
    } else {
        menuContainer.innerHTML = "<p>No hay menú disponible para este día.</p>";
    }
}

// Guardar el progreso de los datos del usuario mediante el DNI
function guardarProgreso(dni, peso, altura, edad, objetivo, restricciones) {
    // Aquí puedes implementar la lógica para guardar estos datos en una base de datos, localStorage, o en un servidor
    const usuario = {
        dni,
        peso,
        altura,
        edad,
        objetivo,
        restricciones
    };
    
    // Ejemplo básico de almacenamiento local
    localStorage.setItem('progresoUsuario', JSON.stringify(usuario));

    // Mensaje de confirmación
    console.log("Datos del usuario guardados:", usuario);
}

// Cargar el progreso al cargar la página
window.onload = function() {
    const progresoGuardado = localStorage.getItem('progresoUsuario');
    if (progresoGuardado) {
        const datosUsuario = JSON.parse(progresoGuardado);
        document.getElementById('dni').value = datosUsuario.dni;
        document.getElementById('peso').value = datosUsuario.peso;
        document.getElementById('altura').value = datosUsuario.altura;
        document.getElementById('edad').value = datosUsuario.edad;
        document.getElementById('objetivo').value = datosUsuario.objetivo;
        // Aquí podrías también marcar las restricciones alimentarias si las guardas
        alert("Progreso cargado correctamente.");
    }
}

// Función para manejar restricciones alimentarias
function obtenerRestricciones() {
    const restricciones = [];
    if (document.getElementById('sin-tacc').checked) restricciones.push('Sin TACC');
    if (document.getElementById('sin-azucar').checked) restricciones.push('Sin Azúcar');
    if (document.getElementById('vegetariano').checked) restricciones.push('Vegetariano');
    if (document.getElementById('vegano').checked) restricciones.push('Vegano');
    return restricciones;
}

// Asignar el evento de guardar progreso al formulario
document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Detener la acción predeterminada del formulario

    const dni = document.getElementById('dni').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const edad = document.getElementById('edad').value;
    const objetivo = document.getElementById('objetivo').value;
    const restricciones = obtenerRestricciones();

    // Llamar a la función de guardar progreso
    guardarProgreso(dni, peso, altura, edad, objetivo, restricciones);
});
