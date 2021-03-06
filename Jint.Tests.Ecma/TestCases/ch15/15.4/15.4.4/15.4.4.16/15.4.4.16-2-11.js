/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.16/15.4.4.16-2-11.js
 * @description Array.prototype.every applied to Array-like object, 'length' is an own accessor property without a get function
 */


function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return val > 10;
        }

        var obj = {
            0: 9,
            1: 8
        };
        Object.defineProperty(obj, "length", {
            set: function () { },
            configurable: true
        });

        return Array.prototype.every.call(obj, callbackfn) && !accessed;
    }
runTestCase(testcase);
