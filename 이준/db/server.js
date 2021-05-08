const express = require('express');
const dotenv = require('dotenv');
const api = require('./api');
const cors = require('cors');

dotenv.config();

const PORT = process.env.PORT || 80;
const app = express();

app.use(cors({
	origin: ['http://localhost:3000'],
	credentials: true
}));
app.use('/api', api);

app.listen(PORT, () => {
	console.log('START EXPRESS SERVER, PORT NUMBER: ' + PORT);
});