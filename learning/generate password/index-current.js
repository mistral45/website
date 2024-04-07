function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChar = "0123456789";
    const symbolChar = "!@#$%^&*()_+-=";

    let allowedChar = "";
    let password = "";

    allowedChar += includeLowercase ? lowercaseChar : "";
    allowedChar += includeUppercase ? uppercaseChar : "";
    allowedChar += includeNumbers ? numberChar : "";
    allowedChar += includeSymbols ? symbolChar : "";

    if(passwordLength <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedChar.length === 0){
        return `(At least 1 set of characters needs to be selected)`;
    }
    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[randomIndex];
    }
    return password;
}
let password = document.getElementById("generate").onclick = function (){
    let passwordLength = document.getElementById("passwordlength").value;
    let includeLowercase = document.getElementById("lowercase").checked;
    let includeUppercase = document.getElementById("UPPERCASE").checked;
    let includeNumbers = document.getElementById("numbers").checked;
    let includeSymbols = document.getElementById("symbols").checked;
    document.getElementById("password").textContent = generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);
}
