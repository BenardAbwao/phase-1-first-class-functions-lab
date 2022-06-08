// Code your solution in this file!
const returnFirstTwoDrivers = function(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
   return (drivers.slice(0, 2))
}
returnFirstTwoDrivers ()
 
const returnLastTwoDrivers = function(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return (drivers.slice(-2))
}
returnLastTwoDrivers()

const selectingDrivers = [  returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier =  fare =>
    function fareMultiplier (multiplier) {  
        return fare * multiplier
    }

 function fareDoubler(fare)  {
     return fare*2
 }

function fareTripler (fare) {
    return fare * 3}


function selectDifferentDrivers (drivers, lastFunction){
return lastFunction(drivers);

}

    