var unherit = require('unherit');
var xtend = require('xtend');
var Compiler = require('./compiler');

module.exports = function plugin(options) {
    var Local = unherit(Compiler);
    Local.prototype.options = xtend(Local.prototype.options, this.data('settings'), options);

    var h = this.data('h');
    h && (Local.prototype.options.h = h);

    this.Compiler = Local;
};