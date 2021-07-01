const express = require('express');
const app = express();
const logger = require('./middlewares/logger.js');
const port = 8080;
const errorHandler = require('./middlewares/error_handler.js');
// const beatsController = require('./controllers/beats_controller.js');
const { request } = require('express');
const sessionsController = require('./controllers/sessions_controller.js')
const beatsController = require('./controllers/beats_controller.js')

// var session = require('express-session');

// // Use the session middleware
// app.use(session())

// // Use the session middleware
// app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

// // Access the session as req.session

// app.get('/', (req, res, next) => {
//   Track
//         .findAll()
//         .then(dbRes => {
//             console.log(dbRes.rows)
//         })
//     next(dbRes.rows)
// })
// console.log(Track.findAll());

app.listen(port, () => {
    console.log(`listening on port ${port} ...`);
})

app.use(logger);

app.use(express.static('client'));

app.use(express.json());

app.use('/api/sessions', sessionsController)

app.use('/api/beats', beatsController);

app.use(errorHandler);
