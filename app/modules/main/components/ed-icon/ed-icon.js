((app) => {

	const _ngOnInit = function() {
	}

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
			}
		})
})(window.app || (window.app = {}));