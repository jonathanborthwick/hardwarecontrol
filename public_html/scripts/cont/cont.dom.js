var cont = cont || {};
cont.dom = (function () {
    var context = {};
    context.slider = {
        generate: function (elem, config, callback) {
            var slider = $(elem).slider(config);
            callback(slider);
        }
    };
    return context;
})();

