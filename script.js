const apiKey = "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";  // Reemplaza con tu clave de OpenAI

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
