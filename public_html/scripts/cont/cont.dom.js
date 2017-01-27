var cont = cont || {};
cont.dom = (function () {
    var context = {};
    context.slider = {
        sliders:[],
        generate: function (elem, config, callback) {
            var slider = $(elem).slider(config);
            callback(slider);
        }, reset: function () {
            var sliders = cont.dom.slider.sliders;
            for (var i = 0; i < sliders.length; i++) {
                sliders[i].slider.slider({value: 100});
                sliders[i].textElem.val(0);
            }
        }
    };
    return context;
})();

