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

    if (codigo === "123456") {
        return {
            ok: true,
            empresa: {
                id: 1,
                nombre: "Sucursal Centro",
                codigo,
            },
        };
    }

    return {
        ok: false,
        mensaje: "Código incorrecto",
    };
}