const apiKey = "TU_OPENAI_API_KEY";  // Reemplaza con tu clave de OpenAI

async function obtenerRespuesta() {
    let pregunta = document.getElementById("pregunta").value;
    let respuestaTexto = document.getElementById("respuesta");

    respuestaTexto.innerHTML = "Cargando...";

    try {
        let respuesta = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: pregunta }]
            })
        });

        let datos = await respuesta.json();
        respuestaTexto.innerHTML = datos.choices[0].message.content;
    } catch (error) {
        respuestaTexto.innerHTML = "Error al obtener respuesta.";
        console.error(error);
    }
}
