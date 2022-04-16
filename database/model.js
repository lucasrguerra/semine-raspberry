'use strict';

const mongoose = require('./connection');

const dataSchema = new mongoose.Schema({
  sensorCode: {
    type: String,
    unique: true,
    required: true
  },
  sensorName: {
    type: String,
    required: true
  },
  groundHumidity: {
    type: Number,
    required: true
  },
  airHumidity: {
    type: Number,
    required: true
  },
  airTemperature: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now(),
  }
});

const Data = mongoose.model('data', dataSchema);
module.exports = Data;