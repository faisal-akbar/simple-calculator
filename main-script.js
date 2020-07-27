// get history
function getHistory() {
    return document.getElementById('history-value').value;
}
// alert(getHistory());

// Print History
function printHistory(num) {
    document.getElementById('history-value').value = num;
}
// printHistory('99+2')

function getOutput() {
    return document.getElementById('output-value').value;
}
// Print Output
function printOutput(num) {
    // document.getElementById('output-value').value = num;
    if (num == "") {
        document.getElementById('output-value').value = num;
    } else {
        document.getElementById('output-value').value = getFormattedNumber(num);
    }

}
// printOutput('999674');
// Format the number as comma separated value:
function getFormattedNumber(num) {
    if (num == "-") {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

// printOutput("");

// manipulate the comma separated string number to number

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}

// alert(reverseNumberFormat('77,345'))


// Operator:
var operator = document.getElementsByClassName('operator');
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        // alert("the operator clicked:" + this.id);
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        } else if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) { //if output has value
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        } else {
            var output = getOutput();
            var history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                } else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }

        }

    });
}

// Numbers
var number = document.getElementsByClassName('number');
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        // alert("the number clicked:" + this.id);
        var output = reverseNumberFormat(getOutput());

        if (output != NaN) { //if output is number
            output = output + this.id;
            printOutput(output);
        }
    });
}