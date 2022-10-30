class databinding{

    constructor(age,name,number)
    {
        this.age = age;
        this.name = name;
        this.number = number;
    }
    getname()
    {
        console.log(this.age,this.name,this.number);
    }
    
}
// var obj = new databinding(22,'dhanesh','7670905538');
// obj.getname();

class classOne extends databinding{
    constructor(age,name,number)
    {
        
        super(age,name,number)
        // super(22,'nani',345794835)
    }
}
 var obj = new classOne(12,12,12);
 obj.getname()