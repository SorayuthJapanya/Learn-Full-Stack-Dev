
let passLenght = document.getElementById('passLenght');
let passLenghtValue = document.getElementById('passLenghtValue');
let displayPass = document.getElementById('displayPass');
let lovercase = document.getElementById('lovercase');
let uppercase = document.getElementById('uppercase');
let number = document.getElementById('number');
let symbol = document.getElementById('symbol');
let genBtn = document.getElementById('genBtn');
let copyIcon = document.getElementById('copyIcon');

passLenght.addEventListener('input', () => {
    passLenghtValue.textContent = passLenght.value;
});

// Click to Generate Password
genBtn.addEventListener('click', () => {
    displayPass.value = genPassFunc();
});

// Function to Generate Password
function genPassFunc() {
    let length = parseInt(passLenght.value);
    let charset = "";
    let password = "";

    if (lovercase.checked) charset += "abcdefghijklmnopqrstuvwxyz";
    if (uppercase.checked) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number.checked) charset += "0123456789";
    if (symbol.checked) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?/";

    if (charset.length === 0) return "Please select option!!";

    for (let i = 0; i < length; i++) {
        let randomPass = Math.floor(Math.random() * charset.length);

        password += charset[randomPass];
    }
    return password;
}

copyIcon.addEventListener('click', () => {
    navigator.clipboard.writeText(displayPass.value);
    alert('Copy to Clipboard: ' + displayPass.value);
});
