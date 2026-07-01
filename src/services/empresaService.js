import api from "../config/api";

export async function validarEmpresa(codigo) {

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

    // Luego:
    // return (await api.post("/empresa/validar", { codigo })).data;
}