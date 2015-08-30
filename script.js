(function() {
  function magic(prop) {
    try {
      var oldFunc = HTMLElement.prototype[prop];
      if(oldFunc instanceof Function) {
        HTMLElement.prototype[prop] = function() {
          var args = arguments, target = this;
          return new Promise(function(res, rej) {
            setTimeout(function() {
              res ( oldFunc.apply( target, args ) );
            }, 0);
          });
        }
      }
    } catch(e) {}
  }

  for(var prop in HTMLElement.prototype) magic(prop);
})();
