// require runs Express module, in which express returns
const express = require('express');
const app = express();
const port = 5000;


app.get('/', (req, res) => {
    res.send('Hello World!');
});


// Initialize routes
const initRoutes = require('./src/routes');
initRoutes(app);
// Returns exports from


app.listen(port, () => {
    console.log(`Server is now running on port ${port}`);
})