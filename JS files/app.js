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

let mainElement = document.querySelector("main");

let administrationEliment=document.getElementById("administration")
mainElement.appendChild(administrationEliment)


let developmentEliment=document.getElementById("development")
mainElement.appendChild(developmentEliment)

let financeEliment=document.getElementById("finance")
mainElement.appendChild(financeEliment)

let marketingEliment=document.getElementById("marketing")
mainElement.appendChild(marketingEliment)



Employees.prototype.employeeInformation = function () {
    if(this.department=="Administration"){
        let administrationProfileCard = document.createElement("div");
        administrationProfileCard.className = "administrationProfileCard";
        administrationEliment.appendChild(administrationProfileCard);
        let imgElement=document.createElement("img")
        imgElement.src=this.img;
        administrationProfileCard.appendChild(imgElement)
        let employeeInformation = document.createElement("p");
        employeeInformation.innerHTML = `Full Name: ${this.fullNaame}<br>ID: ${this.employeeId}<br>
        Department: ${this.department}<br> Level: ${this.level}<br>
        Salary: ${this.netSalary()} `;
        administrationProfileCard.appendChild(employeeInformation);

    }

    if(this.department=="Development"){
        let developmentProfileCard = document.createElement("div");
        developmentProfileCard.className = "developmentProfileCard";
        developmentEliment.appendChild(developmentProfileCard);
        let imgElement=document.createElement("img")
        imgElement.src=this.img;
        developmentProfileCard.appendChild(imgElement)
        let employeeInformation = document.createElement("p");
        employeeInformation.innerHTML = `Full Name: ${this.fullNaame}<br>ID: ${this.employeeId}<br>
        Department: ${this.department}<br> Level: ${this.level}<br>
        Salary: ${this.netSalary()} `;
        developmentProfileCard.appendChild(employeeInformation);
    }
  
    if(this.department=="Finance"){
        let financeProfileCard = document.createElement("div");
        financeProfileCard.className = "financeProfileCard";
        financeEliment.appendChild(financeProfileCard);
        let imgElement=document.createElement("img")
        imgElement.src=this.img;
        financeProfileCard.appendChild(imgElement)
        let employeeInformation = document.createElement("p");
        employeeInformation.innerHTML = `Full Name: ${this.fullNaame}<br>ID: ${this.employeeId}<br>
        Department: ${this.department}<br> Level: ${this.level}<br>
        Salary: ${this.netSalary()} `;
        financeProfileCard.appendChild(employeeInformation);
    }
    
    if(this.department=="Marketing"){
        let marketingProfileCard = document.createElement("div");
        marketingProfileCard.className = "marketingProfileCard";
        marketingEliment.appendChild(marketingProfileCard);
        let imgElement=document.createElement("img")
        imgElement.src=this.img;
        marketingProfileCard.appendChild(imgElement)
        let employeeInformation = document.createElement("p");
        employeeInformation.innerHTML = `Full Name: ${this.fullNaame}<br>ID: ${this.employeeId}<br>
        Department: ${this.department}<br> Level: ${this.level}<br>
        Salary: ${this.netSalary()} `;
        marketingProfileCard.appendChild(employeeInformation);
    }


};






let employee0=new Employees(1000,"Ghazi Samer","Administration","Senior","./images/employee.png");
let employee1=new Employees(1001,"Lana Ali","Finance","Senior","./images/employee.png");
let employee2=new Employees(1002,"Tamara Ayoub","Marketing","Senior","./images/employee.png");
let employee3=new Employees(1003,"Safi Walid","Administration","Mid-Senior","./images/employee.png");
let employee4=new Employees(1004,"Omar Zaid","Development","Senior","./images/employee.png");
let employee5=new Employees(1005,"Rana Saleh","Development","Junior","./images/employee.png");
let employee6=new Employees(1006,"Hadi Ahmad ","Finance","Mid-Senior","./images/employee.png");

//creat function to save my data in local storage 
function saveData(data){
    let stringArr = JSON.stringify(data)
    localStorage.setItem("employee",stringArr)

}


//creat function to get data from local storage
function getData(){
    let reteivedArr = localStorage.getItem("employee")
    if(reteivedArr){
    let objArr =JSON.parse(reteivedArr)
    for(let i=7; i<objArr.length;i++){
    //function Employees (employeeId,fullNaame,department,level,img,salary){

        new Employees(objArr[i].employeeId,objArr[i].fullNaame,objArr[i].department,objArr[i].level,objArr[i].img,objArr[i].salary)
}
}
infoLoop();
}
getData();

let employeeForm=document.getElementById("employeeForm")
    //get data from the form
    employeeForm.addEventListener("submit",submetListener)
    function submetListener(event){
        event.preventDefault();
        let fullName = event.target.querySelector('#fullName').value;
        let department = event.target.querySelector('#department').value;
        let level = event.target.querySelector('#level').value;
        let imageUrl = event.target.querySelector('#imageUrl').value;
        let newEmployee = new Employees(generateEmployeeId(), fullName, department, level, imageUrl, null);
        newEmployee.employeeInformation();
        saveData(employeesInfo);
}


console.log( "array before LS", employeesInfo)
function generateEmployeeId() {
     return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
 }


function infoLoop(){
for(let i=0;i<employeesInfo.length;i++){
    employeesInfo[i].employeeInformation();
}
}


