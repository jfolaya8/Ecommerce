const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');


//inicializar procesos
const app = express();

//Configuraciones del servidor
app.set('port', process.env.PORT || 3500);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs',
    helpers: require('./public/lib/handlebars')
}));

app.set('view engine', '.hbs');

//
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Variables globales
app.use((rep, res, next)=>{
   
    next();
});

//Archivos controladores, para las peticiones (GET, POST) con el backend
app.use(require('./routes'));
app.use(require('./routes/links'));
app.use(require('./routes/controller_usuarios'));


//Archivos publicos
app.use(express.static(path.join(__dirname, 'public')));

//Inicializar servidor
app.listen(app.get('port'), () =>{
    console.log('Server http://localhost:' + app.get('port'));    
});

