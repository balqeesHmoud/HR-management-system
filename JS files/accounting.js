'use strict'
let tableEle = document.getElementById("custom-table")


console.log(employeesInfo);

function countingAll() {
    let administrationCount = 0;
    let developmentCount = 0;
    let financeCount = 0;
    let marketingCount = 0;
    let allCount = 0;

    let administrationSalary = 0;
    let developmentSalary = 0;
    let financeSalary = 0;
    let marketingSalary = 0;
    let allSalary = 0;

    let administrationAverageSalary = 0;
    let developmentAverageSalary = 0;
    let financeAverageSalary = 0;
    let marketingAverageSalary = 0;
    let allAverageSalary = 0;

    // Retrieve data from local storage
    let objArr = JSON.parse(localStorage.getItem("employee"));

    for (let i = 0; i < objArr.length; i++) {
        let employee = objArr[i];
        let department = employee.department;

        // Check the department and update counts and salaries accordingly
        if (department === "Administration") {
            administrationCount++;
            administrationSalary += employee.salary  
        } else if (department === "Development") {
            developmentCount++;
            developmentSalary += employee.salary
        } else if (department === "Finance") {
            financeCount++;
            financeSalary += employee.salary 
        } else if (department === "Marketing") {
            marketingCount++;
            marketingSalary += employee.salary
        }
      


        allCount++;
        allSalary += employee.salary;

    }
    localStorage.setItem("administrationCount",administrationCount)
    localStorage.setItem("administrationSalary",administrationSalary)

    localStorage.setItem("developmentCount",developmentCount)
    localStorage.setItem("developmentSalary",developmentSalary)

    localStorage.setItem("financeCount",financeCount)
    localStorage.setItem("financeSalary",financeSalary)

    localStorage.setItem("marketingCount",marketingCount)
    localStorage.setItem("marketingSalary",marketingSalary)

    // Calculate average salaries
    administrationAverageSalary =  administrationSalary / administrationCount ;
    developmentAverageSalary =  developmentSalary / developmentCount;
    financeAverageSalary =  financeSalary / financeCount ;
    marketingAverageSalary =  marketingSalary / marketingCount ;
    allAverageSalary = allSalary / allCount ;

    localStorage.setItem("administrationAverageSalary",administrationAverageSalary)
    localStorage.setItem("developmentAverageSalary",developmentAverageSalary)

    localStorage.setItem("financeAverageSalary",financeAverageSalary)

    localStorage.setItem("marketingAverageSalary",marketingAverageSalary)
    localStorage.setItem("allAverageSalary",allAverageSalary)

    

    console.log("Administration Count:", administrationCount);
    console.log("Development Count:", developmentCount);
    console.log("Finance Count:", financeCount);
    console.log("Marketing Count:", marketingCount);
    console.log("All Count:", allCount);

    console.log("Administration Average Salary:", administrationAverageSalary);
    console.log("Development Average Salary:", developmentAverageSalary);
    console.log("Finance Average Salary:", financeAverageSalary);
    console.log("Marketing Average Salary:", marketingAverageSalary);
    console.log("All Average Salary:", allAverageSalary);

    let trEle1 = document.createElement("tr");
    tableEle.appendChild(trEle1);
    let td11 = document.createElement("td");
    td11.textContent = "Administration";
    trEle1.appendChild(td11);
    
    let td12 = document.createElement("td");
    td12.textContent = administrationCount;
    trEle1.appendChild(td12);

    let td13 = document.createElement("td");
    td13.textContent = administrationSalary;
    trEle1.appendChild(td13);

    let td14 = document.createElement("td");
    td14.textContent = administrationAverageSalary;
    trEle1.appendChild(td14);




    
    let trEle2 = document.createElement("tr")
    tableEle.appendChild(trEle2);
    let td21 = document.createElement("td");
    td21.textContent = "Marketing";
    trEle2.appendChild(td21);
    
    let td22 = document.createElement("td");
    td22.textContent = marketingCount;
    trEle2.appendChild(td22);

    let td23 = document.createElement("td");
    td23.textContent = marketingSalary;
    trEle2.appendChild(td23);

    let td24 = document.createElement("td");
    td24.textContent = marketingAverageSalary;
    trEle2.appendChild(td24);



    let trEle3 = document.createElement("tr")
    tableEle.appendChild(trEle3);
    let td31 = document.createElement("td");
    td31.textContent = "Development";
    trEle3.appendChild(td31);
    
    let td32 = document.createElement("td");
    td32.textContent = developmentCount;
    trEle3.appendChild(td32);

    let td33 = document.createElement("td");
    td33.textContent = developmentSalary;
    trEle3.appendChild(td33);

    let td34 = document.createElement("td");
    td34.textContent = developmentAverageSalary;
    trEle3.appendChild(td34);



    let trEle4 = document.createElement("tr")
    tableEle.appendChild(trEle4);
    let td41 = document.createElement("td");
    td41.textContent = "Finance";
    trEle4.appendChild(td41);
    
    let td42 = document.createElement("td");
    td42.textContent = financeCount;
    trEle4.appendChild(td42);

    let td43 = document.createElement("td");
    td43.textContent = financeSalary;
    trEle4.appendChild(td43);

    let td44 = document.createElement("td");
    td44.textContent = financeAverageSalary;
    trEle4.appendChild(td44);



    let trEle5 = document.createElement("tr")
    tableEle.appendChild(trEle5);
    let td51 = document.createElement("td");
    td51.textContent = "Total";
    trEle5.appendChild(td51);
    
    let td52 = document.createElement("td");
    td52.textContent = allCount;
    trEle5.appendChild(td52);

    let td53 = document.createElement("td");
    td53.textContent = allSalary;
    trEle5.appendChild(td53);

    let td54 = document.createElement("td");
    td54.textContent = allAverageSalary;
    trEle5.appendChild(td54);




}

countingAll();

