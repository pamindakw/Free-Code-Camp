/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){

      const obj = {};

      const conversion = convertHandler.convert(req.query.measurement, req.query.unitType);
      const toString = convertHandler.getString(req.query.measurement, req.query.unitType, conversion.measurement, conversion.unitType);
      
      obj['inputMeasurement'] = req.query.measurement;
      obj['inputUnitType'] = req.query.unitType;
      obj['outputMeasurement'] = conversion.measurement;
      obj['outputUnitType'] = conversion.unitType;
      
      res.json(obj);

    });
    
};
