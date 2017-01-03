(function(app) {
	var _self;
	const _ngOnInit = function() {
		_self.loadSvg();
	};

	const _loadSvg = function() {
		this.http.get(_self.path).map(function (res) {
			return res.text();
		}).subscribe(function (res) {
			//_self.iconData = res;
			_self.iconData = "<h1>Santos</h1>";
		});
	};
	app.EdIconComponent = ng.core
		.Component({
			selector: 'ed-icon',
			template: '<div [innerHTML]="iconData"></div>',
			//templateUrl: 'app/modules/main/components/ed-icon/ed-icon.html',
			inputs: [
				'path'
			]
		})
		.Class({
            constructor: function(http) {
				_self = this;
				_self.http = http;
				//_self.iconData = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>';
			},
			ngOnInit: _ngOnInit,
			loadSvg: _loadSvg
		});

	app.EdIconComponent.parameters = [
		ng.http.Http
	];
})(window.app || (window.app = {}));