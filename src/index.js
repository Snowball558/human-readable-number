module.exports = function toReadable(number) {

    let numberToString = number.toString();

    let upToTen = function (num) {
        switch (num) {
            case '1':
                return 'one';
            case '2':
                return 'two';
            case '3':
                return 'three';
            case '4':
                return 'four';
            case '5':
                return 'five';
            case '6':
                return 'six';
            case '7':
                return 'seven';
            case '8':
                return 'eight';
            case '9':
                return 'nine';
        }
        return num;
    };

    let upToTwenty = function (num) {
        switch (num) {
            case '10':
                return 'ten';
            case '11':
                return 'eleven';
            case '12':
                return 'twelve';
            case '13':
                return 'thirteen';
            case '14':
                return 'fourteen';
            case '15':
                return 'fifteen';
            case '16':
                return 'sixteen';
            case '17':
                return 'seventeen';
            case '18':
                return 'eighteen';
            case '19':
                return 'nineteen';
            case '20':
                return 'twenty';

        };
        return num;
    };


    let tens = function (num) {
        switch (num) {
            case '2':
                return 'twenty';
            case '3':
                return 'thirty';
            case '4':
                return 'forty';
            case '5':
                return 'fifty';
            case '6':
                return 'sixty';
            case '7':
                return 'seventy';
            case '8':
                return 'eighty';
            case '9':
                return 'ninety';
        };
        return num;

    }

    if (number < 10) {
        if (number == 0) {
            return 'zero';
        }
        return upToTen(numberToString);
    } else if (number >= 10 && number <= 20) {
        return upToTwenty(numberToString);
    } else if (number >= 21 && number <= 99) {
        if (numberToString.slice(1) == 0) {
            return `${tens(numberToString[0])}`;
        }
        return `${tens(numberToString[0])} ${upToTen(numberToString[1])}`;
    } else if (number >= 100 && number <= 999) {
        if (numberToString.slice(1, 3) == 00) {
            return `${upToTen(numberToString[0])} hundred`;
        } else if (numberToString.slice(1, 2) == 0) {
            return `${upToTen(numberToString[0])} hundred ${upToTen(numberToString[2])}`;
        } else if (numberToString.slice(1, 2) < 2) {
            return `${upToTen(numberToString[0])} hundred ${upToTwenty(numberToString.slice(1))}`;
        } else if (numberToString.slice(2) == 0) {
            return `${upToTen(numberToString[0])} hundred ${tens(numberToString[1])}`;
        } else {
            return `${upToTen(numberToString[0])} hundred ${tens(numberToString[1])} ${upToTen(numberToString[2])}`;
        }

    }

};
