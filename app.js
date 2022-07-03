const express = require('express');
const app = express();
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: true}))
app.use(express.static('public'));


app.set('view engine', 'ejs');
const port =  process.env.PORT || 3005;
app.listen(port, function(){
    console.log('Running on port 3005')
})

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
