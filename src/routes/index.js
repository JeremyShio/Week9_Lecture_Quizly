module.exports = function (app) {
    // Call use method on app
    app.use('/auth', require('./auth'))  // require auth is calling/referring to MainAuthRouter
    // When the application is used, we use the MainAuthRouter
}