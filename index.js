var katzDeli;
var katzDeliLine = [];
var nameServing = 'There is nobody waiting in line!';
var message = '';
let position;

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  position = katzDeliLine.length;
  message = 'Welcome, ${name}. You are number ${position} in line.'
}
function nowServing(katzDeliLine) {
 if (katzDeliLine.length === 0) {
   message = nameServing;
 }
 else {
   message = 'Currently serving ${katzDeliLine.shift()}.';
 }
 return message;
}
function currentLine() {

}
