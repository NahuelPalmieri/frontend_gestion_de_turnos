import api from "../config/api";

export async function login(usuario, password) {

    if (usuario === "admin" && password === "1234") {
        return {
            ok: true,
            token: "TOKEN_TEMPORAL",
            usuario: {
                id: 1,
                nombre: "Administrador",
                rol: "ADMIN",
            },
        };
    }

    return {
        ok: false,
        mensaje: "Usuario o contraseña incorrectos",
    };
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