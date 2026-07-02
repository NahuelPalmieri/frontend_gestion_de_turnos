export async function solicitarTurno(dni, tramite) {

    const respuesta = await fetch("http://localhost:3000/turno", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            dni,
            tramite

        })

    });

    return await respuesta.json();

}