const express = require('express');
const app = express();
const routes = require('./routes');
const morgan = require('morgan');


app.use(express.json());
app.use(morgan('dev'));

app.use('/api', routes);

app.listen(3000, () => {
    console.log('Server running in the port 3000');
});
