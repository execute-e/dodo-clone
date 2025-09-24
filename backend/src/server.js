import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(123);
})

app.listen(PORT, () => {
    console.log('App is active!');
})