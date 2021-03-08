import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import api from './api/api.js';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const USERNAME = 'dlwnssla';
const API_KEY = 'devU01TX0FVVEgyMDIwMDgyNjE0MTczODExMDEwNzM=';

const middle = (req, res, next) => {
	const { query: { apikey } } = req;
	if (apikey === API_KEY) {
		next();
	} else {
		res.send('유효하지 않은 apikey입니다.');
	}
};

const final = (req, res) => {
	res.send('유효한 apikey입니다!');
};

app.use(bodyParser.urlencoded({ limit: 1000000, txtended: true, parameterLimit: 1000000 }));
app.use(bodyParser.json({ limit: 1000000 }));
app.use(cors({
	credentials: true,
	origin: ['http://localhost:3000']
}));

app.use(express.static(path.join(path.resolve(), './dist')));

app.get('/process', middle, final);

app.get('/', (req, res) => {
	res.send('Hello');
});

app.get('/hello', (req, res) => {
	res.send('nice to meet you');
});

app.use('/api', api);

app.get('/query', (req, res) => {
	const { query: { name, date } } = req;
	console.log(name);
	console.log(date);
	res.send(true);
});

app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.resolve(), 'dist', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Express app listening at http://localhost:${PORT}`);
});