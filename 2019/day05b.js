//var intCode = [ 3,9,8,9,10,9,4,9,99,-1,8 ]; // Position Mode: if input = 8 then output=1 else output=0
//var intCode = [ 3,9,7,9,10,9,4,9,99,-1,8 ]; // Position Mode: if input < 8 then output=1 else output=0
//var intCode = [ 3,3,1108,-1,8,3,4,3,99 ]; // Immediate Mode: if input = 8 then output=1 else output=0
//var intCode = [ 3,3,1107,-1,8,3,4,3,99 ]; // Immediate Mode: if input < 8 then output=1 else output=0
//var intCode = [ 3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9 ]; // Position Mode: if input > 0 then output=1 else output=0
//var intCode = [ 3,3,1105,-1,9,1101,0,0,12,4,12,99,1 ]; // Immediate Mode: if input > 0 then output=1 else output=0
//var intCode = [ 3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99 ] // if input < 8 then output 999 else if input = 8 then output 1000 else if input > 8 output 1001
var intCode = [ 3,225,1,225,6,6,1100,1,238,225,104,0,1102,78,40,225,1102,52,43,224,1001,224,-2236,224,4,224,102,8,223,223,101,4,224,224,1,224,223,223,1,191,61,224,1001,224,-131,224,4,224,102,8,223,223,101,4,224,224,1,223,224,223,1101,86,74,225,1102,14,76,225,1101,73,83,224,101,-156,224,224,4,224,102,8,223,223,101,6,224,224,1,224,223,223,1102,43,82,225,2,196,13,224,101,-6162,224,224,4,224,102,8,223,223,101,5,224,224,1,223,224,223,1001,161,51,224,101,-70,224,224,4,224,102,8,223,223,1001,224,1,224,1,224,223,223,102,52,187,224,1001,224,-832,224,4,224,102,8,223,223,101,1,224,224,1,224,223,223,1102,19,79,225,101,65,92,224,1001,224,-147,224,4,224,1002,223,8,223,101,4,224,224,1,223,224,223,1102,16,90,225,1102,45,44,225,1102,92,79,225,1002,65,34,224,101,-476,224,224,4,224,102,8,223,223,1001,224,5,224,1,224,223,223,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,107,226,226,224,1002,223,2,223,1005,224,329,1001,223,1,223,1007,226,226,224,102,2,223,223,1005,224,344,101,1,223,223,1008,226,226,224,102,2,223,223,1005,224,359,1001,223,1,223,8,226,677,224,102,2,223,223,1006,224,374,101,1,223,223,1107,226,677,224,1002,223,2,223,1006,224,389,101,1,223,223,1108,226,677,224,102,2,223,223,1005,224,404,101,1,223,223,107,677,677,224,102,2,223,223,1006,224,419,1001,223,1,223,7,677,226,224,102,2,223,223,1005,224,434,101,1,223,223,1007,677,677,224,102,2,223,223,1005,224,449,1001,223,1,223,108,226,677,224,102,2,223,223,1005,224,464,1001,223,1,223,108,226,226,224,102,2,223,223,1006,224,479,101,1,223,223,107,226,677,224,102,2,223,223,1006,224,494,1001,223,1,223,7,226,226,224,1002,223,2,223,1006,224,509,101,1,223,223,1108,677,226,224,102,2,223,223,1005,224,524,101,1,223,223,1107,677,226,224,102,2,223,223,1005,224,539,101,1,223,223,1008,677,226,224,102,2,223,223,1005,224,554,101,1,223,223,1008,677,677,224,1002,223,2,223,1006,224,569,101,1,223,223,1107,677,677,224,102,2,223,223,1006,224,584,1001,223,1,223,1108,226,226,224,1002,223,2,223,1006,224,599,101,1,223,223,7,226,677,224,102,2,223,223,1006,224,614,101,1,223,223,108,677,677,224,1002,223,2,223,1006,224,629,101,1,223,223,1007,677,226,224,102,2,223,223,1006,224,644,101,1,223,223,8,677,677,224,1002,223,2,223,1006,224,659,101,1,223,223,8,677,226,224,102,2,223,223,1005,224,674,101,1,223,223,4,223,99,226 ];

var instruction = 0;

while ( instruction < intCode.length ) {
	var code = "00000" + intCode[ instruction ].toString();
	var opCode = parseInt( code.substr( code.length - 1, 2 ) );
	var param1 = parseInt( code.substr( code.length - 3, 1 ) );
	var param2 = parseInt( code.substr( code.length - 4, 1 ) );

	switch( opCode ) {
		case 1: // add
			var x = get( param1, intCode[ instruction + 1 ] );
			var y = get( param2, intCode[ instruction + 2 ] );
			intCode[ intCode[ instruction + 3 ] ] = x + y;
			instruction += 4;
			break;

		case 2: // multiply
			var x = get( param1, intCode[ instruction + 1 ] );
			var y = get( param2, intCode[ instruction + 2 ] );
			intCode[ intCode[ instruction + 3 ] ] = x * y;
			instruction += 4;
			break;

		case 3: // input
			var input = prompt( "Input?" );
			intCode[ intCode[ instruction + 1 ] ] = parseInt( input );
			instruction += 2;
			break;

		case 4: // output
			var x = get( param1, intCode[ instruction + 1 ] );
			console.log( x );
			instruction += 2;
			break;

		case 5: // jump-if-true
			var x = get( param1, intCode[ instruction + 1 ] );
			var y = get( param2, intCode[ instruction + 2 ] );
			if ( x > 0 ) {
				instruction = y;
			} else {
				instruction += 3;
			}
			break;

		case 6: // jump-if-false
			var x = get( param1, intCode[ instruction + 1 ] );
			var y = get( param2, intCode[ instruction + 2 ] );
			if ( x == 0 ) {
				instruction = y;
			} else {
				instruction += 3;
			}
			break;

		case 7: // less than
			var x = get( param1, intCode[ instruction + 1 ] );
			var y = get( param2, intCode[ instruction + 2 ] );
			intCode[ intCode[ instruction + 3 ] ] = ( x < y ? 1 : 0 )
			instruction += 4;
			break;

		case 8: // equals
			var x = get( param1, intCode[ instruction + 1 ] );
			var y = get( param2, intCode[ instruction + 2 ] );
			intCode[ intCode[ instruction + 3 ] ] = ( x == y ? 1 : 0 )
			instruction += 4;
			break;

		case 98: // No Operation
			instruction += 1;
			break;

		case 99: // halt
			//console.log( "halt" );
			instruction = intCode.length;
			break;

		default: // error
			//console.log( "error" );
			instruction = intCode.length;
			break;
	}
}

function get( mode, value ) {
	if ( mode == 0 ) { // position
		return intCode[ value ];
	} else if ( mode == 1 ) { // immediate
		return value;
	} else { // error
		return null;
	}
}
