import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.get('/users', (req, res) => {
  res.json({ message: ['user1', 'user2', 'user3'] });
});

app.listen(3000, () => {
  console.log('server on port 3000');
});
