const express = require('express');

const handlebarsConfig = require('./config/handlebarsConfig');
const expressConfig = require('./config/expressConfig');
const dbConnect = require('./config/dbConfig')
const routes = require('./router');

const app = express();
const PORT = 5000;

dbConnect()
    .then(() => console.log('DB connected successfuly'))
    .catch(err => { console.log('DB error', err) })

handlebarsConfig(app);
expressConfig(app);

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))