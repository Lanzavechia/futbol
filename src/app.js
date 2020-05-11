const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

// uri = 'https://www.football-data.org/'
// headers = { 'X Auth-Token': '2e5ab691eede4ebfb29e7b560bf71c6f'}
// response = request.get(uri +'competitions/SA/scorers', headers=headers)



const app = express();

//Settings
app.set('port', process.env.PORT || 4000 );
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

//Middlewars
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Routes
app.use(require('./routes/index'))

//Static files
app.set(express.static (path.join(__dirname, 'public')));





module.exports = app;