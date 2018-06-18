var katzDeli;
var katzDeliLine = [];
var nameServing = 'There is nobody waiting to be served!';
var message = '';
var name = ["Steven", "Blake", "Avi", "Grace"];
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
function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    mesage = 'The line is currently: '
    for (let i = 1, i < katzDeliLine.length; i++)
    message += i + '. ' + katzDeliLine[i - 1] + ', ';
     {
      message += i + '.' + katzDeliLine[katzDeliLine.length-1];
      return message;
    }
  else return (message = 'The line is currently empty.')
}
