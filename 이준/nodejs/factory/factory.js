const mysql = require('mysql');
require('dotenv').config();
let conn;

const info = mysql.createConnection({
	host: process.env.HOST, // IP Address
	port: process.env.DB_PORT, // IP Address
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE
});

function handleDisconnect() {
	conn = mysql.createConnection(info);
	conn.connect(function(err, result, fields) {
		if (err) {
			console.log('err message : ' + err);
			setTimeout(handleDisconnect, 2000);
		}
	});

	conn.on('error', function(err) {
		console.log('db error : ' + err);
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnect();
		} else {
			throw err;
		}
	});
}

handleDisconnect();

module.exports.getComments = (req, res) => {
	res.send('getComments');
};

module.exports.insertComment = (req, res) => {
	res.send('insertComment');
};