function divideBy(firstNumber)
{
    if (typeof firstNumber === "number") {
        return function (secondNumber) {
            if (typeof secondNumber === "number") 
            {
                return secondNumber / firstNumber
            } 
            else
            {
                TypeError("secondNumber must be a number")    
            }
        }
    }
    else 
    {
        TypeError("firstNumber must be a number")
    }
}

function addBy(firstNumber)
{
    if (typeof firstNumber === "number") {
        return function (secondNumber) {
            if (typeof secondNumber === "number") 
            {
                return secondNumber + firstNumber
            } 
            else
            {
                TypeError("secondNumber must be a number")    
            }
        }
    }
    else 
    {
        TypeError("firstNumber must be a number")
    }
}


const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);

console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));