
    const speedLimit = 70;
    let demeritPoints = Math.floor((speed - speedLimit) / 5);;
    var speed=69; 
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log("Points:", demeritPoints);
        
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
        }
        //calculate output
console.log(demeritPoints);