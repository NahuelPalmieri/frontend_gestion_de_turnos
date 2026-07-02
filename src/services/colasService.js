export async function obtenerColas() {

    const respuesta = await fetch("http://localhost:3000/colas");

    return await respuesta.json();

}