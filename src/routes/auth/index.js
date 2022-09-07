const MainAuthRouter = require('express').Router();




// MainAuthRouter.get('/', (req, res) => {
//     res.send('Main Auth Router')
// })

// MainAuthRouter.post('/', (req, res) => {
//     res.send('Main Auth Router')
// })

// MainAuthRouter.put('/', (req, res) => {
//     res.send('Main Auth Router')
// })

// MainAuthRouter.delete('/', (req, res) => {
//     res.send('Main Auth Router')
// })


MainAuthRouter.route('/')
    .get((req, res) => {
        res.send('Main Auth Router Register')
    })
    .post((req, res) => {
        res.send('Post Main Auth Router')
    })


// Export MainAuthRouter from get request (router behaves like middleware)
module.exports = MainAuthRouter
// Middleware has access to request, response, next