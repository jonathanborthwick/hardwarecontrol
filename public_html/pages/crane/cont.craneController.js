var cont = cont || {};
cont.app.controller('cranecontroller', function ($scope) {

    $(function () {
        var max = 200;
        
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
                        try{
                            var valString = ui.value;
                            val = parseInt(valString)-(max/2);
                        }catch(e){
                            
                        }
                        $("#heightAmount").val(val);
                    }
                },
                function () {}
        );
        cont.dom.slider.generate(
                "#slider-ns",
                {
                    range: "min",
                    min: 0,
                    max: max,
                    value: 100,
                    slide: function (event, ui) {
                        var val = max;//default
                        try{
                            var valString = ui.value;
                            val = parseInt(valString)-(max/2);
                        }catch(e){
                            
                        }
                        $("#nsAmount").val(val);
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
                    max: max,
                    value: 100,
                    slide: function (event, ui) {
                        var val = max;//default
                        try{
                            var valString = ui.value;
                            val = parseInt(valString)-(max/2);
                        }catch(e){
                            
                        }
                        $("#ewAmount").val(val);
                    }
                },
                function () {}
        );
    });
});