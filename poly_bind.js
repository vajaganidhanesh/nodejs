let values = {
    firstname:"vajagani",
    lastname:"dhanesh"
}

let combination = function(village,hometown,sport){
    console.log(this.firstname+' '+this.lastname+' '+village+' '+hometown+' '+sport);
}

let bindFun =  combination.bind(values,'chitoor','sport')
bindFun("nallangadu");

Function.prototype.mybind = function(...args){
    let obj = this,
    params = args.slice(1);
    return function (...args2){
        obj.apply(args[0],[...params,...args2])
    }
}

let bindFun1 =  combination.mybind(values,"nallangadu")
bindFun1('chitoor','sport');