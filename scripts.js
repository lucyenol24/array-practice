
// TODO: Build an array of strings that could be answers to magic 8 ball type questions.

var fortunes = ["perhaps", "yaaaas", "nah", "look a squirrel!"]

/* TODO: Write a form handler function that will:
  1. capture the question asked in the form
  2. randomly select an element from the array of answers
  3. console log something conversational to user, like "Oh, you want to know [question]? Well, I think... [answer]"
*/

var cart = [{name: "yes"}, {name: "no"}]

  
function clicker(fortune) {
  
  var i = cart.findIndex(function(el)  {
    return el.name.toLowerCase() == fortune })
  }
}
//first part of hw with onclick. (ADD REMOVE section) if i >=0, that means the element is in the array already, so splice to get it out of the array. if its not in the array, push it into the array. 
//sort: FOR THE NAME do the lowercase etc stuff . console log the results of the sort.


function removeAnswer() {
  
  var remv = document.removalForm.remove.value;
  
  var index = fortunes.indexOf(remv);
  
  if(index >= 0) {
    fortunes.splice(index, 1) 
//    index and how many elements we want it to take. we only want to remove one element in this example. now fortunes will be one element shorter than it used to be.
  }
  
  console.log(fortunes);
  
  event.preventDefault();
}


function insertAnswer() {
  
  var answer = document.answerForm.answer.value;
  
  fortunes.push(answer);
  
  console.log(fortunes);
  
  event.preventDefault();
}
//HW: pushing an element into a cart array will look like this code. 

function magicAnswer() {
  
  var question = document.questionForm.question.value;
  
  var rando = Math.floor(Math.random() * fortunes.length);
  
  var answer = fortunes[rando];
  
  var output = "So you want to know " + question + " ...well I think... " + answer;

  console.log(output);
  
  event.preventDefault();
}
