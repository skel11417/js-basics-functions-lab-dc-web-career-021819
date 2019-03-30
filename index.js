// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  return Math.abs(42 - location)
};

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
};

function distanceTravelledInFeet(point_a, point_b) {
  return Math.abs(point_a - point_b) * 264;
};

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    // console.log("hey")
    return (distance-400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far"
  }
};
