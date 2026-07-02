export async function obtenerUltimoTurno() {

    const respuesta = await fetch("http://localhost:3000/pantalla");

    return await respuesta.json();

}