
const express = require('express');
const app = express();
const PORT = process.env.PORT || 6030;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));
require('./route/api')(app);
require('./route/html')(app);

app.listen(PORT,function(){
    console.log('App listening on PORT:'+ PORT);
});