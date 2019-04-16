const imc = {}

const imcIntervalsTable = [
  [0, 18.5],
  [18.6, 24.9],
  [25.0, 29.9],
  [30.0, 34.9],
  [35.0, 39.9],
  [40, Infinity],
]

const imcLegendsTable = [
  'Abaixo do peso',
  'Peso ideal',
  'Levemente acima do peso',
  'Obesidade grau I',
  'Obesidade grau II (severa)',
  'Obesidade grau III (morbida)',
]

imc.calc = (weight, height) => parseFloat(height > 0 ? (weight / (height * height)).toFixed(2) : 0)

imc.getPos = (value, table) => table && table.length > 0 ? table.findIndex((tableItem) => value >= tableItem[0] && value <= tableItem[1]) : -1

imc.getLegend = (pos, table) => table && table.length > 0 ? table[pos] : -1

imc.getStatus = (weight, height) => imc.getLegend(imc.getPos(imc.calc(weight, height), imcIntervalsTable), imcLegendsTable)

module.exports = imc
