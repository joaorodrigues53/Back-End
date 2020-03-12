function perfomDownload() {
    started()
    update()
    completed()
}

function started() {
    console.log("Started Download")
}

function update() {
    i = 0
    for (i = 0; i <= 100; i++) {
        console.log(i + "%" + " " + "Of" + " " + "Downloaded")
    }
}

function completed() {
    console.log("Download Completed !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
}

perfomDownload();

ArrayUtilsModule = require('./ArrayUtils.js');
console.log(ArrayUtilsModule.isEmpty([1, 2, 3]));
console.log(ArrayUtilsModule.isEmpty([]));
console.log(ArrayUtilsModule.max([1, 5, 3]));
console.log(ArrayUtilsModule.min([2, 1, 3]));
console.log(ArrayUtilsModule.average([20, 20, 30]));
console.log(ArrayUtilsModule.indexOf([1, 3, 2], 3));
console.log(ArrayUtilsModule.subArray([1, 2, 3, 4], 1, 3));
console.log(ArrayUtilsModule.isSameLength([1, 2, 3, 4], [1, 2, 3, 4, 5, 6, 7]));
console.log(ArrayUtilsModule.isSameLength([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(ArrayUtilsModule.reverse([1, 2, 3, 4]));
console.log(ArrayUtilsModule.swap([1, 2, 3, 4], 1, 2));
console.log(ArrayUtilsModule.contains([1, 2, 3, 4], 5));
console.log(ArrayUtilsModule.concatenate([]));