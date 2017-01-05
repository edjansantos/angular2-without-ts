(function(app) {
	const _ngOnInit = function() {
		this.loadSvg();
	};

	const _loadSvg = function() {
		var _self = this;

		this.http.get(_self.path).map(function (res) {
			return res.text();
		}).subscribe(function (res) {
			_self.iconData = _self.sanitizer.bypassSecurityTrustHtml(res);
		});
	};
	app.EdIconComponent = ng.core
		.Component({
			selector: 'ed-icon',
			//template: '<div [innerHTML]="iconData"></div>',
			templateUrl: 'app/modules/main/components/ed-icon/ed-icon.html',
			inputs: [
				'path'
			]
		})
		.Class({
            constructor: function(http, sanitizer) {
				//_self = this;
				this.http = http;
				this.sanitizer = sanitizer;
			},
			ngOnInit: _ngOnInit,
			loadSvg: _loadSvg
		});

	app.EdIconComponent.parameters = [
		ng.http.Http,
		ng.platformBrowser.DomSanitizer
	];
})(window.app || (window.app = {}));