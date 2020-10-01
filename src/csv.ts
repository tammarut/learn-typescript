import csv from 'csvtojson'

const csvFilePath = '/home/khunpleum/Desktop/ExampleSheet.csv'

// csv → array objecy
async function csvtojson() {
  const jsonArray = await csv().fromFile(csvFilePath)
  console.log(jsonArray)
}

// Execute
csvtojson()
