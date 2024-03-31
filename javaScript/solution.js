 /**** Soccer points *****/ 
//Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

 
function footballPoints(a, b, c) 
{
    if (isNaN(a) || isNaN(b) || isNaN(b)) {
      return "Please provide numerical values";
    }
    let winPoints = a * 3;
    let drawPoints = b;
    let total = winPoints + drawPoints;
    return total;
  }

  let points = footballPoints(11, 4, 6);
  console.log(points);
