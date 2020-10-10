/*Type your code here .. */
var term1 = 0;
var term2 = 1;
var i; 
Bot.send("For how many terms do you need the Fibonacci series");
async function respond(inputText){
for(i = 0 ; i <= inputText ; i++){
var nextTerm = term1 + term2;
term1 = term2;
term2 = nextTerm;
Bot.send(nextTerm);
}
}
