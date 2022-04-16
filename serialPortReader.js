'use strict';

const { ReadlineParser, SerialPort } = require('serialport');
const Data = require('./database/model');

const parser = new ReadlineParser({ delimiter: '\r\n' });
const port = new SerialPort({ path: 'COM3', baudRate: 9600 });

port.pipe(parser);
port.on('open', () => console.log('Port open'));
parser.on('data', async function(serialData){
  const sensorsData = String(serialData).split("_");
  const data = new Data({
    sensorCode: '0001',
    sensoName: 'Protótipo 1',
    groundHumidity: parseFloat(sensorsData[2].slice(15)),
    airHumidity: parseFloat(sensorsData[1].slice(14)),
    airTemperature: parseFloat(sensorsData[0].slice(18)),
    date: new Date()
  });

  console.log(data);
  await data.save();
});