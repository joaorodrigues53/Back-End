arrayUtils = {
    isEmpty: function(array) {
        if (!array.length) {
            return true
        } else {
            return false
        }
    },
    max: function(array) {
        max = [0];
        for (i = 0; i <= array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max

    },
    min: function(array) {
        min = array[0];
        for (i = 0; i <= array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min

    },
    average: function(array) {
        media = 0;
        total = 0;
        for (i = 0; i <= array.length - 1; i++) {
            total += array[i];
        }
        media = total / array.length
        return media
    },
    indexOf: function(array, value) {
        for (i = 0; i <= array.length; i++) {
            if (array[i] == value) {
                return i
            }
        }

    },
    subArray: function(array, startIndex, endIndex) {
        subarray = []
        for (i = startIndex; i <= endIndex; i++) {
            subarray.push(array[i])
        }
        return subarray;
    },
    isSameLength: function(a1, a2) {
        if (a1.length == a2.length) {
            return true
        } else {
            return false
        }
    },
    reverse: function(array) {
        reverse = []
        for (i = array.length - 1; i >= 0; i--) {
            reverse.push(array[i])
        }
        return reverse
    },
    swap: function(array, index1, index2) {
        [array[index1], array[index2]] = [array[index2], array[index1]]
        return array
    },
    contains: function(array, value) {
        resultado = false
        for (var i = 0; i <= array.length; i++) {
            if (array[i] === value) {
                resultado = true
            }
        }
        return resultado
    }
};
module.exports = arrayUtils