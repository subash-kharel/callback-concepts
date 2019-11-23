//This code does not add the new dogType because getDogTypes runs before addDotType which is 
//This is where call back come in play
var dogType = ["PitBull", "Bull Dog","German Shepherd"];

function addDogType(dogtype){
    setTimeout(function(){
        dogType.push(dogtype);
    },200);
    
}

function getDogTypes(){
    setTimeout(function(){
       console.log(dogType);
    },100);
}

addDogType("golden");

getDogTypes();