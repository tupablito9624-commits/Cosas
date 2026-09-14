/********************************
 * PREGUNTAS
 ********************************/

const questions = [

{
    expediente: "001",
    title: "Identificación del sujeto",
    image: "assets/images/expediente.jpg",

    question: `
Hay una persona que lleva meses llamándote
de una forma determinada.

No es Patito.

No es Miss Torpe.

¿Quién eres?
    `,

    answers: [
        "Miss Quejica",
        "Patito",
        "Miss Torpe",
        "Agente Secreto"
    ],

    correct: 0,

    success: `
✅ Correcto.

Miss Quejica identificada.

PRIMERA PISTA DESBLOQUEADA.
    `
},

{
    expediente: "002",
    title: "Harry Potter",
    image: "assets/images/slytherin.jpg",

    question: `
¿A qué casa pertenece oficialmente
el señor que siempre tiene razón?
    `,

    answers: [
        "Ravenclaw",
        "Slytherin",
        "Hufflepuff",
        "Gryffindor"
    ],

    correct: 1,

    success: `
🐍 Correcto.

Slytherin identificado.
    `
},

{
    expediente: "003",
    title: "Primera misión",
    image: "assets/images/parquesur.jpg",

    question: `
📍 MISIÓN 1

Dirígete a la entrada principal
de Parquesur.

Cuando llegues pulsa:
    `,

    answers: [
        "He llegado"
    ],

    correct: 0,

    success: `
✅ Ubicación registrada.
    `
},

{
    expediente: "004",
    title: "Star Wars",
    image: "assets/images/starwars.jpg",

    question: `
Tres películas.

Un sofá.

Dos personas.

¿Qué saga vimos juntos?
    `,

    answers: [
        "Avatar",
        "Crepúsculo",
        "Star Wars",
        "Fast & Furious"
    ],

    correct: 2,

    success: `
⭐ Correcto.

Los archivos demuestran
bastantes horas de sofá.
    `
},

{
    expediente: "005",
    title: "Investigación científica",
    image: "assets/images/razon.jpg",

    question: `
Según nuestros datos:

Pablo...
    `,

    answers: [
        "Tiene razón a veces",
        "Cree que tiene razón",
        "Dice que tiene razón",
        "Todas las anteriores"
    ],

    correct: 3,

    success: `
✅ Los científicos siguen estudiando
este fenómeno.
    `
},

{
    expediente: "006",
    title: "Datos históricos",
    image: "assets/images/razon.jpg",

    question: `
¿Con qué frecuencia admite Yaiza
que Pablo tiene razón?
    `,

    answers: [
        "Nunca",
        "Prácticamente nunca",
        "Error 404",
        "Todas las anteriores"
    ],

    correct: 3,

    success: `
✅ Los registros coinciden.
    `
},

{
    expediente: "007",
    title: "Alias secretos",
    image: "assets/images/expediente.jpg",

    question: `
¿Cuál de estos nombres pertenece
oficialmente al expediente?
    `,

    answers: [
        "Miss Quejica",
        "Darth Patito",
        "Agente 47",
        "Muggle Supremo"
    ],

    correct: 0,

    success: `
✅ Alias confirmado.
    `
},

{
    expediente: "008",
    title: "Vampiros",
    image: "assets/images/vampiros.jpg",

    question: `
¿Quién sobreviviría mejor
a una tarde completa
con Miss Quejica?
    `,

    answers: [
        "Damon",
        "Stefan",
        "Los dos",
        "Ninguno"
    ],

    correct: 3,

    success: `
😂 Resultado esperado.
    `
},

{
    expediente: "009",
    title: "Segunda misión",
    image: "assets/images/lago.jpg",

    question: `
📍 MISIÓN 2

Dirígete a la zona del lago.

Cuando llegues confirma tu ubicación.
    `,

    answers: [
        "Estoy en el lago"
    ],

    correct: 0,

    success: `
✅ Posición confirmada.
    `
},

{
    expediente: "010",
    title: "The Prestige",
    image: "assets/images/prestige.jpg",

    question: `
¿Qué película trata sobre
dos magos enfrentados?
    `,

    answers: [
        "El truco FInal",
        "Star Wars",
        "Ahora me ves",
        "Harry Potter"
    ],

    correct: 0,

    success: `
🎩 Correcto.
    `
},

{
    expediente: "011",
    title: "Memoria histórica",
    image: "assets/images/recuerdos.jpg",

    question: `
Completa la frase:

"Eres..."
    `,

    answers: [
        "Maravilloso",
        "Elegante",
        "Idiota",
        "Perfecto"
    ],

    correct: 2,

    success: `
😂 Correctísimo.
    `
},

{
    expediente: "012",
    title: "Patito",
    image: "assets/images/patito.jpg",

    question: `
¿Quién ha recibido más veces
el sobrenombre de Gilipollas?
    `,

    answers: [
        "Pablo",
        "Yaiza",
        "Damon",
        "Nadie"
    ],

    correct: 1,

    success: `
🦆 Expediente actualizado.
    `
},

{
    expediente: "013",
    title: "Tercera misión",
    image: "assets/images/cine.jpg",

    question: `
📍 MISIÓN 3

Dirígete a la zona de cines.

Cuando llegues continúa.
    `,

    answers: [
        "He llegado al cine"
    ],

    correct: 0,

    success: `
🎬 Ubicación registrada.
    `
},

{
    expediente: "014",
    title: "Películas",
    image: "assets/images/cine.jpg",

    question: `
¿Cuántas películas hemos comentado
durante estos meses?
    `,

    answers: [
        "Muchas",
        "Demasiadas",
        "Muchísimas",
        "Todas las anteriores"
    ],

    correct: 3,

    success: `
✅ Datos verificados.
    `
},

{
    expediente: "015",
    title: "Observación",
    image: "assets/images/recuerdos.jpg",

    question: `
¿Qué es lo mejor de pasar
tiempo juntos?
    `,

    answers: [
        "Las películas",
        "Las risas",
        "Los abrazos",
        "Todo"
    ],

    correct: 3,

    success: `
❤️ Respuesta registrada.
    `
},

{
    expediente: "016",
    title: "Reflexión",
    image: "assets/images/recuerdos.jpg",

    question: `
Si tuvieras que describir
estos meses con una palabra...
    `,

    answers: [
        "Bonitos",
        "Especiales",
        "Divertidos",
        "Inesperados"
    ],

    correct: 1,

    success: `
❤️ Respuesta guardada.
    `
},

{
    expediente: "017",
    title: "Última comprobación",
    image: "assets/images/final.jpg",

    question: `
¿Preparada para la misión final?
    `,

    answers: [
        "Sí"
    ],

    correct: 0,

    success: `
✅ Acceso autorizado.
    `
},

{
    expediente: "018",
    title: "Expediente Final",
    image: "assets/images/casacarmen.jpg",

    question: `
7 meses.

Muchas películas.

Muchos abrazos.

Muchas bromas.

Muchos "idiota".

Y una pregunta que esta página
no puede hacer.
    `,

    answers: [
        "Descubrir misión final"
    ],

    correct: 0,

    success: `
📍 CASA CARMEN

Tu última misión te espera allí.
    `
}

];

