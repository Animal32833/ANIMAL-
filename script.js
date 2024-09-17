// Variable global para almacenar el gráfico de progreso
let graficoProgreso;

// Función para calcular la TMB (Tasa Metabólica Basal)
function calcularTMB(peso, altura, edad, genero) {
    if (genero === 'masculino') {
        return Math.round(88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * edad));
    } else {
        return Math.round(447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * edad));
    }
}

// Función para calcular la ingesta de agua recomendada
function calcularIngestaAgua(peso) {
    return (peso * 0.035).toFixed(2); // 35 ml por kg de peso
}

// Base de datos de recetas con restricciones alimenticias y objetivos de nutrición, con acompañamientos
const recetas = [
    // Desayunos
    { nombre: "Avena con Frutas", calorias: 350, proteinas: 10, carbohidratos: 60, grasas: 5, restricciones: ["sin gluten", "vegetariano"], tipo: "desayuno", objetivos: ["mantener_peso", "ganar_masa"], ingredientes: [{ nombre: "Avena", gramos: 50 }, { nombre: "Frutas Mixtas", gramos: 100 }] },
    { nombre: "Tostadas con Aguacate", calorias: 250, proteinas: 5, carbohidratos: 30, grasas: 15, restricciones: ["vegano", "sin gluten"], tipo: "desayuno", objetivos: ["mantener_peso", "perder_peso"], ingredientes: [{ nombre: "Tostadas Integrales", gramos: 60 }, { nombre: "Aguacate", gramos: 100 }] },
    { nombre: "Batido de Proteínas con Plátano", calorias: 300, proteinas: 25, carbohidratos: 30, grasas: 10, restricciones: ["sin gluten", "vegetariano"], tipo: "desayuno", objetivos: ["ganar_masa"], ingredientes: [{ nombre: "Proteína en Polvo", gramos: 30 }, { nombre: "Plátano", gramos: 100 }, { nombre: "Leche Almendra", mililitros: 250 }] },
    { nombre: "Tortilla de Claras con Espinaca", calorias: 200, proteinas: 20, carbohidratos: 5, grasas: 5, restricciones: ["sin gluten", "vegetariano"], tipo: "desayuno", objetivos: ["mantener_peso", "perder_peso"], ingredientes: [{ nombre: "Claras de Huevo", gramos: 100 }, { nombre: "Espinaca", gramos: 50 }] },
    { nombre: "Smoothie de Fresas y Yogur", calorias: 150, proteinas: 10, carbohidratos: 30, grasas: 2, restricciones: ["sin gluten"], tipo: "desayuno", objetivos: ["perder_peso"], ingredientes: [{ nombre: "Fresas", gramos: 100 }, { nombre: "Yogur", gramos: 100 }, { nombre: "Leche Almendra", mililitros: 250 }] },
    { nombre: "Pan Integral con Mermelada", calorias: 180, proteinas: 6, carbohidratos: 35, grasas: 3, restricciones: ["vegetariano"], tipo: "desayuno", objetivos: ["mantener_peso"], ingredientes: [{ nombre: "Pan Integral", gramos: 60 }, { nombre: "Mermelada sin Azúcar", gramos: 30 }] },
    { nombre: "Huevos Revueltos con Jamón", calorias: 300, proteinas: 20, carbohidratos: 5, grasas: 20, restricciones: ["sin gluten"], tipo: "desayuno", objetivos: ["ganar_masa"], ingredientes: [{ nombre: "Huevos", unidades: 2 }, { nombre: "Jamón de Pavo", gramos: 50 }] },
    { nombre: "Porridge de Avena con Frutos Rojos", calorias: 350, proteinas: 12, carbohidratos: 60, grasas: 5, restricciones: ["vegetariano"], tipo: "desayuno", objetivos: ["mantener_peso", "ganar_masa"], ingredientes: [{ nombre: "Avena", gramos: 50 }, { nombre: "Frutos Rojos", gramos: 80 }] },
    { nombre: "Yogur Griego con Miel", calorias: 250, proteinas: 15, carbohidratos: 30, grasas: 5, restricciones: ["vegetariano"], tipo: "desayuno", objetivos: ["mantener_peso", "ganar_masa"], ingredientes: [{ nombre: "Yogur Griego", gramos: 150 }, { nombre: "Miel", gramos: 20 }] },
    { nombre: "Bagel Integral con Queso Crema", calorias: 400, proteinas: 15, carbohidratos: 60, grasas: 15, restricciones: ["vegetariano"], tipo: "desayuno", objetivos: ["ganar_masa"], ingredientes: [{ nombre: "Bagel Integral", gramos: 100 }, { nombre: "Queso Crema", gramos: 50 }] },

    // Almuerzos
    { nombre: "Pollo a la Parrilla con Arroz", calorias: 500, proteinas: 40, carbohidratos: 60, grasas: 10, restricciones: ["sin gluten"], tipo: "almuerzo", objetivos: ["mantener_peso", "ganar_masa"], acompanamiento: "Ensalada de verduras", ingredientes: [{ nombre: "Pollo", gramos: 200 }, { nombre: "Arroz", gramos: 150 }] },
    { nombre: "Ensalada de Quinoa y Vegetales", calorias: 400, proteinas: 15, carbohidratos: 60, grasas: 10, restricciones: ["vegano", "sin gluten"], tipo: "almuerzo", objetivos: ["perder_peso", "mantener_peso"], acompanamiento: "Pan sin gluten", ingredientes: [{ nombre: "Quinoa", gramos: 100 }, { nombre: "Vegetales", gramos: 150 }] },
    { nombre: "Wrap de Pollo", calorias: 450, proteinas: 35, carbohidratos: 45, grasas: 15, restricciones: ["sin gluten"], tipo: "almuerzo", objetivos: ["mantener_peso", "ganar_masa"], acompanamiento: "Papas asadas", ingredientes: [{ nombre: "Pollo", gramos: 100 }, { nombre: "Tortilla de maíz", gramos: 50 }, { nombre: "Lechuga", gramos: 30 }] },
    { nombre: "Tacos de Pavo con Guacamole", calorias: 500, proteinas: 40, carbohidratos: 50, grasas: 15, restricciones: ["sin gluten"], tipo: "almuerzo", objetivos: ["ganar_masa"], acompanamiento: "Arroz integral", ingredientes: [{ nombre: "Pavo", gramos: 100 }, { nombre: "Guacamole", gramos: 50 }, { nombre: "Tortillas de maíz", unidades: 2 }] },
    { nombre: "Bowl de Atún con Vegetales", calorias: 450, proteinas: 40, carbohidratos: 40, grasas: 15, restricciones: ["sin gluten"], tipo: "almuerzo", objetivos: ["mantener_peso", "ganar_masa"], acompanamiento: "Ensalada mixta", ingredientes: [{ nombre: "Atún", gramos: 150 }, { nombre: "Arroz integral", gramos: 100 }, { nombre: "Vegetales", gramos: 100 }] },
    { nombre: "Lasaña de Berenjena", calorias: 400, proteinas: 30, carbohidratos: 30, grasas: 15, restricciones: ["vegetariano"], tipo: "almuerzo", objetivos: ["perder_peso", "mantener_peso"], acompanamiento: "Pan integral", ingredientes: [{ nombre: "Berenjena", gramos: 150 }, { nombre: "Queso", gramos: 100 }] },
    { nombre: "Pechuga de Pavo con Verduras", calorias: 350, proteinas: 45, carbohidratos: 20, grasas: 10, restricciones: ["sin gluten"], tipo: "almuerzo", objetivos: ["perder_peso", "mantener_peso"], acompanamiento: "Puré de batatas", ingredientes: [{ nombre: "Pechuga de pavo", gramos: 150 }, { nombre: "Batatas", gramos: 100 }] },
    { nombre: "Arroz Integral con Frijoles", calorias: 450, proteinas: 15, carbohidratos: 80, grasas: 5, restricciones: ["vegano", "sin gluten"], tipo: "almuerzo", objetivos: ["mantener_peso"], acompanamiento: "Ensalada verde", ingredientes: [{ nombre: "Arroz Integral", gramos: 100 }, { nombre: "Frijoles", gramos: 100 }] },
    { nombre: "Sándwich de Pollo a la Parrilla", calorias: 500, proteinas: 35, carbohidratos: 50, grasas: 15, restricciones: ["sin gluten"], tipo: "almuerzo", objetivos: ["mantener_peso", "ganar_masa"], acompanamiento: "Papas horneadas", ingredientes: [{ nombre: "Pollo", gramos: 100 }, { nombre: "Pan sin gluten", gramos: 50 }, { nombre: "Lechuga", gramos: 30 }] },
    { nombre: "Hamburguesa de Lentejas", calorias: 400, proteinas: 20, carbohidratos: 60, grasas: 10, restricciones: ["vegano", "sin gluten"], tipo: "almuerzo", objetivos: ["mantener_peso", "perder_peso"], acompanamiento: "Puré de papa", ingredientes: [{ nombre: "Lentejas", gramos: 150 }, { nombre: "Pan sin gluten", gramos: 50 }] },

    // Cenas
    { nombre: "Salmón al Horno", calorias: 450, proteinas: 40, carbohidratos: 5, grasas: 30, restricciones: ["sin gluten", "pescatariano"], tipo: "cena", objetivos: ["mantener_peso", "ganar_masa"], acompanamiento: "Espárragos asados", ingredientes: [{ nombre: "Salmón", gramos: 150 }, { nombre: "Espárragos", gramos: 100 }] },
    { nombre: "Tofu Salteado con Verduras", calorias: 350, proteinas: 20, carbohidratos: 30, grasas: 10, restricciones: ["vegano", "sin gluten"], tipo: "cena", objetivos: ["perder_peso", "mantener_peso"], acompanamiento: "Arroz integral", ingredientes: [{ nombre: "Tofu", gramos: 150 }, { nombre: "Verduras", gramos: 100 }] },
    { nombre: "Pechuga de Pollo Asada", calorias: 400, proteinas: 45, carbohidratos: 20, grasas: 10, restricciones: ["sin gluten"], tipo: "cena", objetivos: ["mantener_peso", "ganar_masa"], acompanamiento: "Verduras al vapor", ingredientes: [{ nombre: "Pechuga de Pollo", gramos: 150 }, { nombre: "Verduras", gramos: 100 }] },
    { nombre: "Pizza de Coliflor", calorias: 400, proteinas: 20, carbohidratos: 40, grasas: 15, restricciones: ["vegetariano", "sin gluten"], tipo: "cena", objetivos: ["mantener_peso", "perder_peso"], acompanamiento: "Ensalada mixta", ingredientes: [{ nombre: "Coliflor", gramos: 150 }, { nombre: "Queso", gramos: 100 }] },
    { nombre: "Tilapia al Limón", calorias: 300, proteinas: 35, carbohidratos: 5, grasas: 15, restricciones: ["sin gluten", "pescatariano"], tipo: "cena", objetivos: ["mantener_peso", "perder_peso"], acompanamiento: "Arroz integral", ingredientes: [{ nombre: "Tilapia", gramos: 150 }, { nombre: "Arroz integral", gramos: 100 }] },

    // Snacks
    { nombre: "Yogur con Almendras", calorias: 200, proteinas: 10, carbohidratos: 20, grasas: 10, restricciones: ["sin gluten", "vegetariano"], tipo: "snack", objetivos: ["mantener_peso"], ingredientes: [{ nombre: "Yogur", gramos: 100 }, { nombre: "Almendras", gramos: 30 }] },
    { nombre: "Frutas con Mantequilla de Almendra", calorias: 250, proteinas: 5, carbohidratos: 40, grasas: 10, restricciones: ["vegano", "sin gluten"], tipo: "snack", objetivos: ["mantener_peso", "perder_peso"], ingredientes: [{ nombre: "Frutas", gramos: 150 }, { nombre: "Mantequilla de Almendra", gramos: 20 }] },
    { nombre: "Barra de Proteína Casera", calorias: 300, proteinas: 25, carbohidratos: 30, grasas: 15, restricciones: ["sin gluten"], tipo: "snack", objetivos: ["ganar_masa"], ingredientes: [{ nombre: "Proteína en Polvo", gramos: 30 }, { nombre: "Avena", gramos: 50 }, { nombre: "Mantequilla de Almendra", gramos: 30 }] },
    { nombre: "Hummus con Palitos de Zanahoria", calorias: 150, proteinas: 5, carbohidratos: 15, grasas: 5, restricciones: ["vegano", "sin gluten"], tipo: "snack", objetivos: ["mantener_peso", "perder_peso"], ingredientes: [{ nombre: "Hummus", gramos: 50 }, { nombre: "Zanahoria", gramos: 100 }] },
    { nombre: "Nueces Mixtas", calorias: 250, proteinas: 5, carbohidratos: 10, grasas: 20, restricciones: ["vegano", "sin gluten"], tipo: "snack", objetivos: ["mantener_peso", "ganar_masa"], ingredientes: [{ nombre: "Nueces Mixtas", gramos: 50 }] }
];

