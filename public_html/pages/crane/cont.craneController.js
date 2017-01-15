var cont = cont || {};
cont.app.controller('cranecontroller', function ($scope) {

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
                        try{
                            var valString = ui.value;
                            val = parseInt(valString)-(max/2);
                        }catch(e){
                            
                        }
                        $("#heightAmount").val(val);
                    },
                    stop:function(event, ui){
                        //send value off to device
                    }
                },
                function () {}
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
                        try{
                            var valString = ui.value;
                            val = parseInt(valString)-(max/2);
                        }catch(e){
                            
                        }
                        $("#nsAmount").val(val);
                    },
                    stop:function(event, ui){
                        //send value off to device
                    }
                },
                function () {}
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
                        try{
                            var valString = ui.value;
                            val = parseInt(valString)-(max/2);
                        }catch(e){
                            
                        }
                        $("#ewAmount").val(val);
                    },
                    stop:function(event, ui){
                        //send value off to device
                    }
                },
                function () {}
        );
    });
});