/********************************
 * VARIABLES
 ********************************/

let currentQuestion = 0;
let attempts = 0;
let failedQuestions = 0;

// Recuperar progreso guardado

const savedQuestion =
    localStorage.getItem("currentQuestion");

if (savedQuestion !== null) {

    currentQuestion =
        parseInt(savedQuestion);

}

const startBtn = document.getElementById("startBtn");
const expediente = document.getElementById("expediente");
const title = document.getElementById("title");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const continueBtn = document.getElementById("continueBtn");
const questionImage = document.getElementById("questionImage");

/********************************
 * INICIO
 ********************************/

startBtn.addEventListener("click", () => {

    document
        .getElementById("introScreen")
        .classList.add("hidden");

    document
        .getElementById("app")
        .classList.remove("hidden");

    renderQuestion();

});

/********************************
 * PROGRESO
 ********************************/

function updateProgress() {

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";
}

/********************************
 * CONTADOR
 ********************************/

function updateCounter() {

    document.getElementById("counter").innerText =
        `Prueba ${currentQuestion + 1} de ${questions.length}`;
}

/********************************
 * MOSTRAR PREGUNTA
 ********************************/

function renderQuestion() {

    // Guardar progreso actual

    localStorage.setItem(
        "currentQuestion",
        currentQuestion
    );

    attempts = 0;

    const q = questions[currentQuestion];

    expediente.innerText =
        `EXPEDIENTE #${q.expediente}`;

    title.innerText =
        q.title;

    if (q.image) {

        questionImage.src =
            q.image;

        questionImage.style.display =
            "block";

    } else {

        questionImage.style.display =
            "none";
    }

    question.innerText =
        q.question;

    feedback.innerHTML = "";

    continueBtn.style.display =
        "none";

    answers.innerHTML = "";

    q.answers.forEach((answer, index) => {

        const btn =
            document.createElement("button");

        btn.classList.add("answer");

        btn.innerText =
            answer;

        btn.addEventListener("click", () => {

            answerQuestion(index);

        });

        answers.appendChild(btn);

    });

    updateProgress();
    updateCounter();
}

