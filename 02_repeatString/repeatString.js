const repeatString = (string,num) => {
    // take the string and ouput it back the number of times provide.
    let newString = '';
    if (num < 0) {
        return 'ERROR'
    };
    for (let timesToRepeatString = 0;timesToRepeatString < num;timesToRepeatString++) {
        newString += string.toString()
    };
    return newString
};

// Do not edit below this line
module.exports = repeatString;
