const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend funcionando");
});

app.get("/login", (req, res) => {
    res.send("La ruta login existe");
});

app.post("/login", (req, res) => {
    const { usuario, password } = req.body;

    if (usuario === "admin" && password === "1234") {
        return res.json({
            ok: true,
            usuario: {
                nombre: "Administrador",
            },
        });
    }

    return res.json({
        ok: false,
        mensaje: "Usuario o contraseña incorrectos",
    });
});

app.listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000");
});