let name2 = {
    firstname :"vajagani",
    secondname :"dhanesh",
    combination :function(){
        console.log(this.firstname,"",this.secondname);
    }
}

function fullName(town,state){
    console.log(this.firstname,this.secondname,"from",town,state);
}
// name2.combination()


let name1 = {
    firstname :"javascrip",
    secondname :"node js"
}

fullName.call(name2,"chittoor","andhra")
fullName.apply(name1,["programming","client-side"])

let fullnameBind = fullName.bind(name1,'programming','server-side');
fullnameBind();

