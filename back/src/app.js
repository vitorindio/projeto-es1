//dotenv
require('dotenv').config();
const express = require('express');
const expressConfig = require('./config/express');

const sequelize = require('./config/database');
require('./models/ReservaModel');
require('./models/ReservaAutomaticaModel');
require('./models/ReservaSobAutorizacaoModel');
require('./models/ReservaRecorrenteModel');
require('./models/Associations');

const userRouter = require('./routes/UserRouter');
const authenticateRouter = require('./routes/AuthenticateRouter');
const espacoRouter = require('./routes/EspacoRouter');
const reservaRouter = require('./routes/ReservaRouter');

const app = express();

app.use(expressConfig);
app.use(express.json()); // Isso permite que o Express entenda requisições com o corpo em JSON
app.use(authenticateRouter)
app.use(userRouter);
app.use(espacoRouter);
app.use(reservaRouter);


sequelize.sync();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
