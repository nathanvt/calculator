
const calcText = document.querySelector('.return');
// const controls = document.querySelector('.controls');
const buttonHandler = document.querySelector('.controls');
const btn = document.querySelectorAll('button');
let clear = btn['0']

clear.innerHTML = 'AC';

// let input = 0;
let firstInput = '';
let nextInput = '';

// clearbtn.addEventListener('click', clear);
buttonHandler.addEventListener('click', (e) => {
    
    const key = e.target;
    const keyValue = key.innerText;
    // let input = keyValue.innerText;
    const digit = key.classList.contains('digits');
    const clearbtn = key.classList.contains('clear');
    const equalbtn = key.classList.contains('equals');
    const operator = key.classList.contains('operators')
    const addbtn = key.innerText.includes('+');
    const subbtn = key.innerText.includes('–');
    const multbtn = key.innerText.includes('x');
    const divbtn = key.innerText.includes('&divide');

    // const decimalbtn = key.innerText.includes('.')

    // if (digit) {
    //     calcText.innerText = (calcText.innerText === '0') ? keyValue : calcText.innerText + keyValue;
    // };

    if (digit){
        calcText.innerText = (calcText.innerText === '0') ? keyValue : calcText.innerText + keyValue;
        if(operator === ''){
            firstInput + keyValue;
            console.log(firstInput);
        } else {
            nextInput + keyValue;
            console.log(nextInput);
        }
    }

    if (operator) {
        
    }
 


    // if (clearbtn) {
    //     if (calcText.innerText === '0') {
    //         input = 0;
    //     } else if (clear.classList.contains('#equal-state') === true) {
    //         input = 0;
    //         clear.classList.remove('equal-state');
    //     } else {
    //         calcText.innerText = '0';
    //     }
    // }

    // function add(a,b) {

    // }
    // if (addbtn) {
    //     input += Number(calcText.innerText);
    //     console.log(input);
    //     calcText.innerText = '0';
    // }
    // if (subbtn) {
    //     input -= Number(calcText.innerText);
    //     calcText.innerText = '0';
    // }

    // if (equalbtn) {
    //     // console.log(calcText.innerText);
    //     // calcText.innerText = input;
    //     input += Number(calcText.innerText);
    //     console.log(input);
    //     // clear.classList.remove('only');
    //     // clear.classList.add('equal-state');
    //     calcText.innerText = input;

    // }

    if (calcText.innerText === '0') { clear.innerHTML = 'AC'; clear.classList.remove('only')}
    if (calcText.innerText !== '0') { clear.innerHTML = 'C'; clear.classList.add('only') }

    // digits.forEach((item) => {
    //     const digit = item;

    // });


});


function collectInputs() {
        
}

// clearbtn.addEventListener('click', (e) => {
//     calcText.innertext = '0';
// });

// function test() {
//     calcText.innerText = "1234";
// }

