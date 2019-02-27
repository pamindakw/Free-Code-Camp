/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.convert = function(_measurement, _unitType) {
    let measurement = _measurement;
    let unitType = _unitType;
    unitType = unitType.toLowerCase();
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result = {};

    switch(unitType){
      case "gal":
      result.measurement = measurement * galToL;
      result.measurement = +result.measurement.toFixed(4);
      result.unitType = 'l';
      break;

      case "lbs":
      result.measurement = measurement * lbsToKg;
      result.measurement = +result.measurement.toFixed(4);
      result.unitType = 'kg';
      break;

      case "mi":
      result.measurement = measurement * miToKm;
      result.measurement = +result.measurement.toFixed(4);
      result.unitType = 'km';
      break;

      case "l":
      result.measurement = measurement / galToL;
      result.measurement = +result.measurement.toFixed(4);
      result.unitType = 'gal';
      break;

      case "kg":
      result.measurement = measurement / lbsToKg;
      result.measurement = +result.measurement.toFixed(4);
      result.unitType = 'lbs';
      break;

      case "km":
      result.measurement = measurement / miToKm;
      result.measurement = +result.measurement.toFixed(4);
      result.unitType = 'mi';
      break;

      default:
      // do nothing for now
      break;

    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${initUnit} was entered and converted to ${returnNum} ${returnUnit}.`;
  };
  
}

module.exports = ConvertHandler;
