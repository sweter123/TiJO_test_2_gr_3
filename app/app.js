(function ()
{
    'use strict';

    window.app = {
        upperCase: function (str) {
            var strTmp = str.split(' ');
            var outputArray = [];

            for (var i = 0, strLength = strTmp.length; i < strLength; i++) {
                outputArray.push(strTmp[i][0].toUpperCase() + strTmp[i].slice(1));
            }
            return outputArray.join(' ');
        },

        findAlmostMax: function (arr) {
            var arrLength = arr.length;
            if (arrLength === 0) {
                return false;
            }

            var tmpArray = [];
            for (var i = 0; i < arrLength; i++) {
                if (typeof arr[i] === 'number') {
                    tmpArray.push(arr[i]);
                }
                if (tmpArray.length === 0) {
                    return false;
                }
            }
            return tmpArray.sort()[tmpArray.length - 2];
        }
    };
})();
