const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const fileStore = require('session-file-store')(session);
require('dotenv').config();

const PORT = process.env.PORT;
const ACCOUNT = 'dlwltn';
const PASSWORD = '1';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow_Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "*");
    next();
})

app.use(session({
    secret: '!TOSUUNI', //쿠키 변조를 막기 위한 sign 값
    resave: false, //세션 변경되지 않아도 저장하는지 여부 false 기본값
    saveUniitialized: true,//새로 생겼지만 변경되지 않은 session true가 기본값
    store: new fileStore(),
    cookie: {
        maxAge: 1000 * 60 * 0.2 // 12초 짜리 쿠키
    }
}));

app.get('/login', (req, res) => {
    if (!req.session['num']) {
        req.session['num'] = 1;
    } else {
        req.session['num'] += 1;
    }
    res.send(`Number:${req.session.num}`);
})

app.post('/signin', (req, res) => {
    const { body: { account, password } } = req;
    if (account === ACCOUNT && password === PASSWORD) {
        req.session.account = account;
        res.send({ valid: true });
    } else {
        res.send({ valid: false })
    }
})

app.post('/verify', (req, res) => {
    const { body: { account } } = req;
    console.log('server', req.session);
    if (req.session.account && req.session.account == account) {
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
//     res.render('index.html');
// })

// app.get('/test', (req, res) => {
//     res.render('test.html');
// })
