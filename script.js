let error = 0;

function addText(ch) {

    if(error === 1) {
        document.getElementById('display').value = '';
        error = 0;
    }
    const text = document.getElementById('display').value;

    if(!check(ch)) {
        document.getElementById('display').value += ch;
    }
    else if(check(ch) && !check(text.charAt(text.length-1)) && text.length != 0) {
        document.getElementById('display').value += ch;
    }
} 

function calculateResult(event) {
    event.preventDefault();
    let readValue = document.getElementById('display').value;

    if(check(readValue.charAt(readValue.length-1))) { 
        readValue = readValue.substring(0, readValue.length-1);
    }
    try {
        const res = parseFloat(eval(readValue).toFixed(2));
        if(res === Infinity || res === -Infinity) throw 'Divide by Zero';
        if(isNaN(res)) throw 'Result is Undefined';
        document.getElementById('display').value = res;
        document.getElementById('display').value = res;
    }
    catch(err) {
        if(document.getElementById('display').value !== '')
            document.getElementById('display').value = err;
        error = 1;
    }

}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let text = document.getElementById('display').value;
    text = text.substring(0, text.length-1); 
    if(error === 0) document.getElementById('display').value = text;
    else document.getElementById('display').value = '';
}

function check(ch) {
    if(ch === '+' || ch === '-' || ch === '*' || ch === '/' || ch === '%' || ch === '.')  return true;
    else return false;
}