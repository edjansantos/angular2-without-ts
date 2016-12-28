(function(app) {

	const _ngOnInit = function() {
		this.loadSvg();
	};

	const _loadSvg = function() {
		//let edjan = ng.http.get('app/modules/main/components/ed-header/images/menu.svg');
	};
	app.EdIconComponent = ng.core
		.Component({
			selector: 'ed-icon',
			templateUrl: 'app/modules/main/components/ed-icon/ed-icon.html',
			inputs: [
				'_path: path'
			]
		})
		.Class({
            constructor: function() {
			},
			ngOnInit: _ngOnInit,
			loadSvg: _loadSvg
		});
})(window.app || (window.app = {}));