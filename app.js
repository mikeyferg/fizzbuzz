$(document).ready(function() {


	for (i = 0; i <= 100; i++) {
		
		if ((i % 3) == 0 && (i % 5) == 0 ){
			$('body').append("FizzBuzz ");
			console.log("FizzBuzz");
		}
		else if (i % 3 == 0) {
			$('body').append("Fizz ");
			console.log("Fizz");
		}
		else if (i % 5 == 0) {
			$('body').append("Buzz ");
			console.log("Buzz");
		}

		else {
			$('body').append(i + ' ');
			console.log(i);
		}


	}


})












