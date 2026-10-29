const generatePasswordButton = document.getElementById("generate-password");
const passwordLengthRangeInput = document.getElementById("password-length-range-input");
const passwordLengthOutput = document.getElementById("password-length-output");
const message = document.getElementById("message");
const copyGeneratedPassword = document.getElementById("copy-generated-password");
const showGeneratedPassword = document.getAnimations("show-generated-password");

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*?";

const generatePassword = () => {
    let password = "";
    const random = new Uint32Array(1);

    const limit = Math.floor(2**32 / characters.length) * characters.length;

    for(let i=0; i< Number(passwordLengthRangeInput.value); i++) {
        do {
            crypto.getRandomValues(random)
        } while(random[0] > limit);
    }

};

const generatePasswordFromRange = () => {
    passwordLengthOutput.textContent = passwordLengthRangeInput.value;
    generatePassword();
};

passwordLengthRangeInput.addEventListener("input", generatePasswordFromRange);
generatePasswordButton.addEventListener("click", generatePassword);

generatePassword();