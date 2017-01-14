var cont = cont || {};
cont.dom = (function () {
    var context = {};
    context.slider = {
        generate: function (elem, config, callback) {
            $(elem).slider(config);
            callback();
        }
    };
    return context;
})();

