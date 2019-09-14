"<h2>A [adjective] programmer thought he knew everything and [verb] at the [noun]</h2>"

var questions = 3;
var questionsLeft = ' [' + questions + 'questions left]';


var adjective = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + 'questions left]';
var sentence = "<h2>A " + adjective;
var verb = prompt('Please type a verb (past tense)' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + 'questions left]';

var noun = prompt('Please type a noun' + questionsLeft);
alert('All done. Ready for the message?')
sentence += ' programmer thought he knew everything and ' + verb;
sentence += ' the ' + noun + '</h2>';
document.write(sentence);