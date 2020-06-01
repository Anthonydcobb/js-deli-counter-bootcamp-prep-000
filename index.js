var katzDeliLine = [];


function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
};

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `now serving: ${line.shift()}`
  }
}

function currentLine(line) {
  lineStr = [];
  for (var i = 0; i < line.length; i++) {
    lineStr.push(' ' + [i + 1] + '. ' +  line[i])
  }
  if (line.length === 0) {
    return "the line is currently empty.";
  } else {
    return "The line is currently:" + lineStr;
  }

}

takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace")
takeANumber(katzDeliLine, "Kent")

currentLine(katzDeliLine);

nowServing(katzDeliLine);

currentLine(katzDeliLine);

takeANumber(katzDeliLine, "Matz")

currentLine(katzDeliLine);

nowServing(katzDeliLine);
currentLine(katzDeliLine);
