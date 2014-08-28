$(document).ready(function() {

	/* on keypress run progeam */
	$('header').on('keypress', 'input', function(event) {

		/* on enter key */
		if(event.which == '13'){

			/* clear any existing fizzbuzz text */
			$('#container').text( ' ');

			userInput = $('input').val();

			/* if text is a number only, run fizzbuzz */
			if($.isNumeric(userInput) && +userInput <= 100 && userInput % 1 === 0) {


				/*run a loop up the input value that the user entered */
				for (i = 0; i <= $('input').val(); i++) {
					
					if ((i % 3) == 0 && (i % 5) == 0 ){
						$('#container').append("FizzBuzz " + '<br/>' + '<br/>');
						console.log("FizzBuzz");
					}
					else if (i % 3 == 0) {
						$('#container').append("Fizz " );
						console.log("Fizz");
					}
					else if (i % 5 == 0) {
						$('#container').append("Buzz ");
						console.log("Buzz");
					}

					else {
						$('#container').append(i + ' ');
						console.log(i);
					}
				}
			}

			else if ($.isNumeric(userInput)) {
				alert("Must be an integer and less than 100!")				
			}

			/* if text is not a number, alert the user */
			else {
				alert("Numbers only please!")
			}

		}
		
	})	







})












