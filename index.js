function calculateSum() {
    var input = document.getElementById('inputString').value;
    var output = document.getElementById('result');
    var error = document.getElementById('errorMessage');

    if (!input) {
        output.innerText = 0;
        return;
    }

    try {
        const sum = add(input)
        output.innerText = sum;
        error.innerText = '';
        return;

    } catch (e) {
        output.innerText = '';
        error.innerText = e.message;
    }

    function add(input) {
        let delimiter = /,|\\n/;
        let negativeNo = [];

        if (input.startsWith("//")) {
            const delimiterInfo = input.match(/\/\/(.+)\\n/); //this regex check custom delimeter //[delimiter]\n[numbers…] 
            if (delimiterInfo) {
                delimiter = new RegExp(delimiter.source + '|' + delimiterInfo[1]); // add custom delimiter to existing delimiter
                input = input.slice(delimiterInfo[0].length);
            }
        }

        const numbers = input.split(delimiter).map(Number);

        if (numbers.some(isNaN)) {
            throw new Error('Input string contains non-numeric values');
        }

        const total = numbers.reduce((a, b) => {
            if (b < 0) {
                negativeNo.push(b);
            }
            return a + b;
        }, 0);

        if (negativeNo.length) {
            throw new Error(`Negative numbers not allowed: ${negativeNo.join(', ')}`);
        }

        return total;
    }


}
