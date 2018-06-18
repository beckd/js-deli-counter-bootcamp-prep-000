var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push('${name}');
  return ('Welcome, ${name}. You are number ${katzDeli.length} in line.');
}

function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
   message = 'There is nobody waiting in line!';
  }
 else {
   message = 'Currently serving ${katzDeli.shift()}.';
 }
 return message;
}
