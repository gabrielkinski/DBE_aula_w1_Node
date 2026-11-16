import express from "express";
import Instrumento from "./models/Instrumento.js";

const app = express();
const PORT = 3000;

// Configuração do EJS como motor de visualização
app.set("view engine", "ejs");
app.set("views", "./views");

// Middleware para decodificar dados enviados por formulários (POST)
app.use(express.urlencoded({ extended: true }));

// Rota raiz: redireciona para a listagem de instrumentos
app.get("/", (req, res) => {
    res.redirect("/instrumento/lst");
});

// Rota GET: exibe o formulário de cadastro de instrumento
app.get("/instrumento/add", (req, res) => {
    res.render("instrumento/add");
});

// Rota POST: recebe os dados do formulário e grava no MongoDB
app.post("/instrumento/add/ok", async (req, res) => {
    try {
        const { nome, fabricante, preco, tipo } = req.body;
        await Instrumento.create({ nome, fabricante, preco, tipo });
        res.render("instrumento/addok", { nome });
    } catch (erro) {
        console.error("Erro ao cadastrar instrumento:", erro);
        res.status(500).send(`
            <h2>Erro ao cadastrar instrumento</h2>
            <p>${erro.message}</p>
            <a href="/instrumento/add">Tentar novamente</a> | <a href="/instrumento/lst">Voltar para a lista</a>
        `);
    }
});

// Rota GET: consulta os instrumentos no MongoDB e exibe no template lst.ejs
app.get("/instrumento/lst", async (req, res) => {
    try {
        const instrumentos = await Instrumento.find();
        res.render("instrumento/lst", { instrumentos });
    } catch (erro) {
        console.error("Erro ao listar instrumentos:", erro);
        res.status(500).send(`
            <h2>Erro ao carregar lista de instrumentos</h2>
            <p>${erro.message}</p>
            <a href="/">Tentar novamente</a>
        `);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
