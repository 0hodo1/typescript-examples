// Base
let a: string;
a="Hello World";
console.log(a)

let b: number;
b=28;
console.log(b)

let c:boolean
c=false;
console.log(c)

let d:any
d=true;
console.log(d)

let langs : string[]
langs=["typescript","javascript","python"];
console.log(...langs);

let numbers:number[]
numbers=[1,2,3,4,5];
console.log(...numbers);

let bool:Array<boolean>
bool=[true,false,true];
console.log(...bool);

let sayilar: Array<number> = [1,2,3,4,5,7,9];
console.log(...sayilar);

function addNumbers(num1:number,num2:number):number{
    return num1+num2
}
console.log("Toplamları:",addNumbers(1,2))

function addNumbersOptional(num1:number,num2?:number):number{
    if(typeof num2=="undefined"){
        return num1;
    }
    return num1+num2
}
console.log("Toplamları:",addNumbersOptional(21,43))
console.log("Toplamları:",addNumbersOptional(21))

function addNumbersVoid(num1:number,num2:number):void{
    // return num1+num2
    if(num1<10){
        console.log("Sayı 10 dan küçük")
        return
    }
    console.log(num1+num2)
}
addNumbersVoid(1,2)

class Person {
    private name:string;
    age:number;
    private phone:string;
    constructor(name:string,age:number,phone:string){
        this.name=name;
        this.age=age;
        this.phone=phone;

        console.log("Person classının constructorı çalıştı")
    }
    showInfos(){
        console.log(`Name: ${this.name} Age: ${this.age} Phone: ${this.phone}`)
    }
}

let person1=new Person("Ahmet",28,"0555555555");
person1.showInfos()

// console.log(person1.name); private
console.log(person1.age);


// Inheritance
class Employee extends Person{ //Inheritance uygulma (Person classının özelliklerini miras alan Employee classını oluşturma)
    salary:number;
    constructor(name:string,age:number,phone:string,salary:number){
        super(name,age,phone);
        this.salary=salary;
    }
    showInfos(): void {
        super.showInfos();
        console.log(`Salary: ${this.salary}`)
    }
    changeDepartment(department:string){
        console.log(`Department changed to ${department}`)
    }
}

let employee1 = new Employee("Ali",28,"0555555555",4000);
employee1.showInfos();
employee1.changeDepartment("IT");

// Interface
// interface IDatabase{
//     add()
//     get()
//     delete()
//     update()
// }
// class MySql implements IDatabase{
//     add(){
//         console.log("MySql add methodu çalıştı")
//     }
//     get(){
//         console.log("MySql get methodu çalıştı")
//     }
//     delete(){
//         console.log("MySql delete methodu çalıştı")
//     }
//     update(){
//         console.log("MySql update methodu çalıştı")
//     }
// }
// class MondoDB implements IDatabase{
//     add(){
//         console.log("MondoDB add methodu çalıştı")
//     }
//     get(){
//         console.log("MondoDB get methodu çalıştı")
//     }
//     delete(){
//         console.log("MondoDB delete methodu çalıştı")
//     }
//     update(){
//         console.log("MondoDB update methodu çalıştı")
//     }
// }
// let mySql = new MySql();
// mySql.add();
// function addDatabase(db:IDatabase){
//     db.add();
// }
// addDatabase(new MySql());
// addDatabase(new MondoDB());

// Abstarct class
abstract class Database{
    get(){
        console.log("abstractan get methodu çalıştı")
    }
    add(){
        console.log("abstractan add methodu çalıştı")
    }
    abstract delete()
    abstract update()
}
class MySql extends Database{
    delete(){
        console.log("MySql delete methodu çalıştı")
    }
    update(){
        console.log("MySql update methodu çalıştı")
    }
}
class MondoDB extends Database{
    delete(){
        console.log("MondoDB delete methodu çalıştı")
    }
    update(){
        console.log("MondoDB update methodu çalıştı")
    }
}
function AddDatabase(db:Database){
    db.delete();
}
AddDatabase(new MySql());
AddDatabase(new MondoDB());