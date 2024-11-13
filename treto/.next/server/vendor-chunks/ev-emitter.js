"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ev-emitter";
exports.ids = ["vendor-chunks/ev-emitter"];
exports.modules = {

/***/ "(ssr)/./node_modules/ev-emitter/ev-emitter.js":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;\n/**\n * EvEmitter v1.1.0\n * Lil' event emitter\n * MIT License\n */ /* jshint unused: true, undef: true, strict: true */ (function(global, factory) {\n    // universal module definition\n    /* jshint strict: false */ /* globals define, module, window */ if (true) {\n        // AMD - RequireJS\n        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n})( false ? 0 : void 0, function() {\n    \"use strict\";\n    function EvEmitter() {}\n    var proto = EvEmitter.prototype;\n    proto.on = function(eventName, listener) {\n        if (!eventName || !listener) {\n            return;\n        }\n        // set events hash\n        var events = this._events = this._events || {};\n        // set listeners array\n        var listeners = events[eventName] = events[eventName] || [];\n        // only add once\n        if (listeners.indexOf(listener) == -1) {\n            listeners.push(listener);\n        }\n        return this;\n    };\n    proto.once = function(eventName, listener) {\n        if (!eventName || !listener) {\n            return;\n        }\n        // add event\n        this.on(eventName, listener);\n        // set once flag\n        // set onceEvents hash\n        var onceEvents = this._onceEvents = this._onceEvents || {};\n        // set onceListeners object\n        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};\n        // set flag\n        onceListeners[listener] = true;\n        return this;\n    };\n    proto.off = function(eventName, listener) {\n        var listeners = this._events && this._events[eventName];\n        if (!listeners || !listeners.length) {\n            return;\n        }\n        var index = listeners.indexOf(listener);\n        if (index != -1) {\n            listeners.splice(index, 1);\n        }\n        return this;\n    };\n    proto.emitEvent = function(eventName, args) {\n        var listeners = this._events && this._events[eventName];\n        if (!listeners || !listeners.length) {\n            return;\n        }\n        // copy over to avoid interference if .off() in listener\n        listeners = listeners.slice(0);\n        args = args || [];\n        // once stuff\n        var onceListeners = this._onceEvents && this._onceEvents[eventName];\n        for(var i = 0; i < listeners.length; i++){\n            var listener = listeners[i];\n            var isOnce = onceListeners && onceListeners[listener];\n            if (isOnce) {\n                // remove listener\n                // remove before trigger to prevent recursion\n                this.off(eventName, listener);\n                // unset once flag\n                delete onceListeners[listener];\n            }\n            // trigger listener\n            listener.apply(this, args);\n        }\n        return this;\n    };\n    proto.allOff = function() {\n        delete this._events;\n        delete this._onceEvents;\n    };\n    return EvEmitter;\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXYtZW1pdHRlci9ldi1lbWl0dGVyLmpzIiwibWFwcGluZ3MiOiI7QUFBQTs7OztDQUlDLEdBRUQsa0RBQWtELEdBRWhELFVBQVVBLE1BQU0sRUFBRUMsT0FBTztJQUN6Qiw4QkFBOEI7SUFDOUIsd0JBQXdCLEdBQUcsa0NBQWtDLEdBQzdELElBQUssSUFBeUMsRUFBRztRQUMvQyxrQkFBa0I7UUFDbEJDLG9DQUFRRCxPQUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtHQUFBQTtJQUNqQixPQUFPLEVBTU47QUFFSCxHQUFHLE1BQWlCLEdBQWNNLENBQU1BLEdBQUcsUUFBTTtJQUVqRDtJQUVBLFNBQVNELGFBQWE7SUFFdEIsSUFBSUUsUUFBUUYsVUFBVUcsU0FBUztJQUUvQkQsTUFBTUUsRUFBRSxHQUFHLFNBQVVDLFNBQVMsRUFBRUMsUUFBUTtRQUN0QyxJQUFLLENBQUNELGFBQWEsQ0FBQ0MsVUFBVztZQUM3QjtRQUNGO1FBQ0Esa0JBQWtCO1FBQ2xCLElBQUlDLFNBQVMsSUFBSSxDQUFDQyxPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPLElBQUksQ0FBQztRQUM3QyxzQkFBc0I7UUFDdEIsSUFBSUMsWUFBWUYsTUFBTSxDQUFFRixVQUFXLEdBQUdFLE1BQU0sQ0FBRUYsVUFBVyxJQUFJLEVBQUU7UUFDL0QsZ0JBQWdCO1FBQ2hCLElBQUtJLFVBQVVDLE9BQU8sQ0FBRUosYUFBYyxDQUFDLEdBQUk7WUFDekNHLFVBQVVFLElBQUksQ0FBRUw7UUFDbEI7UUFFQSxPQUFPLElBQUk7SUFDYjtJQUVBSixNQUFNVSxJQUFJLEdBQUcsU0FBVVAsU0FBUyxFQUFFQyxRQUFRO1FBQ3hDLElBQUssQ0FBQ0QsYUFBYSxDQUFDQyxVQUFXO1lBQzdCO1FBQ0Y7UUFDQSxZQUFZO1FBQ1osSUFBSSxDQUFDRixFQUFFLENBQUVDLFdBQVdDO1FBQ3BCLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsSUFBSU8sYUFBYSxJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJLENBQUNBLFdBQVcsSUFBSSxDQUFDO1FBQ3pELDJCQUEyQjtRQUMzQixJQUFJQyxnQkFBZ0JGLFVBQVUsQ0FBRVIsVUFBVyxHQUFHUSxVQUFVLENBQUVSLFVBQVcsSUFBSSxDQUFDO1FBQzFFLFdBQVc7UUFDWFUsYUFBYSxDQUFFVCxTQUFVLEdBQUc7UUFFNUIsT0FBTyxJQUFJO0lBQ2I7SUFFQUosTUFBTWMsR0FBRyxHQUFHLFNBQVVYLFNBQVMsRUFBRUMsUUFBUTtRQUN2QyxJQUFJRyxZQUFZLElBQUksQ0FBQ0QsT0FBTyxJQUFJLElBQUksQ0FBQ0EsT0FBTyxDQUFFSCxVQUFXO1FBQ3pELElBQUssQ0FBQ0ksYUFBYSxDQUFDQSxVQUFVUSxNQUFNLEVBQUc7WUFDckM7UUFDRjtRQUNBLElBQUlDLFFBQVFULFVBQVVDLE9BQU8sQ0FBRUo7UUFDL0IsSUFBS1ksU0FBUyxDQUFDLEdBQUk7WUFDakJULFVBQVVVLE1BQU0sQ0FBRUQsT0FBTztRQUMzQjtRQUVBLE9BQU8sSUFBSTtJQUNiO0lBRUFoQixNQUFNa0IsU0FBUyxHQUFHLFNBQVVmLFNBQVMsRUFBRWdCLElBQUk7UUFDekMsSUFBSVosWUFBWSxJQUFJLENBQUNELE9BQU8sSUFBSSxJQUFJLENBQUNBLE9BQU8sQ0FBRUgsVUFBVztRQUN6RCxJQUFLLENBQUNJLGFBQWEsQ0FBQ0EsVUFBVVEsTUFBTSxFQUFHO1lBQ3JDO1FBQ0Y7UUFDQSx3REFBd0Q7UUFDeERSLFlBQVlBLFVBQVVhLEtBQUssQ0FBQztRQUM1QkQsT0FBT0EsUUFBUSxFQUFFO1FBQ2pCLGFBQWE7UUFDYixJQUFJTixnQkFBZ0IsSUFBSSxDQUFDRCxXQUFXLElBQUksSUFBSSxDQUFDQSxXQUFXLENBQUVULFVBQVc7UUFFckUsSUFBTSxJQUFJa0IsSUFBRSxHQUFHQSxJQUFJZCxVQUFVUSxNQUFNLEVBQUVNLElBQU07WUFDekMsSUFBSWpCLFdBQVdHLFNBQVMsQ0FBQ2MsRUFBRTtZQUMzQixJQUFJQyxTQUFTVCxpQkFBaUJBLGFBQWEsQ0FBRVQsU0FBVTtZQUN2RCxJQUFLa0IsUUFBUztnQkFDWixrQkFBa0I7Z0JBQ2xCLDZDQUE2QztnQkFDN0MsSUFBSSxDQUFDUixHQUFHLENBQUVYLFdBQVdDO2dCQUNyQixrQkFBa0I7Z0JBQ2xCLE9BQU9TLGFBQWEsQ0FBRVQsU0FBVTtZQUNsQztZQUNBLG1CQUFtQjtZQUNuQkEsU0FBU21CLEtBQUssQ0FBRSxJQUFJLEVBQUVKO1FBQ3hCO1FBRUEsT0FBTyxJQUFJO0lBQ2I7SUFFQW5CLE1BQU13QixNQUFNLEdBQUc7UUFDYixPQUFPLElBQUksQ0FBQ2xCLE9BQU87UUFDbkIsT0FBTyxJQUFJLENBQUNNLFdBQVc7SUFDekI7SUFFQSxPQUFPZDtBQUVQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJldG8tcmVhY3QvLi9ub2RlX21vZHVsZXMvZXYtZW1pdHRlci9ldi1lbWl0dGVyLmpzP2ZiY2YiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBFdkVtaXR0ZXIgdjEuMS4wXG4gKiBMaWwnIGV2ZW50IGVtaXR0ZXJcbiAqIE1JVCBMaWNlbnNlXG4gKi9cblxuLyoganNoaW50IHVudXNlZDogdHJ1ZSwgdW5kZWY6IHRydWUsIHN0cmljdDogdHJ1ZSAqL1xuXG4oIGZ1bmN0aW9uKCBnbG9iYWwsIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKiBnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCB3aW5kb3cgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTUQgLSBSZXF1aXJlSlNcbiAgICBkZWZpbmUoIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KUyAtIEJyb3dzZXJpZnksIFdlYnBhY2tcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICBnbG9iYWwuRXZFbWl0dGVyID0gZmFjdG9yeSgpO1xuICB9XG5cbn0oIHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbigpIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIEV2RW1pdHRlcigpIHt9XG5cbnZhciBwcm90byA9IEV2RW1pdHRlci5wcm90b3R5cGU7XG5cbnByb3RvLm9uID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGlmICggIWV2ZW50TmFtZSB8fCAhbGlzdGVuZXIgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHNldCBldmVudHMgaGFzaFxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICAvLyBzZXQgbGlzdGVuZXJzIGFycmF5XG4gIHZhciBsaXN0ZW5lcnMgPSBldmVudHNbIGV2ZW50TmFtZSBdID0gZXZlbnRzWyBldmVudE5hbWUgXSB8fCBbXTtcbiAgLy8gb25seSBhZGQgb25jZVxuICBpZiAoIGxpc3RlbmVycy5pbmRleE9mKCBsaXN0ZW5lciApID09IC0xICkge1xuICAgIGxpc3RlbmVycy5wdXNoKCBsaXN0ZW5lciApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5vbmNlID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGlmICggIWV2ZW50TmFtZSB8fCAhbGlzdGVuZXIgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFkZCBldmVudFxuICB0aGlzLm9uKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gIC8vIHNldCBvbmNlIGZsYWdcbiAgLy8gc2V0IG9uY2VFdmVudHMgaGFzaFxuICB2YXIgb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgPSB0aGlzLl9vbmNlRXZlbnRzIHx8IHt9O1xuICAvLyBzZXQgb25jZUxpc3RlbmVycyBvYmplY3RcbiAgdmFyIG9uY2VMaXN0ZW5lcnMgPSBvbmNlRXZlbnRzWyBldmVudE5hbWUgXSA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdIHx8IHt9O1xuICAvLyBzZXQgZmxhZ1xuICBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9mZiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YoIGxpc3RlbmVyICk7XG4gIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgbGlzdGVuZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uZW1pdEV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgYXJncyApIHtcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbIGV2ZW50TmFtZSBdO1xuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGNvcHkgb3ZlciB0byBhdm9pZCBpbnRlcmZlcmVuY2UgaWYgLm9mZigpIGluIGxpc3RlbmVyXG4gIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgwKTtcbiAgYXJncyA9IGFyZ3MgfHwgW107XG4gIC8vIG9uY2Ugc3R1ZmZcbiAgdmFyIG9uY2VMaXN0ZW5lcnMgPSB0aGlzLl9vbmNlRXZlbnRzICYmIHRoaXMuX29uY2VFdmVudHNbIGV2ZW50TmFtZSBdO1xuXG4gIGZvciAoIHZhciBpPTA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldXG4gICAgdmFyIGlzT25jZSA9IG9uY2VMaXN0ZW5lcnMgJiYgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICBpZiAoIGlzT25jZSApIHtcbiAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lclxuICAgICAgLy8gcmVtb3ZlIGJlZm9yZSB0cmlnZ2VyIHRvIHByZXZlbnQgcmVjdXJzaW9uXG4gICAgICB0aGlzLm9mZiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAgICAgLy8gdW5zZXQgb25jZSBmbGFnXG4gICAgICBkZWxldGUgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICB9XG4gICAgLy8gdHJpZ2dlciBsaXN0ZW5lclxuICAgIGxpc3RlbmVyLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLmFsbE9mZiA9IGZ1bmN0aW9uKCkge1xuICBkZWxldGUgdGhpcy5fZXZlbnRzO1xuICBkZWxldGUgdGhpcy5fb25jZUV2ZW50cztcbn07XG5cbnJldHVybiBFdkVtaXR0ZXI7XG5cbn0pKTtcbiJdLCJuYW1lcyI6WyJnbG9iYWwiLCJmYWN0b3J5IiwiZGVmaW5lIiwiYW1kIiwibW9kdWxlIiwiZXhwb3J0cyIsIkV2RW1pdHRlciIsIndpbmRvdyIsInByb3RvIiwicHJvdG90eXBlIiwib24iLCJldmVudE5hbWUiLCJsaXN0ZW5lciIsImV2ZW50cyIsIl9ldmVudHMiLCJsaXN0ZW5lcnMiLCJpbmRleE9mIiwicHVzaCIsIm9uY2UiLCJvbmNlRXZlbnRzIiwiX29uY2VFdmVudHMiLCJvbmNlTGlzdGVuZXJzIiwib2ZmIiwibGVuZ3RoIiwiaW5kZXgiLCJzcGxpY2UiLCJlbWl0RXZlbnQiLCJhcmdzIiwic2xpY2UiLCJpIiwiaXNPbmNlIiwiYXBwbHkiLCJhbGxPZmYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ev-emitter/ev-emitter.js\n");

/***/ })

};
;