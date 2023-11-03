const express = require('express');
const userRouter = require('./routes/userRouter');
const expressConfig = require('./config/express');
const sequelize = require('./config/database');
const authenticateRouter = require('./routes/authenticateRouter');

const app = express();

app.use(expressConfig);
app.use(express.json()); // Isso permite que o Express entenda requisições com o corpo em JSON
app.use(authenticateRouter)
app.use(userRouter);

sequelize.sync();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
