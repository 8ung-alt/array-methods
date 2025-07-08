//Translate border-left-width to borderLeftWidth

function camelize(str) {
    let words = str.split("-");
    words.map((word, index) => {
        if (!(word === words[0])) {
            words[index] = word.at(0).toUpperCase().concat(word.slice(1));
        }
    });
    return words.join("");
}

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

function filterRange(arr, a, b) {
    return arr.filter((element) => (a <= element && element <= b));
}

// let arr = [1,23,8,5,2];
// console.log(filterRange(arr, 4, 9));

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (b < arr[i] || arr[i] < a) {
            arr.splice(i, 1);
            i--;
        }
    }
}

// let arr = [5,5,2,1,-1,8, 9, 10];

// filterRangeInPlace(arr, 1, 8);
// console.table(arr);

// Sort in decreasing order
let arr = [5, 2, 1, -10, 8];
arr.sort((a,b) => b - a);
alert(arr);