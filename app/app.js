const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'app')));
app.use('/', indexRouter);


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
