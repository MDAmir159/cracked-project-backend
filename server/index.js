const express = require('express')
const cors = require('cors')
const app = express();
const PORT = 9001

app.use(express.urlencoded({extended : true}));
app.use(cors())
app.use(express.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const logInRouter = require('./view/logIn');
app.use('/logIn', logInRouter);

const signUpRouter = require('./view/signUp');
app.use('/signUp',signUpRouter);

const homeRouter = require('./view/Home/Posts');
app.use('/homeElements',homeRouter);

const profileRouter = require('./view/Home/Profile')
app.use('/profile',profileRouter);

const postRouter = require('./view/FullPost')
app.use('/post',postRouter);

app.listen(PORT , () =>{
    console.log(`Server listening on ${PORT}`);
});
