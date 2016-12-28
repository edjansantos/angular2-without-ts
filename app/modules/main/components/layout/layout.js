(function (app) {
    app.MainComponent = ng.core
        .Component({
            selector: 'layout',
            templateUrl: 'app/modules/main/components/layout/layout.html'
        })
        .Class({
            constructor: function Main() {
            }
        });
})(window.app || (window.app = {}));