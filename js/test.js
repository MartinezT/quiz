$(document).ready(function() {
	var counter = 0;
	var score = 0;


	var quizQuestions = [{
			question:"In which movie did Matt Damon star in ?",
			choices:["Jason Bourne", "Dark Knight", "Man on Fire","Titanic"],
			answer: 0
		},
		{
			question:"Which Bill Murray movie was he a rich industrialist ?",
			choices:["The breakfast club", "Highschool Musical", "Rushmore", "Old School"],
			answer: 2	
		},
		{
			question:"What movie did Woody Harrelson show how high he can jump",
			choices:["Basketball", "White Men Can't Jump", "Space Jam", "Blue Chips"],
			answer: 1
		},
		{
			question:"What movie did Wesley Snipes and Sylvester Stallone star together?",
			choices:["Judge Dredd", "Cliffhanger", "Blade", "Demolition Man"],
			answer: 3
		},
		{
			question:"Who was the original voice of Shrek before Mike Myers took over ?",
			choices:["Ben Stiller", "John Leguizamo", "Chris Farley", "Eddie Murphy"],
			answer: 2
		}
	];

	$("#start").click(function() {
		$("#start").hide()
		$("#next").show()
	});	

	$("#next").on("click", function(){
        	$(".choices").empty();

		if(quizQuestions[counter]) {
          		$('.questions h2').text(quizQuestions[counter].question);
          		quizQuestions[counter].choices.forEach(function(choice, i) {
          			$('.choices').append( "<li>" + "<input type='radio' name='radio' value=' " + i + " '/>" + choice + "</li>");
          		});
                	$("#count").text(counter);
			counter++;
            	} else {
            		$("#score").text("score: " + score + " out of 5");
        	}
	});

	$("body").on("click","input", function() {
		$("input[type='radio']:checked").val();
		var $selectedText=$("input[type='radio']:checked").val();
		if($selectedText==quizQuestions[counter-1].answer) {
			score += 1;
		}
	});
});
