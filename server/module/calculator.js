let calculationList = [];

let calculatorProcess = {
    calculationList: calculationList,
    calculationTotal: 0,
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
        calculatorProcess.calculationTotal = firstNum + secondNum;
        calculationList.push(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
    }
    if (operator == '-'){
        calculatorProcess.calculationTotal = firstNum - secondNum;
        calculationList.push(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
    }
    if (operator == '*'){
        calculatorProcess.calculationTotal = firstNum * secondNum;
        calculationList.push(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
    }
    if (operator == '/'){
        calculatorProcess.calculationTotal = firstNum / secondNum;
        calculationList.push(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
    }
}


module.exports = calculatorProcess;