angular.module("app", ["ui.router"]).config(function($stateProvider) {
    $stateProvider.state("Modal", {
        views:{
            "modal": {
                templateUrl: "app/welcome/modal.html"
            }
        },
        abstract: true
    });

    $stateProvider.state("Modal.confirmAddToCart", {
        views: {
            "modal": {
                templateUrl: "app/welcome/confirm.html"
            }
        }
    });
});