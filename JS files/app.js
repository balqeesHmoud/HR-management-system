'use strict'
let employeesInfo=[];

function Employees (employeeId,fullNaame,department,level,img,salary){
    this.employeeId=employeeId;
    this.fullNaame=fullNaame;
    this.department=department;
    this.level=level;
    this.img=img;
    this.salary=salary;
    employeesInfo.push(this);

}
Employees.prototype.randomSalary=function(){
    
    if (this.level=="Senior"){
        this.salary= Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
    }
    if (this.level=="Mid-Senior"){
        this.salary= Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
     }

    if (this.level=="Junior"){
        this.salary= Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    }

    return this.salary;


}
Employees.prototype.netSalary =function(){
    return this.randomSalary() - (this.randomSalary()*(7.5/100));
}

Employees.prototype.employeeNameAndSalary=function(){
    document.write(`<p> Full Name: ${this.fullNaame} </p>`)
    document.write(`<p> Salary: ${this.netSalary()} </p>`)

}



let employee0=new Employees(1000,"Ghazi Samer","Administration","Senior");
let employee1=new Employees(1001,"Lana Ali","Finance","Senior");
let employee2=new Employees(1002,"Tamara Ayoub","Marketing","Senior");
let employee3=new Employees(1003,"Safi Walid","Administration","Mid-Senior");
let employee4=new Employees(1004,"Omar Zaid","Development","Senior");
let employee5=new Employees(1005,"Rana Saleh","Development","Junior");
let employee6=new Employees(1006,"Hadi Ahmad ","Finance","Mid-Senior");

for(let i=0;i<employeesInfo.length;i++){
    employeesInfo[i].employeeNameAndSalary();

}

