const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Bem-vindo ao site da Marvel e DC!!");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})
