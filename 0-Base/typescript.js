var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base
var a;
a = "Hello World";
console.log(a);
var b;
b = 28;
console.log(b);
var c;
c = false;
console.log(c);
var d;
d = true;
console.log(d);
var langs;
langs = ["typescript", "javascript", "python"];
console.log.apply(console, langs);
var numbers;
numbers = [1, 2, 3, 4, 5];
console.log.apply(console, numbers);
var bool;
bool = [true, false, true];
console.log.apply(console, bool);
var sayilar = [1, 2, 3, 4, 5, 7, 9];
console.log.apply(console, sayilar);
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log("Toplamları:", addNumbers(1, 2));
function addNumbersOptional(num1, num2) {
    if (typeof num2 == "undefined") {
        return num1;
    }
    return num1 + num2;
}
console.log("Toplamları:", addNumbersOptional(21, 43));
console.log("Toplamları:", addNumbersOptional(21));
function addNumbersVoid(num1, num2) {
    // return num1+num2
    if (num1 < 10) {
        console.log("Sayı 10 dan küçük");
        return;
    }
    console.log(num1 + num2);
}
addNumbersVoid(1, 2);
var Person = /** @class */ (function () {
    function Person(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        console.log("Person classının constructorı çalıştı");
    }
    Person.prototype.showInfos = function () {
        console.log("Name: ".concat(this.name, " Age: ").concat(this.age, " Phone: ").concat(this.phone));
    };
    return Person;
}());
var person1 = new Person("Ahmet", 28, "0555555555");
person1.showInfos();
// console.log(person1.name); private
console.log(person1.age);
// Inheritance
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, phone, salary) {
        var _this = _super.call(this, name, age, phone) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.showInfos = function () {
        _super.prototype.showInfos.call(this);
        console.log("Salary: ".concat(this.salary));
    };
    Employee.prototype.changeDepartment = function (department) {
        console.log("Department changed to ".concat(department));
    };
    return Employee;
}(Person));
var employee1 = new Employee("Ali", 28, "0555555555", 4000);
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
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.get = function () {
        console.log("abstractan get methodu çalıştı");
    };
    Database.prototype.add = function () {
        console.log("abstractan add methodu çalıştı");
    };
    return Database;
}());
var MySql = /** @class */ (function (_super) {
    __extends(MySql, _super);
    function MySql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MySql.prototype["delete"] = function () {
        console.log("MySql delete methodu çalıştı");
    };
    MySql.prototype.update = function () {
        console.log("MySql update methodu çalıştı");
    };
    return MySql;
}(Database));
var MondoDB = /** @class */ (function (_super) {
    __extends(MondoDB, _super);
    function MondoDB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MondoDB.prototype["delete"] = function () {
        console.log("MondoDB delete methodu çalıştı");
    };
    MondoDB.prototype.update = function () {
        console.log("MondoDB update methodu çalıştı");
    };
    return MondoDB;
}(Database));
function AddDatabase(db) {
    db["delete"]();
}
AddDatabase(new MySql());
AddDatabase(new MondoDB());
