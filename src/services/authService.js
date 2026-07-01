import api from "../config/api";

export async function login(usuario, password) {

    const respuesta = await fetch("http://localhost:3000/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            usuario,
            password
        })

    });

    return await respuesta.json();
}

export async function validarCodigoEmpresa(codigo) {

    const respuesta = await fetch("http://localhost:3000/empresa", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            codigo
        })

    });

    return await respuesta.json();

}