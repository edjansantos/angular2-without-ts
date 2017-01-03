(function (app) {
    app.MainModule = ng.core
        .NgModule({
            imports: [
                ng.platformBrowser.BrowserModule,
                ng.http.HttpModule
            ],
            declarations: [
                app.MainComponent,
                app.EdHeaderComponent,
                app.EdIconComponent,
                app.EdSearchBarComponent
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