// Función para generar automáticamente el menú completo del día con botón para información nutricional
function generarMenuAutomatico(caloriasDiarias, restriccionesUsuario, objetivo) {
    const comidasDiarias = ['desayuno', 'almuerzo', 'cena', 'snack'];
    let menuCompleto = `<h3>Menú del día:</h3><div class="menu-container">`;

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
            menuCompleto += `
                <div>
                    <p><strong>${comida.charAt(0).toUpperCase() + comida.slice(1)}:</strong> ${recetaSeleccionada.nombre} (${recetaSeleccionada.calorias} calorías)</p>
                    <button class="toggle-button">Ver información nutricional</button>
                    <div class="nutrition-info" style="display: none;">
                        <p><strong>Proteínas:</strong> ${recetaSeleccionada.proteinas} g</p>
                        <p><strong>Carbohidratos:</strong> ${recetaSeleccionada.carbohidratos} g</p>
                        <p><strong>Grasas:</strong> ${recetaSeleccionada.grasas} g</p>
                        <p><strong>Ingredientes:</strong></p>
                        <ul>
                            ${recetaSeleccionada.ingredientes.map(ing => `<li>${ing.nombre}: ${ing.gramos || ing.unidades || ing.mililitros}g</li>`).join('')}
                        </ul>
                    </div>
                </div>`;
        } else {
            menuCompleto += `<p><strong>${comida.charAt(0).toUpperCase() + comida.slice(1)}:</strong> No hay opciones disponibles para tus restricciones.</p>`;
        }
    });

    menuCompleto += `</div>`;
    return menuCompleto;
}

