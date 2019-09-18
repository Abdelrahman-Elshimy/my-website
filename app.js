const express = require('express');
const path = require('path');



const app = express();

// static 
app.use(express.static(path.join(__dirname, 'assets')));


//routes 
const homeRoutes = require('./routes/home.routes');

// view engine
app.set('view engine', 'ejs');

app.use(homeRoutes);

const port = process.env.PORT || 3000;


// listen
app.listen(port, (err) => {
    console.log('server listen to port ' + 3000);
});
