const express = require('express');
const routes = express();

routes.use('/barang', require('./barangRoutes'));
routes.use('/kasir', require('./kasirRoutes'));
routes.use('/tenan', require('./tenanRoutes'));
routes.use('/nota', require('./notaRoutes'));
routes.use('/barang-nota', require('./barangNotaRoutes'));
routes.get('/', function(req, res){
    res.send({
        message: "Welcome"
    });
    console.log('Homepage '+'\u001b[' + 32 + 'm' + '(re)loaded' + '\u001b[0m'+' successfully');
});

module.exports = routes;
