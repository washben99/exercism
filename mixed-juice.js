function timeToMixJuice(juice) {
    switch (juice) {
      case 'Pure Strawberry Joy':
        return 0.5;
      case 'Energizer':
        return 1.5;
      case 'Green Garden':
        return 1.5;
      case 'Tropical Island':
        return 3;
      case 'All or Nothing':
        return 5;
      default:
        return 2.5; // For other drinks
    }
  }

  console.log(timeToMixJuice("pepe luis"));


function limesToCut(wedgesNeeded, limes) {
    let totalwedges = 0;
    let limescut = 0;
    let wedgesPerLime = 0;
    while ((wedgesNeeded > totalwedges) && (limes.length > limescut)){
        switch (limes[limescut]){
            case ("small"):
                wedgesPerLime = 6;
                break;
            case ("medium"):
                wedgesPerLime = 8;
                break;
            case ("large"):
                wedgesPerLime = 10;
                break;
        }
        limescut ++;
        totalwedges += wedgesPerLime;
    }
    return limescut;
}
console.log(limesToCut(10, ["small","small","medium"] ));

function remainingOrders(timeLeft, orders) {
    let timeLeft2= timeLeft;
    let ordersLeft = orders;
    do{
        let i = 0;
        timeLeft2 =- timeToMixJuice(orders[i]);
        i++;
        ordersLeft.shift();
      }while((timeLeft>0));
      
      return timeLeft2;
     
  }
console.log(remainingOrders(5, ['Pure Strawberry Joy','Energizer','Green Garden'] ))