import express from "express";

const app = express();
const PORT = 3000;

// Configuração do EJS como motor de visualização
app.set("view engine", "ejs");
app.set("views", "./views");

// Array de times conforme especificações da atividade
const times = [
    { id: 1, nome: "Grêmio", estadio: "Arena", cidade: "Porto Alegre" },
    { id: 2, nome: "Juventude", estadio: "Alfredo Jaconi", cidade: "Caxias" },
    { id: 3, nome: "Barcelona", estadio: "Camp Nou", cidade: "Cataluña" }
];

// Rota GET / -> Renderiza index.ejs com mensagem de boas-vindas
app.get("/", (req, res) => {
    res.render("index", { mensagem: "Bem-vindo ao Catálogo de Times Esportivos!" });
});

// Rota GET /times -> Renderiza times.ejs passando a lista de times
app.get("/times", (req, res) => {
    res.render("times", { times });
});

// Rota GET /times/:id -> Encontra o time pelo ID e renderiza detalhe.ejs
app.get("/times/:id", (req, res) => {
    const idParam = parseInt(req.params.id, 10);
    const time = times.find(t => t.id === idParam);

    if (!time) {
        return res.status(404).send(`
            <h1>Time não encontrado</h1>
            <p>O time com ID ${req.params.id} não foi localizado em nossa base de dados.</p>
            <a href="/times">Voltar para a lista de times</a>
        `);
    }

    res.render("detalhe", { time });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
