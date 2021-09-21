const birthDate = document.querySelector('.date');
const luckyNumber = document.querySelector('.ln');
const buttonCheck = document.querySelector('.btn');
const result = document.querySelector('.output');
buttonCheck.addEventListener('click', clickHandler);

function clickHandler() {
    const dob = birthDate.value;
    const sum = calculateSumOfBirthDate(dob);

    if(luckyNumber.value < 0) {
        result.textContent = "Please enter a positive lucky number"
    } 

    else if (sum >0 && dob  && !(luckyNumber.value == "" )) {
        birthDateIsLuckyOrNot(sum, luckyNumber.value);
    } 
    
    else {
        result.innerText = 'Please enter the fields correctly.';
    }
}

function calculateSumOfBirthDate(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}


function birthDateIsLuckyOrNot(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        result.innerText = 'Congratulations your Birthday is lucky';
    } else {
        result.innerText = ' Oh, No!! Your Birthday is not lucky.';
    }
}
