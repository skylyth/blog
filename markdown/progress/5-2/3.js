// 龙诺萱
if (typeof Object.assign2 != 'function') {
    // Attention 1
    Object.defineProperty(Object, "assign2", {
      value: function (target) {
        'use strict';
        if (target == null) { // Attention 2
          throw new TypeError('Cannot convert undefined or null to object');
        }
  
        // Attention 3
        var to = Object(target);
          
        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];
  
          if (nextSource != null) {  // Attention 2
            // Attention 4
            for (var nextKey in nextSource) {
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
  }