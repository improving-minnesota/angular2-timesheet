const db = require('../src/services/db');
const security =  require('./initializers/security')

module.exports = () => {
    require('./initializers/data')
    security()
}