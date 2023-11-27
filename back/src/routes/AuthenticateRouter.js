const express = require('express');
const userController = require('../controllers/UserController');
const router = express.Router();

//todo ajustar login

/*
* O erro "Error: secretOrPrivateKey must have a value" indica que a chave secreta usada para assinar o token JWT não está definida. No seu código, você está usando `process.env.SECRET_KEY` como a chave secreta. Isso significa que a chave secreta deve ser definida como uma variável de ambiente.

Você pode definir a variável de ambiente `SECRET_KEY` no seu sistema operacional, ou pode usar um pacote como o `dotenv` para definir variáveis de ambiente a partir de um arquivo `.env`.

Para usar o `dotenv`, siga estas etapas:

1. Instale o pacote `dotenv` com o seguinte comando:

```bash
npm install dotenv
```

2. Crie um arquivo `.env` na raiz do seu projeto e defina a variável `SECRET_KEY`:

```
SECRET_KEY=your_secret_key
```

Substitua `your_secret_key` pela chave secreta que você deseja usar.

3. No início do seu arquivo principal do servidor (geralmente `index.js` ou `app.js`), adicione o seguinte código:

```javascript
require('dotenv').config();
```

Isso carregará as variáveis de ambiente do arquivo `.env`.

Agora, `process.env.SECRET_KEY` deve ter o valor que você definiu no arquivo `.env`.
*
* */
router.post('/api/login', userController.login);

module.exports = router;
