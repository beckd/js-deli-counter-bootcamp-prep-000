var katzDeli;
var katzDeliLine = [];
var nameServing = 'There is nobody waiting to be served!';
var message = '';
var name = ["Steven", "Blake", "Ada", "Grace"];
let position;

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  position = katzDeliLine.length;
  message = 'Welcome, ${name}. You are number ${position} in line.'
}
function nowServing(katzDeliLine) {
 if (katzDeliLine.length === 0) {
   message = 'There is nobody waiting in line!';
  }
 else {
   message = 'Currently serving ${katzDeliLine.shift()}.';
 }
 return message;
}
function currentLine() {

}
