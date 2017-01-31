//console.log(calculateRibbonLength(['10','10','10']));

var total = 0;
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('advent2.txt')
});

lineReader.on('line', function (line) {
  total += calculateRibbonLength(line.split("x"));
  console.log(total);
});

function calculateRibbonLength(dimension) {
    dimension.sort(function(a, b){return a - b});
    var perimeter = (+dimension[0] + +dimension [1]) * 2;
    var bow = dimension[0] * dimension [1] * dimension[2];
    return perimeter + bow;
}