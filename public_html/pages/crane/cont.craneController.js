var cont = cont || {};
cont.app.controller('cranecontroller', function ($scope) {

    var sliders = [];

    $scope.reset = function () {
        //console.log(sliders);
        for(var i = 0; i<sliders.length; i++){
            sliders[i].slider.slider({value:100});
            sliders[i].textElem.val(0);
        }
    };

    $(function () {
        var max = 200;
        $("#heightAmount").val("0");
        $("#nsAmount").val("0");
        $("#ewAmount").val("0");
        cont.dom.slider.generate(
                "#slider-vertical",
                {
                    orientation: "vertical",
                    range: "min",
                    min: 0,
                    max: max,
                    value: 100,
                    slide: function (event, ui) {
                        var val = max;//default
                        try {
                            var valString = ui.value;
                            val = parseInt(valString) - (max / 2);
                        } catch (e) {

                        }
                        $("#heightAmount").val(val);
                    },
                    stop: function (event, ui) {
                        //send value off to device
                    }
                },
                function (thisSlider) {
                    sliders.push({slider:thisSlider,textElem:$("#heightAmount")});
                }
        );
        cont.dom.slider.generate(
                "#slider-ns",
                {
                    orientation: "vertical",
                    range: "min",
                    min: 0,
                    max: max,
                    value: 100,
                    slide: function (event, ui) {
                        var val = max;//default
                        try {
                            var valString = ui.value;
                            val = parseInt(valString) - (max / 2);
                        } catch (e) {

                        }
                        $("#nsAmount").val(val);
                    },
                    stop: function (event, ui) {
                        //send value off to device
                    }
                },
                function (thisSlider) {
                    sliders.push({slider:thisSlider,textElem:$("#nsAmount")});
                }
        );
        cont.dom.slider.generate(
                "#slider-ew",
                {
                    range: "min",
                    min: 0,
                    max: max,
                    value: 100,
                    slide: function (event, ui) {
                        var val = max;//default
                        try {
                            var valString = ui.value;
                            val = parseInt(valString) - (max / 2);
                        } catch (e) {

                        }
                        $("#ewAmount").val(val);
                    },
                    stop: function (event, ui) {
                        //send value off to device
                    }
                },
                function (thisSlider) {
                    sliders.push({slider:thisSlider,textElem:$("#ewAmount")});
                }
        );
    });
});