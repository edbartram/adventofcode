console.log( validateTwoAdjacentDigitsSame( "112233" ) ); // true
console.log( validateTwoAdjacentDigitsSame( "123444" ) ); // false
console.log( validateTwoAdjacentDigitsSame( "111122" ) ); // true
console.log( validateTwoAdjacentDigitsSame( "111112" ) ); // false

var start = 138241; // first valid number is 138888
var end = 674034; // last valid number is 669999
var passwords = [];

for ( var p = start; p <= end; p++ ) {
	var digits = p.toString();

	if ( validateLength( digits ) && validateTwoAdjacentDigitsSame( digits ) && validateDigitsIncrease( digits ) ) {
		passwords.push( digits );
	}
}

console.log( passwords.length ); // 1627 is incorrect


function validateLength( digits ) {
	return ( digits.length == 6 ) ? true : false;
}

function validateTwoAdjacentDigitsSame( digits ) {
	var pass = false;

	for ( var d = 0; d < digits.length - 1; d++ ) {
		var digitPrev = parseInt( digits.substr( d - 1, 1 ) );
		var digit = parseInt( digits.substr( d, 1 ) );
		var digit1 = parseInt( digits.substr( d + 1, 1 ) );
		var digit2 = parseInt( digits.substr( d + 2, 1 ) );

		if ( digit != digitPrev && digit == digit1 && digit != digit2 ) {
			var pass = true;
			break;
		}
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
