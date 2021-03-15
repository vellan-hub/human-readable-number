module.exports = function toReadable (number) {
    let TEN = 10;
    let ONE_HUNDRED = 100;
    let ONE_THOUSAND = 1000;

    let LESS_THAN_TWENTY = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    let TENTHS_LESS_THAN_HUNDRED = [
        'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

        let remainder, word,
            words = arguments[1];

        if (number === 0) {
            return !words ? 'zero' : words.join(' ').replace(/,$/, '');
        }

        if (!words) {
            words = [];
        }

        if (number < 20) {
            remainder = 0;
            word = LESS_THAN_TWENTY[number];

        } else if (number < ONE_HUNDRED) {
            remainder = number % TEN;
            word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / TEN)];

            if (remainder) {
                word += ' ' + LESS_THAN_TWENTY[remainder];
                remainder = 0;
            }

        } else if (number < ONE_THOUSAND) {
            remainder = number % ONE_HUNDRED;
            word = toReadable(Math.floor(number / ONE_HUNDRED)) + ' hundred';

        }

        words.push(word);
        return toReadable(remainder, words);
}
