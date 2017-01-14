var cont = cont || {};
cont.app.config(function ($routeProvider) {
    $routeProvider
            .when("/",
                    {
                        controller: 'cranecontroller',
                        templateUrl: "pages/crane/crane.html"
                    });
});


