
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
    res.send('API funcionando!');
});

// Rota GET
app.get('/usuarios', (req, res) => {
    res.json([
        {
            id: 1,
            nome: 'Daniel',
            email: 'daniel@email.com'
        },
        {
            id: 2,
            nome: 'João',
            email: 'joao@email.com'
        }
    ]);
});

// Rota POST
app.post('/usuarios', (req, res) => {
    const novoUsuario = req.body;

    res.status(201).json({
        mensagem: 'Usuário recebido com sucesso!',
        usuario: novoUsuario
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
