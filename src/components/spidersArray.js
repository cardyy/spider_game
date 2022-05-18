const level = localStorage.getItem('level');
let spiders;
let lines;
console.log(level);
const level1Spiders = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

const level2Spiders = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
];

const level3Spiders = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
];

const level1Lines = [
  ['one', 'eight', 'line1'],
  ['three', 'eight', 'line2'],
  ['five', 'eight', 'line3'],
  ['two', 'four', 'line4'],
  ['three', 'five', 'line5'],
  ['four', 'five', 'line6'],
  ['six', 'five', 'line7'],
  ['seven', 'eight', 'line8'],
  ['seven', 'nine', 'line9'],
];

const level2Lines = [
  ['one', 'eight', 'line1'],
  ['three', 'eight', 'line2'],
  ['five', 'eight', 'line3'],
  ['two', 'four', 'line4'],
  ['three', 'five', 'line5'],
  ['four', 'five', 'line6'],
  ['six', 'five', 'line7'],
  ['seven', 'eight', 'line8'],
  ['seven', 'nine', 'line9'],
  ['twelve', 'ten', 'line10'],
  ['nine', 'eleven', 'line11'],
  ['eleven', 'twelve', 'line12'],
];

const level3Lines = [
  ['one', 'eight', 'line1'],
  ['three', 'eight', 'line2'],
  ['five', 'eight', 'line3'],
  ['two', 'four', 'line4'],
  ['three', 'five', 'line5'],
  ['four', 'five', 'line6'],
  ['six', 'five', 'line7'],
  ['seven', 'eight', 'line8'],
  ['seven', 'nine', 'line9'],
  ['one', 'ten', 'line10'],
  ['twelve', 'eleven', 'line11'],
  ['thirteen', 'fourteen', 'line12'],
  ['fourteen', 'nine', 'line13'],
  ['eleven', 'thirteen', 'line14'],
  ['fourteen', 'fifteen', 'line15'],
  ['thirteen', 'sixteen', 'line16'],
];
switch (level) {
  case '1':
    spiders = level1Spiders;
    lines = level1Lines;
    break;
  case '2':
    spiders = level2Spiders;
    lines = level2Lines;
    break;
  case '3':
    spiders = level3Spiders;
    lines = level3Lines;
    break;
  default:
    spiders = level1Spiders;
    lines = level1Lines;
}

const obj = { spiders, lines };

export default obj;
