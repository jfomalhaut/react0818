const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const fileStore = require('session-file-store')(session);
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;
const ACCOUNT = 'dlwnssla';
const PASSWORD = '1';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});

app.use(session({
	secret: '!@#FOMALHAUT!@#', // 쿠키변조 막기 위한 sign값
	resave: false, // 세션 변경되지 않아도 저장하는지 여부 false가 기본값
	saveUninitialized: true, // 새로 생겼지만 변경되지 않은 session true가 기본값
	store: new fileStore(),
	cookie: {
		maxAge: 1000 * 60 * 1 // 1시간짜리 쿠키
	}
}));

app.get('/login', (req, res) => {
	console.log(req.session);
	if (!req.session['num']) {
		req.session['num'] = 1;
	} else {
		req.session['num'] += 1;
	}
	res.send(`Number: ${req.session['num']}`);
});

app.post('/signin', (req, res) => {
	const { body: { account, password } } = req;
	if (account === ACCOUNT && password === PASSWORD) {
		req.session.account = account; 
		console.log(req.session);
		req.session.save(() => {
			res.send({ valid: true });
		});
	} else {
		res.send({ valid: false });
	}
});

app.post('/verify', (req, res) => {
	// const { body: { account } } = req;
	console.log(req.session);
	if (req.session.account) {
		res.send({ verify: true });
	} else {
		res.send({ verify: false });
	}
});

const server = app.listen(PORT, () => {
	console.log(`Express server has started on port ${PORT}`);
});


// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

// app.get('/', (req, res) => {
// 	res.render('index.html');
// });

// app.get('/test', (req, res) => {
// 	res.render('test.html');
// });