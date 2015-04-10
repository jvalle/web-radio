
module.exports = (function () {
    var io;

    function init (server) {
        if (typeof server == null) throw new Error('Must init on a server: ', server);

        io = require('socket.io')(server);
    }

    return {
        init: init
    }

})();
