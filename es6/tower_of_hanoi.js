(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TowerOfHanoi = (function () {
  function TowerOfHanoi(disk_number) {
    _classCallCheck(this, TowerOfHanoi);

    this._sticks = {
      "first": [4, 3, 2, 1], "second": [], third: []
    };
  }

  _createClass(TowerOfHanoi, [{
    key: "move",
    value: function move(from, to, disk_number) {
      if (disk_number == 1) {
        this._sticks[to].push(this._sticks[from].pop());
        console.log(JSON.stringify(this._sticks));
      } else {
        var work = undefined;
        for (var k in this._sticks) {
          if (k != from && k != to) {
            work = k;
            break;
          }
        }
        this.move(from, work, disk_number - 1);
        this._sticks[to].push(this._sticks[from].pop());
        console.log(JSON.stringify(this._sticks));
        this.move(work, to, disk_number - 1);
      }
    }
  }]);

  return TowerOfHanoi;
})();

var hanoi = new TowerOfHanoi(4);
hanoi.move("first", "third", 4);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2VuMWZsYW4vc3JjL3Rvd2VyX29mX2hhbm9pL2VzNi90b3dlcl9vZl9oYW5vaS5lczYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7SUNBTSxZQUFZO0FBQ0wsV0FEUCxZQUFZLENBQ0osV0FBVyxFQUFFOzBCQURyQixZQUFZOztBQUVkLFFBQUksQ0FBQyxPQUFPLEdBQUc7QUFDYixhQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFO0tBQy9DLENBQUE7R0FDRjs7ZUFMRyxZQUFZOztXQU9YLGNBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUU7QUFDM0IsVUFBSSxXQUFXLElBQUksQ0FBQyxFQUFFO0FBQ3BCLFlBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNoRCxlQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7T0FDM0MsTUFBTTtBQUNMLFlBQUksSUFBSSxZQUFBLENBQUM7QUFDVCxhQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDMUIsY0FBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUU7QUFDL0IsZ0JBQUksR0FBRyxDQUFDLENBQUM7QUFDVCxrQkFBTTtXQUNQO1NBQ0s7QUFDRCxZQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLFlBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNoRCxlQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDMUMsWUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztPQUN0QztLQUNGOzs7U0F4QkcsWUFBWTs7O0FBMkJsQixJQUFJLEtBQUssR0FBRyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgVG93ZXJPZkhhbm9pIHtcbiAgY29uc3RydWN0b3IoZGlza19udW1iZXIpIHtcbiAgICB0aGlzLl9zdGlja3MgPSB7XG4gICAgICBcImZpcnN0XCI6IFs0LCAzLCAyLCAxXSwgXCJzZWNvbmRcIjogW10sIHRoaXJkOiBbXVxuICAgIH1cbiAgfVxuXG4gIG1vdmUgKGZyb20sIHRvLCBkaXNrX251bWJlcikge1xuICAgIGlmIChkaXNrX251bWJlciA9PSAxKSB7XG4gICAgICB0aGlzLl9zdGlja3NbdG9dLnB1c2godGhpcy5fc3RpY2tzW2Zyb21dLnBvcCgpKTtcbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuX3N0aWNrcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgd29yaztcbiAgICAgIGZvciAodmFyIGsgaW4gdGhpcy5fc3RpY2tzKSB7XG4gICAgICAgIGlmIChrICE9IGZyb20gJiYgayAhPSB0bykge1xuXHQgIHdvcmsgPSBrO1xuXHQgIGJyZWFrO1xuXHR9XG4gICAgICB9XG4gICAgICB0aGlzLm1vdmUoZnJvbSwgd29yaywgZGlza19udW1iZXIgLSAxKTtcbiAgICAgIHRoaXMuX3N0aWNrc1t0b10ucHVzaCh0aGlzLl9zdGlja3NbZnJvbV0ucG9wKCkpO1xuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5fc3RpY2tzKSk7XG4gICAgICB0aGlzLm1vdmUod29yaywgdG8sIGRpc2tfbnVtYmVyIC0gMSk7XG4gICAgfVxuICB9XG59XG5cbnZhciBoYW5vaSA9IG5ldyBUb3dlck9mSGFub2koNCk7XG5oYW5vaS5tb3ZlKFwiZmlyc3RcIiwgXCJ0aGlyZFwiLCA0KTtcbiJdfQ==
