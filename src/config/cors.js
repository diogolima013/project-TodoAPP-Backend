module.exports = function(req, res, next) {
    res.header('Acces-Control-Allow-Origin', '*' )
    res.header('Acces-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE')
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()

}