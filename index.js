var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push('${name}');
  return ('Welcome, ${name}. You are number ${katzDeli.length} in line.');
}

function nowServing(katzDeliLine) {
 if (katzDeli.length === 0) {
   message = 'There is nobody waiting in line!';
  }
 else {
   message = 'Currently serving ${katzDeliLine.shift()}.';
 }
 return message;
}
/*
function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    mesage = 'The line is currently: '
    for (let i = 1, i < katzDeliLine.length; i++) {
      message += i + '. ' + katzDeliLine[i - 1] + ', ';
    }
      message += i + '. ' + katzDeliLine[katzDeliLine.length-1];
      return message;
  }
  else return (message = 'The line is currently empty.')
}
*/
