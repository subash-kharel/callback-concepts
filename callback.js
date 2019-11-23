//call back function help in async programming. A function which takes another function as
//an argument is a callback. In the example addDogType takes getDogtypes as an argument so that
//getDogTypes only runs add addDogType successfull runs push operation.
var dogType = ["PitBull", "Bull Dog","German Shepherd"];

function addDogType(dogtype,callback){
    setTimeout(function(){
        dogType.push(dogtype);
        callback();
    },200);
    
}

function getDogTypes(){
    setTimeout(function(){
       console.log(dogType);
    },100);
}

addDogType("golden Retriever",getDogTypes);

getDogTypes();