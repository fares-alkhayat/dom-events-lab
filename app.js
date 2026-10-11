/*------------------------ Cached Element References ------------------------*/


/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll('.button');
const numberElements = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display')
const clear = document.querySelector('#clear')


/*-------------------------------- Variables --------------------------------*/

let number1 = null
let number2 = null
let operation = null

/*-------------------------------- Functions --------------------------------*/

function handleClickNumber(event){
    console.log(event.target.textContent)

    if(!number1 && !number2 && !operation){
        number1 = event.target.textContent
        display.textContent = number1
    }
    else if(number1 && !number2 && !operation){
        number1 += event.target.textContent
        display.textContent = number1
    }


    else if (number1 && !number2 && operation)
    {number2 = event.target.textContent
        display.textContent = number2
    }

    else if (number1 && number2 && operation)
    {number2 += event.target.textContent
        display.textContent = number2
    }

    console.log('Clicked on number')

    console.log(`Number 1: ${number1}`)
    console.log(`Number 2: ${number2}`)
    console.log(`Operator: ${operation}`)
}

function handleClickOperator(event){
    console.log('Clicked on operator')

    
        if(event.target.textContent === 'C'){
    display.textContent = "0";
    number1 = null
    number2 = null
    console.log(`Number 1: ${number1}`)
    console.log(`Number 2: ${number2}`)
    console.log(`Operator: ${operation}`)
return}


    if(number1 && !number2 && !operation){
        operation = event.target.textContent
        display.textContent = operation

}
    console.log(`Number 1: ${number1}`)
    console.log(`Number 2: ${number2}`)
    console.log(`Operator: ${operation}`)}

function handleClickEquals(event){
    console.log('Clicked on equals')

    if( operation === '+'){
    display.textContent = Number(number1) + Number(number2)
    console.log(`Number 1: ${number1}`)
    console.log(`Number 2: ${number2}`)
    console.log(`Operator: ${operation}`)}

        if(operation === '-'){
    display.textContent = Number(number1) - Number(number2)
    console.log(`Number 1: ${number1}`)
    console.log(`Number 2: ${number2}`)
    console.log(`Operator: ${operation}`)}

        if(operation === '*'){
    display.textContent = Number(number1) * Number(number2)
    console.log(`Number 1: ${number1}`)
    console.log(`Number 2: ${number2}`)
    console.log(`Operator: ${operation}`)}

        if(operation === '/'){
    display.textContent = Number(number1) / Number(number2)
    console.log(`Number 1: ${number1}`)
    console.log(`Number 2: ${number2}`)
    console.log(`Operator: ${operation}`)

        }}
/*----------------------------- Event Listeners -----------------------------*/

/*
calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  console.log(event.target.innerText);

  // Example
  if (event.target.classList.contains('number')) {
    // Do something with a number
  }

  // Example
  if (event.target.innerText === '*') {
    // Do something with this operator
  }
});
*/

equals.addEventListener('click',handleClickEquals)

for(let oneNumElement of numberElements){
oneNumElement.addEventListener('click',handleClickNumber)
}

for (let oneOperatorElement of operator){
oneOperatorElement.addEventListener('click',handleClickOperator)
}


// function calculateNumber(){
//     console.log(event.target)
//     if(event.target.id === "#addition")
//     {console.log('Addition')
//     sumElement = Number(number1.value) + Number(number2.value)  
//     console.log(sumElement)  

//     }
    
//     else if
//     (event.target.id === "#subtraction")
//     {console.log('Subtraction')
//     diffElement = Number(number1.value) - Number(number2.value)
//     console.log(diffElement)
//     }

//     else if
//     (event.target.id === "#multiplication")
//     { console.log('Multiplication')
//     productElement = Number(number1.value) * Number(number2.value)
//     console.log(productElement)}

//         else if
//     (event.target.id === "#division")
//     { console.log('Division')
//     productElement = Number(number1.value) / Number(number2.value)
//     console.log(productElement)}

// }