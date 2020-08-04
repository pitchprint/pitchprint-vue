const local = require('./my_ip.js');

module.exports = {
    devServer: {
        proxy: 'http://localhost:8080',
        public: `http://${local.ip}:8080/`,
    }
}