const trigram = require('./trigram.json')
var phone = "0122877288"
var length = phone.length


var part1;
var part2;
phone = phone.split("0").join("8")
if(length % 2 == 0){
  part1 = phone.slice(0,-(length/2))
  part2 = phone.slice(length/2)
}else {
  part1 = phone.slice(0,-Math.round(length/2))
  part2 = phone.slice(Math.floor(length/2))
}

var lengthPart1 = part1.length;
var lengthPart2 = part2.length;

var topTrigram = {
  sumOfDigits: part1.split("").reduce((partialSum, a) => Number(partialSum) + Number(a), 0),
  mod: part1.split("").reduce((partialSum, a) => Number(partialSum) + Number(a), 0) % 8
}

var bottomTrigram = {
  sumOfDigits: part2.split("").reduce((partialSum, a) => Number(partialSum) + Number(a), 0),
  mod: part2.split("").reduce((partialSum, a) => Number(partialSum) + Number(a), 0) % 8
}

if(topTrigram.mod == 0) topTrigram.mod = 8
if(bottomTrigram.mod == 0) bottomTrigram.mod = 8

var changingLine = {
  sumOfDigits: topTrigram.sumOfDigits + bottomTrigram.sumOfDigits,
  mod: (topTrigram.sumOfDigits + bottomTrigram.sumOfDigits) % 6
}

console.log(`
  Top Trigram: ${trigram[topTrigram.mod].bagua}
  Bottom Trigram: ${trigram[bottomTrigram.mod].bagua}
  Changing Line: ${trigram[changingLine.mod].bagua}
`)
