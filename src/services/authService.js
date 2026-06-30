import { api } from "./api";

/**
 * Login del usuario.
 * Por ahora simulado.
 * Más adelante usará:
 *
 * return api.post("/auth/login", {
 *     usuario,
 *     contrasena,
 * });
 */
export async function login(usuario, contrasena) {

    // ======== SIMULACIÓN ========

    if (
        usuario === "admin" &&
        contrasena === "1234"
    ) {
        return {
            ok: true,
            usuario: {
                id: 1,
                nombre: "Administrador",
                rol: "admin",
            },
        };
    }

    return {
        ok: false,
        mensaje: "Usuario o contraseña incorrectos.",
    };
}

/**
 * Validación del código de empresa.
 * Más adelante consultará al backend.
 */
export async function validarCodigoEmpresa(codigo) {

    // ======== SIMULACIÓN ========

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
        mensaje: "Código de empresa incorrecto.",
    };
}