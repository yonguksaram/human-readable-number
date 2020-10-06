module.exports = function toReadable (number) {
    let numberNames = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine'
    };
    let secondDigitNumberNames = {
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty',
        '7': 'seventy',
        '8': 'eighty',
        '9': 'ninety'
    }
    let result = ('' + number).split('').reduce((result, item, i, array) => {
        if (i === 0 && array.length === 3) {
            return (result + numberNames[item] + ' ' + 'hundred') + ' ';
        }
        if (i === 0 && array.length === 2 || i === 1 && array.length === 3 && item !== '0') {
            return (result + (secondDigitNumberNames[item + '' + array[i + 1]] ? secondDigitNumberNames[item + '' + array[i + 1]] :
                secondDigitNumberNames[item] + ' '));
        }
        if (i === 0 && array.length === 1) {
            return (result + numberNames[item]);
        }
        if ((i === 1 && array.length === 2 || i === 2 && array.length === 3) && item !== '0') {
            return (result + (array[i - 1] + '' + item !== '10' && 
                array[i - 1] + '' + item !== '11' && 
                array[i - 1] + '' + item !== '12' &&
                array[i - 1] + '' + item !== '13' &&
                array[i - 1] + '' + item !== '14' &&
                array[i - 1] + '' + item !== '15' &&
                array[i - 1] + '' + item !== '16' &&
                array[i - 1] + '' + item !== '17' &&
                array[i - 1] + '' + item !== '18' &&
                array[i - 1] + '' + item !== '19' ? 
                numberNames[item] : '' ));
        }
        return result;
    }, '');
    return result[result.length - 1] === ' ' ? result.slice(0, result.length - 1) : result;
}
