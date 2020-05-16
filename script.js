function addText(ch) {
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

    const res = parseFloat(eval(readValue).toFixed(2));
    document.getElementById('display').value = res;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function check(ch) {
    if(ch === '+' || ch === '-' || ch === '*' || ch === '/' || ch === '%' || ch === '.')  return true;
    else return false;
}