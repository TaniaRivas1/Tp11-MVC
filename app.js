const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs')

const mainRoutes = require('./routes/main');
app.use('/', mainRoutes)
/*
app.get("/", (req,res) => res.sendFile(path.resolve(__dirname, "views", "home.html")));
app.get("/about", (req,res) => res.sendFile(path.resolve(__dirname, "views", "about.html")));
*/
app.listen(3030, () => {
    console.log('servidor corriendo en puerto http://localhost:3030')
})