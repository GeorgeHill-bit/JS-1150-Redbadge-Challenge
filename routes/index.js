module.exports = (app) => {
    app.use('/api/auth', require('./accountUser'));
    app.use('/api/purchase', require('./memberPurchase'));
    app.use('/api/allProducts', require('./allProducts'));
}   