let calculationList = [];
let total = 0;

let calculatorProcess = {
    calculationList: calculationList,
    doEquation: function doEquation(equation){
        if(equation.includes('+')){
            let numArray = equation.split('+');
            doMath(numArray[0], '+', numArray[1]);
        }
        if(equation.includes('-')){
            let numArray = equation.split('-');
            doMath(numArray[0], '-', numArray[1]);
        }
        if(equation.includes('*')){
            let numArray = equation.split('*');
            doMath(numArray[0], '*', numArray[1]);
        }
        if(equation.includes('/')){
            let numArray = equation.split('/');
            doMath(numArray[0], '/', numArray[1]);
        }
    },

}
function doMath(num1, operator, num2){
    console.log(num1, operator, num2);
    let firstNum = Number(num1);
    let secondNum = Number(num2);
    
    //if statements for math
    if (operator == '+'){
        calculationList.push(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
    }
    if (operator == '-'){
        calculationList.push(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
    }
    if (operator == '*'){
        calculationList.push(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
    }
    if (operator == '/'){
        calculationList.push(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
    }
}


module.exports = calculatorProcess;