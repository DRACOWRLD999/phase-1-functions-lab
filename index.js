// Code your solution in this file!

const distanceFromHqInBlocks = start => (start >= 42) ? start - 42 : 42 - start;

const distanceFromHqInFeet = start => distanceFromHqInBlocks(start) * 264;

const distanceTravelledInFeet = (start, destination) => Math.abs(destination - start) * 264;

const calculatesFarePrice = (start, destination) => {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; 
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; 
  } else if (distance > 2000 && distance <= 2500) {
    return 25; 
  } else {
    return 'cannot travel that far'; 
  }
};

