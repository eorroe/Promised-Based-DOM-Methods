(function() {
	function magic( prop ) {
		var oldFunc = div[ prop ];
		if( oldFunc instanceof Function ) {
			HTMLElement.prototype[prop] = function() {
				var args = arguments, target = this;
				return new Promise(function( res, rej ) {
					res ( oldFunc.apply( target, args ) );
				});
			}
		}
	}

	var div = document.createElement( 'div' );
	for( var prop in div ) magic( prop );
	div = prop = null;
})();