/********************************
 * RESPUESTA
 ********************************/

function answerQuestion(index) {

    const q =
        questions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer");

    // RESPUESTA CORRECTA

    if (index === q.correct) {

        buttons[index]
            .classList.add("correct");

        buttons.forEach(btn => {
            btn.disabled = true;
        });

        feedback.innerHTML =
            q.success;

        continueBtn.style.display =
            "block";

        return;
    }

    // RESPUESTA INCORRECTA

    attempts++;

    buttons[index]
        .classList.add("wrong");

    buttons[index]
        .disabled = true;

    if (attempts >= 3) {

        failedQuestions++;

        buttons.forEach(btn => {
            btn.disabled = true;
        });

        feedback.innerHTML = `
❌ Has agotado los 3 intentos.

La respuesta correcta era:

<strong>${q.answers[q.correct]}</strong>

Fallos acumulados: ${failedQuestions}
        `;

        continueBtn.style.display =
            "block";

        return;
    }

    feedback.innerHTML = `
❌ Incorrecto.

Intento ${attempts} de 3.

Vuelve a intentarlo.
    `;
}

/********************************
 * CONTINUAR
 ********************************/

continueBtn.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        localStorage.removeItem(
            "currentQuestion"
        );

        document.querySelector(".card").innerHTML = `

            <h1>MISIÓN COMPLETADA</h1>

            <br>

            <p>
                Expedientes completados:
                ${questions.length}
            </p>

            <br>

            <p>
                Fallos registrados:
                ${failedQuestions}
            </p>

            <br>

            <p>
                7 meses.
            </p>

            <br>

            <p>
                Muchas películas.
            </p>

            <br>

            <p>
                Muchos abrazos.
            </p>

            <br>

            <p>
                Muchas bromas.
            </p>

            <br>

            <p>
                Muchos momentos.
            </p>

            <br>

            <h2>📍 CASA CARMEN</h2>

            <br>

            <p>
                Hay una última pregunta.
            </p>

            <br>

            <p>
                Y no puede responderse
                desde una página web.
            </p>

        `;

        return;
    }

    renderQuestion();

});

/********************************
 * REANUDAR AUTOMÁTICAMENTE
 ********************************/

if (currentQuestion > 0) {

    document
        .getElementById("introScreen")
        .classList.add("hidden");

    document
        .getElementById("app")
        .classList.remove("hidden");

    renderQuestion();
}

/********************************
 * DEBUG
 ********************************/

console.log("Expediente 7 cargado correctamente");