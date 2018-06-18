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
function nowServing() {

}
function currentLine() {

}
