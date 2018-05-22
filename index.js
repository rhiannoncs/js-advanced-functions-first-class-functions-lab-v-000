const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) { return fare * multiplier;};
}

const fareDoubler = function(fare) {
  function fareMultiplier(inputFare){ return createFareMultiplier(2);}
  
  return fareMultiplier(fare);
  
}
