const express = require('express');
const app = express();
const port = 3000;
const static_path = 'http://localhost:3000'

const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts'
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('main', {'layout': 'index', static_path: static_path});
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})