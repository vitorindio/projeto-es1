const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');
const expressConfig = require('./config/express');
const sequelize = require('./config/database');

const app = express();

app.use(expressConfig);
app.use(usuarioRoutes);

sequelize.sync();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
