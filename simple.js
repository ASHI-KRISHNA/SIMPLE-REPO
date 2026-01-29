
// #1
// const car = {
//   brand: "Tesla",
//   model: "Model S",
//   year: 2024,
//   price: "₹80,00,000"
// };
// const {brand:THISBRAND,model:THISMODEL}=car;
// console.log(THISBRAND);
// console.log(THISMODEL);


// #2
const employee = {
  name: "Ashi",
  role: "Developer",
  skills: {
    frontend: "React",
    backend: "NodeJS",
  }
};
const {skills:{frontend:FRONTENDSKILL,backend:BACKENDSKILL}}=employee;
console.log(FRONTENDSKILL);
console.log(BACKENDSKILL);

