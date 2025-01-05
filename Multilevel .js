const company = {
    name: "Tech Solutions Inc.",
    departments: {
      engineering: {
       manager: {
          name: "John Doe",
          age: 35,
          position: "Engineering Manager",
         salary: 100000,
                },
        employees: [
          { name: "Alice", age: 28, position: "Software Engineer", salary: 80000 },
          { name: "Bob", age: 30, position: "Senior Software Engineer", salary: 90000 },
        ],
      },
      sales: {
        manager: {
          name: "Jane Smith",
          age: 40,
          position: "Sales Manager",
          salary: 95000,
        },
        employees: [
          { name: "Charlie", age: 32, position: "Sales Representative", salary: 60000 },
          { name: "David", age: 29, position: "Sales Associate", salary: 50000 },
        ],
      },
      marketing: {
        manager: {
          name: "Emily Johnson",
          age: 37,
          position: "Marketing Manager",
          salary: 90000,
        },
        employees: [
          { name: "Eva", age: 31, position: "Marketing Specialist", salary: 70000 },
          { name: "Frank", age: 33, position: "Marketing Coordinator", salary: 65000 },
        ],
      },
    },
  };

  
let extractManagerDetails =((data)=>{
    let obj={}
    let {name,departments,engineering:{manager:{position}},sales:{manager:{position:position1}},marketing:{manager:{position:position2}}}=data

    obj.manger =position
    obj.manger1 = position1
    obj.manger2=position2

    return obj
})

console.log(extractManagerDetails(company))