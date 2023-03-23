import express from 'express';
import router from './routes/index.js';
import db from './config/db.js'

const app = express();

// Connect to db
db.authenticate()
    .then( () => console.log('DB connected'))
    .catch( error => console.log(error));

// Define port
const port = process.env.PORT || 4000;

// Use PUG
app.set('view engine', 'pug');

// Create custom middleware
// Get current year
app.use((req, res, next) => {
    const year = new Date();
    res.locals.currentYear = year.getFullYear();
    res.locals.siteName = "Travel Agency";
    return next();
});

// Define public folder
app.use(express.static('public'));

// Add router
app.use('/', router);


app.listen(port, () => {
    console.log(`The server is listening on ${port}`)
})