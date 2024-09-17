// Variable global para almacenar el gráfico de progreso
let graficoProgreso;

// Base de datos de recetas con restricciones alimenticias y objetivos de nutrición, con acompañamientos
const recetas = [
    // Desayunos
    { nombre: "Avena con Frutas", calorias: 350, proteinas: 10, carbohidratos: 60, grasas: 5, restricciones: ["sin gluten", "vegetariano"], tipo: "desayuno", objetivos: ["mantener_peso", "ganar_masa"] },
    { nombre: "Tostadas con Aguacate", calorias: 250, proteinas: 5, carbohidratos: 30, grasas: 15, restricciones: ["vegano", "sin gluten"], tipo: "desayuno", objetivos: ["mantener_peso", "perder_peso"] },
    { nombre: "Batido de Proteínas con Plátano", calorias: 300, proteinas: 25, carbohidratos: 30, grasas: 10, restricciones: ["sin gluten", "vegetariano"], tipo: "desayuno", objetivos: ["ganar_masa"] },
    { nombre: "Tortilla de Claras con Espinaca", calorias: 200, proteinas: 20, carbohidratos: 5, grasas: 5, restricciones: ["sin gluten", "vegetariano"], tipo: "desayuno", objetivos: ["mantener_peso", "perder_peso"] },
    { nombre: "Smoothie de Fresas y Yogur", calorias: 150, proteinas: 10, carbohidratos: 30, grasas: 2, restricciones: ["sin gluten"], tipo: "desayuno", objetivos: ["perder_peso"] },
    // Más recetas...
];

// Función para generar automáticamente el menú completo del día
function generarMenuAutomatico(caloriasDiarias, restriccionesUsuario, objetivo) {
    const comidasDiarias = ['desayuno', 'almuerzo', 'cena', 'snack'];
    let menuCompleto = `<h3>Menú del día:</h3><ul>`;

    comidasDiarias.forEach(comida => {
        const recetasFiltradas = recetas.filter(receta => {
            const cumpleRestricciones = restriccionesUsuario
                ? receta.restricciones.includes(restriccionesUsuario.toLowerCase())
                : true;
            const cumpleObjetivo = receta.objetivos.includes(objetivo);
            return receta.tipo === comida && cumpleRestricciones && cumpleObjetivo;
        });

        if (recetasFiltradas.length > 0) {
            const recetaSeleccionada = recetasFiltradas[Math.floor(Math.random() * recetasFiltradas.length)];
            menuCompleto += `<li><strong>${comida.charAt(0).toUpperCase() + comida.slice(1)}:</strong> ${recetaSeleccionada.nombre} (${recetaSeleccionada.calorias} calorías)`;
            if (recetaSeleccionada.acompanamiento) {
                menuCompleto += `, acompañado de ${recetaSeleccionada.acompanamiento}`;
            }
            menuCompleto += `</li>`;
        } else {
            menuCompleto += `<li><strong>${comida.charAt(0).toUpperCase() + comida.slice(1)}:</strong> No hay opciones disponibles para tus restricciones.</li>`;
        }
    });

    menuCompleto += `</ul>`;
    return menuCompleto;
}

// Función para manejar el envío del formulario de nutrición
const nutricionForm = document.getElementById("nutricionForm");
if (nutricionForm) {
    nutricionForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener los datos del formulario
        const nombre = document.getElementById("nombre").value;
        const edad = document.getElementById("edad").value;
        const peso = document.getElementById("peso").value;
        const altura = document.getElementById("altura").value;
        const genero = document.getElementById("genero").value;
        const objetivo = document.getElementById("objetivo").value;
        const restricciones = document.getElementById("restricciones").value;
        const comidasPorDia = 5; // Número fijo de comidas por día

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

        // Generar el menú automáticamente
        const menuGenerado = generarMenuAutomatico(caloriasDiarias, restricciones, objetivo);
        const resultadoDieta = document.getElementById("resultadoDieta");
        if (resultadoDieta) {
            resultadoDieta.innerHTML = menuGenerado;
        }
    });
}

// Función para manejar el envío del formulario de progreso y guardarlo en localStorage
const progresoForm = document.getElementById("progresoForm");
if (progresoForm) {
    progresoForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const dni = document.getElementById("dni").value;
        const peso = document.getElementById("peso").value;
        const medidaCintura = document.getElementById("medidaCintura").value;
        const medidaCadera = document.getElementById("medidaCadera").value;

        // Guardar el progreso en el localStorage, usando el DNI como clave
        const progresoUsuario = {
            peso: peso,
            medidaCintura: medidaCintura,
            medidaCadera: medidaCadera,
            fecha: new Date().toLocaleDateString() // Fecha del registro
        };

        let progresos = JSON.parse(localStorage.getItem(dni)) || [];
        progresos.push(progresoUsuario);
        localStorage.setItem(dni, JSON.stringify(progresos));

        // Mostrar el progreso en el gráfico
        mostrarGraficoProgreso(dni);
    });
}

// Función para cargar y mostrar el gráfico de progreso del usuario
function mostrarGraficoProgreso(dni) {
    const progresos = JSON.parse(localStorage.getItem(dni)) || [];

    const datosProgreso = {
        labels: progresos.map((progreso, index) => `Registro ${index + 1}`),
        datasets: [{
            label: 'Peso (kg)',
            data: progresos.map(progreso => progreso.peso),
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
        }]
    };

    if (graficoProgreso) {
        graficoProgreso.destroy();
    }

    const ctx = document.getElementById('graficoProgreso');
    if (ctx) {
        graficoProgreso = new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: datosProgreso,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    }
}

// Función para cargar el progreso del usuario al ingresar el DNI
const cargarProgresoForm = document.getElementById("cargarProgresoForm");
if (cargarProgresoForm) {
    cargarProgresoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const dni = document.getElementById("dniCargar").value;
        mostrarGraficoProgreso(dni);
    });
}


