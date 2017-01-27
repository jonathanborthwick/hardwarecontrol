var cont = cont || {};

iJS("scripts/lib/jQuery/jquery.min.js", function () {
    iJS("scripts/lib/jQuery/jquery-ui.min.js", function () {
        iJS("scripts/lib/jQuery/jquery.ui.touch-punch.min.js", function () {
            iJS("scripts/cont/cont.app.config.js", function () {
                iJS("scripts/cont/cont.data.js", function () {
                    iJS("scripts/cont/cont.dom.js", function () {
                        iJS("scripts/cont/cont.io.js", function () {
                            $(function () {
                                initialize();
                            });
                        });
                    });
                });
            });
        });
    });
});

function initialize() {
    $("#mainContent").load("pages/crane/crane.html", function () {
        cont.dom.slider.sliders = [];
        var sliders = cont.dom.slider.sliders;
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
                    sliders.push({slider: thisSlider, textElem: $("#heightAmount")});
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
                    sliders.push({slider: thisSlider, textElem: $("#nsAmount")});
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
                    sliders.push({slider: thisSlider, textElem: $("#ewAmount")});
                }
        );
    });
}