// Manejar el envío del formulario de nutrición
const nutricionForm = document.getElementById("nutricionForm");
if (nutricionForm) {
    nutricionForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const edad = document.getElementById("edad").value;
        const peso = document.getElementById("peso").value;
        const altura = document.getElementById("altura").value;
        const genero = document.getElementById("genero").value;
        const objetivo = document.getElementById("objetivo").value;
        const restricciones = document.getElementById("restricciones").value;

        const bmr = calcularTMB(peso, altura, edad, genero);
        let caloriasDiarias;
        if (objetivo === "perder_peso") {
            caloriasDiarias = bmr * 1.2 - 500;
        } else if (objetivo === "ganar_masa") {
            caloriasDiarias = bmr * 1.5 + 300;
        } else {
            caloriasDiarias = bmr * 1.2;
        }

        const ingestaAgua = calcularIngestaAgua(peso);
        const resultadoAgua = document.getElementById("resultadoAgua");
        if (resultadoAgua) {
            resultadoAgua.textContent = `Te recomendamos beber ${ingestaAgua} litros de agua al día.`;
        }

        const menuGenerado = generarMenuAutomatico(caloriasDiarias, restricciones, objetivo);
        const resultadoDieta = document.getElementById("resultadoDieta");
        if (resultadoDieta) {
            resultadoDieta.innerHTML = menuGenerado;
        }

        // Asignar comportamiento a los botones para ver la información nutricional
        document.querySelectorAll('.toggle-button').forEach(button => {
            button.addEventListener('click', () => {
                const info = button.nextElementSibling;
                info.style.display = info.style.display === 'block' ? 'none' : 'block';
            });
        });
    });
}

// Función para manejar el progreso
const progresoForm = document.getElementById("progresoForm");
if (progresoForm) {
    progresoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const dni = document.getElementById("dni").value;
        const peso = document.getElementById("peso").value;
        const medidaCintura = document.getElementById("medidaCintura").value;
        const medidaCadera = document.getElementById("medidaCadera").value;

        const progresoUsuario = {
            peso,
            medidaCintura,
            medidaCadera,
            fecha: new Date().toLocaleDateString()
        };

        let progresos = JSON.parse(localStorage.getItem(dni)) || [];
        progresos.push(progresoUsuario);
        localStorage.setItem(dni, JSON.stringify(progresos));

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

    const ctx = document.getElementById('graficoProgreso');
    if (graficoProgreso) {
        graficoProgreso.destroy();
    }
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

// Cargar el progreso por DNI
const cargarProgresoForm = document.getElementById("cargarProgresoForm");
if (cargarProgresoForm) {
    cargarProgresoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const dni = document.getElementById("dniCargar").value;
        mostrarGraficoProgreso(dni);
    });
}
