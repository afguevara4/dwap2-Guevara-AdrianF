express = require('express')
const app = express()
 
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

//Espress HBS view engine
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('vivero', {
        anio: new Date().getFullYear()
    });
});

app.listen(port, () =>{
    console.log(`Escuchando peticiones en el puerto ${port}`)
});