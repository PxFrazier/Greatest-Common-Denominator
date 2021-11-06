function GCD(num1, num2)
{
    let remainder = 1;
    let result;
	
    while(remainder)
    {
	remainder = num1 % num2;
	num1 = num2;
	num2 = remainder;
    }
	
    num1 == 1 ?
    result = 'These are coprimes' :
    result = 'These are not coprimes'

    return result;
}

console.log(`(2, 4): ${GCD(2, 4)}`); //Outputs 'These are not coprimes'
console.log(`(3, 10): ${GCD(3, 10)}`); //Outputs 'These are coprimes'
