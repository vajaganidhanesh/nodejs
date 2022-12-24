let names={
    firstName:"vajagani",
    lastName:"dhanesh",
    thunder:function(village){
        console.log(this.firstName + this.lastName+" "+village);
    }
}

let names1={
    firstName:"vajagani",
    lastName:"chintu",
    thunder:function(){
        console.log(this.firstName + this.lastName);
    }
}

function nameFunction(hometown,state){
    console.log(this.firstName+" "+this.lastName+" from "+hometown + " " +state);
}

// function borrowing using ---callFunction()----
// The call() method calls the function with a given this
// :

nameFunction.call(names,"chittoor","AndhraPradesh")

// function borrowing using ---applyFunction()----
// The apply() method calls the function with a given this value and allows
//  passing values in arguments as an array (or an array-like object).

names.thunder.apply(names1,['nallangadu'])

// The bind() method returns a new function and allows passing in a this array and any number of arguments.
let newFunction = nameFunction.bind(names,"chittoor","andhra pradesh")
// console.log(newFunction);
newFunction();