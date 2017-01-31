var total = 0;

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('advent2.txt')
});

lineReader.on('line', function (line) {
  total += calculateArea(line.split("x"));
  console.log(total);
});











function calculateArea(dimension) {
    var area =0;
    area = area + dimension[0] * dimension[1];
    area = area + dimension[1] * dimension[2];
    area = area + dimension[0] * dimension[2];
    area = area * 2;

    dimension.sort(function(a, b){return a - b});
    area = area + dimension[0] * dimension [1];
    return area;
}