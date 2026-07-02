export async function llamarSiguiente(tipo) {

    const respuesta = await fetch("http://localhost:3000/llamar", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            tipo
        })

    });

    return await respuesta.json();

}