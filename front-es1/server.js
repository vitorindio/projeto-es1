/*import express from 'express';

const app = express()

app.get('/', (req, res) => {
    console.log('oi')
    //res.send('oioioioi')
    res.json({message: 'Error'})
})

app.listen(5000)*/

import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors({
  origin: ['http://localhost:5173']
}))

let db = new sqlite3.Database('../dados', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Foi');
});

app.get('/api/sala', (req, res) => {
  const { tabela } = req.params;

  db.all(`SELECT * FROM sala`, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get('/api/reserva', (req, res) => {
  const { tabela } = req.params;

  db.all(`SELECT * FROM reserva`, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
