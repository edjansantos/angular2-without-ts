(function (app) {
    app.MainModule = ng.core
        .NgModule({
            imports: [
                ng.platformBrowser.BrowserModule
            ],
            declarations: [
                app.MainComponent,
                app.EdHeaderComponent,
                app.EdIconComponent
            ],
            bootstrap: [
                app.MainComponent
            ]
        })
        .Class({
            constructor: function () {
            }
        });
})(window.app || (window.app = {}));