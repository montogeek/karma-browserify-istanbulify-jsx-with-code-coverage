var moment = require('moment')

var My = {
  sqrt: function(x) {
    if (x < 0) return "HP";
      return Math.exp(Math.log(x)/2);
  },
  lol: function(txt) {
    return txt;
  },
  ahora: function() {
    return moment().format();
  }
};

module.exports = My;