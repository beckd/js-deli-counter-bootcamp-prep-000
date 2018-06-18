function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome ${name}. You are number ${katzDeliLine.length} in line.';
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) return 'Currently serving ${katzDeliLine.shift()}.';
  else return "There is nobody waiting to be served!";
}
function currentLine(katzDeliLine) {
  var line = 'The line is currently: ';
  var line2 = [];
  if (katzDeliLine.length === 0) return "The line is currently empty.";
  else {
    for (let i = 0; i < katzDeliLine.length; i++);
    line2[i] = "{${i+1]}. ${katzDeliLine[i]}";
  }
  line += line2.join(', ')
  return line2;
  }
  takeANumber(katzDeli, 'Ada');
  takeANumber(katzDeli, 'Grace');
  takeANumber(katzDeli, 'Kent');
