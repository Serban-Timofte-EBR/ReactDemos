const bodyParser = require('body-parser');
const express = require('express');

const app=express();

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Getting root');
})

app.get('/profile',(req,res)=>{
    res.send('Getting profile');
})

app.post('/profile',(req,res)=>{
    const user={
        name:'Ion',
        hobby:'Soccer'
    }
    res.send('user created');
})

//app.use(express.urlencoded({extended: false}));
//app.use(express.json());

app.listen(3000);
