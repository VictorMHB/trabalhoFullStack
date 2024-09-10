const express = require('express');
const rotas = require('./routes');
const cors = require('cors')

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', rotas);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});