const express = require('express')
const cors = require('cors')
const app = express();
const PORT = 9001

app.use(express.urlencoded({extended : true}));
app.use(cors())
app.use(express.json());

app.options('*', cors()) // include before other routes

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
    console.log("hey");
    console.log("with correction");
});
