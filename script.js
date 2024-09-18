document.getElementById('menu-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturar los datos del formulario
    const edad = document.getElementById('edad').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const sexo = document.getElementById('sexo').value;
    const actividad = document.getElementById('actividad').value;
    const restricciones = Array.from(document.querySelectorAll('input[name="restriccion"]:checked'))
                               .map(checkbox => checkbox.value);
    const dia = document.getElementById('dia').value;

    // Lógica para generar el menú personalizado (ejemplo básico)
    let menu = `Menú personalizado para ${dia}: \n`;
    menu += `Edad: ${edad}, Altura: ${altura}cm, Peso: ${peso}kg, Sexo: ${sexo}\n`;
    menu += `Actividad física: ${actividad}\n`;
    menu += `Restricciones alimenticias: ${restricciones.length ? restricciones.join(', ') : 'Ninguna'}\n`;

    // Ejemplo simple de menú (puedes adaptar esta lógica según tus necesidades)
    if (actividad === 'musculacion') {
        menu += 'Desayuno: Avena con frutas y batido de proteínas.\n';
        menu += 'Almuerzo: Pollo a la plancha con arroz integral y brócoli.\n';
        menu += 'Cena: Pescado al horno con ensalada.\n';
    } else if (actividad === 'crossfit') {
        menu += 'Desayuno: Tostadas integrales con aguacate y huevo.\n';
        menu += 'Almuerzo: Ensalada de quinoa con garbanzos.\n';
        menu += 'Cena: Pollo a la plancha con verduras.\n';
    } else if (actividad === 'funcional') {
        menu += 'Desayuno: Batido de frutas con proteína vegana.\n';
        menu += 'Almuerzo: Ensalada de lentejas con vegetales.\n';
        menu += 'Cena: Tofu con arroz integral y espinacas.\n';
    }

    // Mostrar el resultado en la página
    document.getElementById('resultado-menu').textContent = menu;
});
