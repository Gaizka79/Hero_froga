const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/kaixo', (req, res) => res.status(203).send('Kaixo munduari!'));
app.use('/agur', (req, res) => res.status(202).send('Agur munduari'));
app.use('/', (req, res) => res.status(200).send('kaixo ala agur'));

app.listen(3000, () => console.log(`Goazen...`));
