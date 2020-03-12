arrayUtils = {
    isEmpty: function(array) {
        if (!array.length) {
            return true
        } else {
            return false
        }
    },
    max: function(array) {
        if (this.isEmpty(array) == false) {
            max = [0];
            for (i = 0; i <= array.length; i++) {
                if (array[i] > max) {
                    max = array[i];
                }
            }
            return max
        } else {
            return "Array vazio"
        }

    },
    min: function(array) {
        if (this.isEmpty(array) == false) {
            min = array[0];
            for (i = 0; i <= array.length; i++) {
                if (array[i] < min) {
                    min = array[i];
                }
            }
            return min
        } else {
            return "Array vazio"
        }

    },
    average: function(array) {
        if (this.isEmpty(array) == false) {
            media = 0;
            total = 0;
            for (i = 0; i <= array.length - 1; i++) {
                total += array[i];
            }
            media = total / array.length
            return media
        } else {
            return "Array vazio"
        }
    },
    indexOf: function(array, value) {
        if (this.isEmpty(array) == false) {
            for (i = 0; i <= array.length; i++) {
                if (array[i] == value) {
                    return i
                }
            }
        } else {
            return "Array vazio"
        }

    },
    subArray: function(array, startIndex, endIndex) {
        if (this.isEmpty(array) == false) {
            subarray = []
            for (i = startIndex; i <= endIndex; i++) {
                subarray.push(array[i])
            }
            return subarray;
        } else {
            return "Array vazio"
        }

    },
    isSameLength: function(a1, a2) {
        if (this.isEmpty(a1) == false) {
            if (a1.length == a2.length) {
                return true
            } else {
                return false
            }
        } else {
            return "Array vazio"
        }
    },
    reverse: function(array) {
        if (this.isEmpty(array) == false) {
            reverse = []
            for (i = array.length - 1; i >= 0; i--) {
                reverse.push(array[i])
            }
            return reverse
        } else {
            return "Array vazio"
        }
    },
    swap: function(array, index1, index2) {
        if (this.isEmpty(array) == false) {
            [array[index1], array[index2]] = [array[index2], array[index1]]
            return array
        } else {
            return "Array vazio"
        }
    },
    contains: function(array, value) {
        if (this.isEmpty(array) == false) {
            resultado = false
            for (var i = 0; i <= array.length; i++) {
                if (array[i] === value) {
                    resultado = true
                }
            }
            return resultado
        } else {
            return "Array vazio"
        }
    },
    concatenate: function() {
        if (this.isEmpty(array) == false) {
            arr1 = [0, 1, 2];
            arr2 = [3, 5, 7];
            arrayjunto = [...arr1, ...arr2];
            return arrayjunto
        } else {
            return "Array vazio"
        }
    }

};
module.exports = arrayUtils