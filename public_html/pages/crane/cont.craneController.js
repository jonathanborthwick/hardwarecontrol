var cont = cont || {};
cont.app.controller('cranecontroller', function ($scope) {

    $(function () {
        cont.dom.slider.generate(
                "#slider-vertical",
                {
                    orientation: "vertical",
                    range: "min",
                    min: 0,
                    max: 100,
                    value: 60,
                    slide: function (event, ui) {
                        $("#heightAmount").val(ui.value);
                    }
                },
                function () {}
        );
        cont.dom.slider.generate(
                "#slider-ns",
                {
                    range: "min",
                    min: 0,
                    max: 100,
                    value: 60,
                    slide: function (event, ui) {
                        $("#nsAmount").val(ui.value);
                    }
                },
                function () {}
        );
        cont.dom.slider.generate(
                "#slider-ew",
                {
                    orientation: "vertical",
                    range: "min",
                    min: 0,
                    max: 100,
                    value: 60,
                    slide: function (event, ui) {
                        $("#ewAmount").val(ui.value);
                    }
                },
                function () {}
        );
    });
});