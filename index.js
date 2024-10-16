function calculateSum(){
    var input = document.getElementById('inputString').value;
    var output = document.getElementById('result');
    var error = document.getElementById('errorMessage');

    if(!input){
        output.innerText = 0;
        return;
    }

    try{
        const sum = add(input)
        output.innerText = sum;
        error.innerText = '';
        return;

    }catch (e){
        error.innerText = e.message;
    }

    function add(input){
        const numbers =  input.split(',').map(Number);
        if(numbers.some(isNaN)){
            throw new Error('Input string contains non-numeric values');
        }
    
        const total = numbers.reduce((a, b) => a + b, 0);

        return total;
    }
   

}
