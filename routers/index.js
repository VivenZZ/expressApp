module.exports = function (app) {
    app.get('/', (req, res) => res.send('Hello World!'));
    app.get('/customer', (req, res) => res.send('Customer Page'));
    app.get('/admin', (req, res) => res.send('Admin Page'));
};