((app) => {
	app.EdHeaderComponent = ng.core
		.Component({
			selector: 'ed-header',
			templateUrl: 'app/modules/main/components/ed-header/ed-header.html',
			styleUrls:['app/modules/main/components/ed-header/ed-header.css']
		})
        .Class({
            constructor: function () {
            }
        });
})(window.app || (window.app = {}));