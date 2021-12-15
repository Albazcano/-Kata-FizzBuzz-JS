/*for ($number=1;$number<=100;$number=$number++) {
    console.log = $number;
}*/

/*function fizzbuzz (number) {

	if (!Number.isInteger(number)) throw new Error('Invalid argument');
	if (!isIntegerInRange(number, 1, 100)) throw new Error('Invalid argument');

	let result = '';
	if (isMultiple(number, 3)) {
		result += 'Fizz';
	}
	if (isMultiple(number, 5)) {
		result += 'Buzz';
	}
	return result || number;
}*/

function fizzbuzz (number) {
    if (number % 3 == 0) {
        return "Fizz";
    } 
}