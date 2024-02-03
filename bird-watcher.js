function fixBirdCountLog(birdsPerDay) {
    let birdsFix = birdsPerDay;
    for(let i=0; i < birdsPerDay.length; i++){
      if (i%2 === 0){
        birdsFix[i]++;
      }
    }
    return birdsFix;
  }

  console.log(fixBirdCountLog([2,3,5,7,3,6]));