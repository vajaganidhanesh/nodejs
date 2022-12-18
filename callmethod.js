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

// fullName.call(name2,"chittoor","andhra")
// fullName.apply(name1,["programming","client-side"])

let fullnameBind = fullName.bind(name1,'programming','server-side');
// fullnameBind();

// let string = 'dhanesh'
// string[0]='D'
// console.log(string);


let arr1 = [1,2,3];
let arr2 = arr1;

console.log(arr1===arr2);

let obj = {
    name:'dhanesh',
    age:'24'
}
let obj2 = obj
console.log(obj === obj2);

const user = async () =>{
    const response = await fetch('./data.json')
    const data = await response.json();
    console.log(data);
    data.map((data,index)=>{
        let p = document.createElement('p');
        p.append(data.title)
        document.getElementById('demo').appendChild(p)
    })
}
user()