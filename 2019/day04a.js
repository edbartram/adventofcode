console.log( validateLength( "111111" ), validateAdjacentDigitsSame( "111111" ), validateDigitsIncrease( "111111" ) ); // true, true, true
console.log( validateLength( "223450" ), validateAdjacentDigitsSame( "223450" ), validateDigitsIncrease( "223450" ) ); // true, true, false
console.log( validateLength( "123789" ), validateAdjacentDigitsSame( "123789" ), validateDigitsIncrease( "123789" ) ); // true, false, true

var start = 138241; // first valid number is 138888
var end = 674034; // last valid number is 669999
var passwords = [];

for ( var p = start; p <= end; p++ ) {
	var digits = p.toString();

	if ( validateLength( digits ) && validateAdjacentDigitsSame( digits ) && validateDigitsIncrease( digits ) ) {
		passwords.push( digits );
	}
}

console.log( passwords.length );

function validateLength( digits ) {
	return ( digits.length == 6 ) ? true : false;
}

function validateAdjacentDigitsSame( digits ) {
	var pass = false;
	var previous = -1;

	for ( var d = 0; d < digits.length; d++ ) {
		var digit = digits.substr( d, 1 );

		if ( digit == previous ) {
			pass = true;
		}
		previous = digit;
	}

	return pass;
}

function validateDigitsIncrease( digits ) {
	var pass = true;
	var previous = -1;

	for ( var d = 0; d < digits.length; d++ ) {
		var digit = parseInt( digits.substr( d, 1 ) );

		if ( digit < previous ) {
			pass = false;
		}

		previous = digit;
	}

	return pass;
}
