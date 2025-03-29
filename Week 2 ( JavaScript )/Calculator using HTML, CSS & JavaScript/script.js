

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let currentString = "";
let isResultDisplayed = false;

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const btnValue = e.target.innerHTML;
        console.log(btnValue);

        // =: Equal
        if (btnValue === '=') {
            try {
                currentString = eval(currentString).toString();
                input.value = currentString;
                isResultDisplayed = true;
            } catch (error) {
                input.value = "Error";
                currentString = "";
            }
            return;
        }

        // AC: Clear Display
        if (btnValue === 'AC') {
            currentString = "";
            input.value = "";
            return;
        } 

        // DEL: Delete 1 at last
        if (btnValue === 'DEL') {
            currentString = currentString.slice(0, -1);
            input.value = currentString;
            return;
        }

        if (isResultDisplayed) {
            if (!isNaN(btnValue) || btnValue === ".") {
                currentString = "";
            }
            isResultDisplayed = false;
        }

        currentString += btnValue;
        input.value = currentString;
    });
});