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

let arr = [1,23,8,5,2];
console.log(filterRange(arr, 4, 9));