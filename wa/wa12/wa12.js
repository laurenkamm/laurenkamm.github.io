// Problem 1
const sam = {
  firstName: "Sam",
  department: "Tech",
  designation: "Manager",
  salary: 40000,
  raiseEligible: true,
};
console.log('Problem 1 Sam:', sam);

const mary = {
  firstName: "Mary",
  department: "Finance",
  designation: "Trainee",
  salary: 18500,
  raiseEligible: true,
};
console.log('Problem 1 Mary:', mary);

const bill = {
  firstName: "Bill",
  department: "HR",
  designation: "Executive",
  salary: 21200,
  raiseEligible: false,
};
console.log('Problem 1 Bill:', bill);

// Problem 2
const employees = [sam, mary, bill];

const techStars = {
  companyName: "Tech Stars",
  website: "www.techstars.site",
  employees: employees,
};
console.log("Problem 2:", techStars);

// Problem 3
const anna = {
  firstName: "Anna",
  department: "Tech",
  designation: "Executive",
  salary: 25600,
  raiseEligible: false,
};

employees.push(anna);
techStars.employees = employees;
console.log("Problem 3:", techStars);

// Problem 4
function calculateTotalSalary(company) {
  let totalSalary = 0;
  for (let i = 0; i < company.employees.length; i++) {
    totalSalary += company.employees[i].salary;
  }
  return totalSalary;
}

console.log("Problem 4:", calculateTotalSalary(techStars));

// Problem 5
function giveRaise(company) {
  for (let i = 0; i < company.employees.length; i++) {
    if (company.employees[i].raiseEligible) {
      company.employees[i].salary *= 1.1;
      company.employees[i].raiseEligible = false;
    }
  }
}

giveRaise(techStars);
console.log("Problem 5:", techStars);

// Problem 6
const workingFromHome = ["Anna", "Sam"];

for (let i = 0; i < techStars.employees.length; i++) {
  if (workingFromHome.includes(techStars.employees[i].firstName)) {
    techStars.employees[i].wfh = true;
  } else {
    techStars.employees[i].wfh = false;
  }
}

console.log("Problem 6:", techStars);
