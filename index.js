const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Catálogo de Heróis</title>
        </head>
        <body>
            <h1>Catálogo de Heróis</h1>
            <p>Seja bem-vindo ao catálogo definitivo de heróis da Marvel e DC!</p>

            <h2>Editoras</h2>
            <ul>
                <li><a href="/marvel">Universo Marvel</a></li>
                <li><a href="/dc">Universo DC</a></li>
            </ul>

            <hr>

            <h2>Personagens</h2>
            <ul>
                <li><a href="/marvel/homem-de-ferro">Homem de Ferro (Marvel)</a></li>
                <li><a href="/marvel/homem-aranha">Homem-Aranha (Marvel)</a></li>
                <li><a href="/dc/batman">Batman (DC)</a></li>
                <li><a href="/dc/superman">Superman (DC)</a></li>
            </ul>
        </body>
        </html>
    `);
});

app.get("/marvel", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Universo Marvel</title>
        </head>
        <body>
            <h1>Marvel Comics</h1>
            <p>A Marvel Comics é uma das maiores editoras de quadrinhos do mundo, lar de heróis icônicos, mutantes e defensores da Terra.</p>

            <h2>Personagens Disponíveis</h2>
            <ul>
                <li><a href="/marvel/homem-de-ferro">Homem de Ferro</a></li>
                <li><a href="/marvel/homem-aranha">Homem-Aranha</a></li>
            </ul>

            <br>
            <a href="/">← Voltar para a página inicial</a>
        </body>
        </html>
    `);
});

app.get("/dc", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Universo DC</title>
        </head>
        <body>
            <h1>DC Comics</h1>
            <p>A DC Comics é o lar de lendas dos quadrinhos e dos maiores deuses e vigilantes que protegem o multiverso.</p>

            <h2>Personagens Disponíveis</h2>
            <ul>
                <li><a href="/dc/batman">Batman</a></li>
                <li><a href="/dc/superman">Superman</a></li>
            </ul>

            <br>
            <a href="/">← Voltar para a página inicial</a>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})
