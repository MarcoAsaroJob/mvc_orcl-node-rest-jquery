module.exports = {
    cellaGialla: function (id,status){
        if (status == 'true') {
            return 1;
        } else {
            return 0;
        }
    },
    lockCella: function(id, status){
        if (status == 'true'){
            return 1;
        } else {
            return 0;
        }
    }

};