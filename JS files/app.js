
'use strict';

let employeesInfo = [];

function Employees(employeeId, fullNaame, department, level, img, salary) {
    this.employeeId = employeeId;
    this.fullNaame = fullNaame;
    this.department = department;
    this.level = level;
    this.img = img;
    this.salary = salary;
    employeesInfo.push(this);
}

Employees.prototype.randomSalary = function () {
    if (this.level === "Senior") {
        this.salary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
    } else if (this.level === "Mid-Senior") {
        this.salary = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
    } else if (this.level === "Junior") {
        this.salary = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    }

    return this.salary;
};

Employees.prototype.netSalary = function () {
    return this.randomSalary() - (this.randomSalary() * (7.5 / 100));
};

let mainElement = document.querySelector("main");

Employees.prototype.employeeInformation = function () {
    let profileCard = document.createElement("div");
    profileCard.className = "profile-card";

    let departmentSection = document.getElementById(this.department.toLowerCase());
    departmentSection.appendChild(profileCard);

    let imgElement = document.createElement("img");
    imgElement.src = this.img;
    profileCard.appendChild(imgElement);

    let employeeInformation = document.createElement("p");
    employeeInformation.innerHTML = `Full Name: ${this.fullNaame}<br>ID: ${this.employeeId}<br>
    Department: ${this.department}<br> Level: ${this.level}<br>
    Salary: ${this.netSalary()} `;
    profileCard.appendChild(employeeInformation);
};

let employeeForm = document.getElementById("employeeForm");

employeeForm.addEventListener("submit", submetListener);

function submetListener(event) {
    event.preventDefault();
    let fullName = event.target.querySelector('#fullName').value;
    let department = event.target.querySelector('#department').value;
    let level = event.target.querySelector('#level').value;
    let imageUrl = event.target.querySelector('#imageUrl').value;

    let newEmployee = new Employees(generateEmployeeId(), fullName, department, level, imageUrl, null);
    newEmployee.employeeInformation();
}

function generateEmployeeId() {
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
}

let employee0 = new Employees(1000, "Ghazi Samer", "Administration", "Senior", "./images/employee.png");
let employee1 = new Employees(1001, "Lana Ali", "Finance", "Senior", "./images/employee.png");
let employee2 = new Employees(1002, "Tamara Ayoub", "Marketing", "Senior", "./images/employee.png");
let employee3 = new Employees(1003, "Safi Walid", "Administration", "Mid-Senior", "./images/employee.png");
let employee4 = new Employees(1004, "Omar Zaid", "Development", "Senior", "./images/employee.png");
let employee5 = new Employees(1005, "Rana Saleh", "Development", "Junior", "./images/employee.png");
let employee6 = new Employees(1006, "Hadi Ahmad ", "Finance", "Mid-Senior", "./images/employee.png");

for (let i = 0; i < employeesInfo.length; i++) {
    employeesInfo[i].employeeInformation();
}


