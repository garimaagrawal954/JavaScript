const empArr = [
    { employee : "abc", salary: 3400 },
    { employee : "abc", salary: 3600 },
    { employee : "abc", salary: 3700 },
    { employee : "abc", salary: 8400 },
    { employee : "abc", salary: 2400 },
    { employee : "abc", salary: 5400 }
    ];
    const filterEmp = empArr.filter((emp)=>{
        return emp.salary > 5000;
    })
    console.log(filterEmp);
    

    const findEmp = empArr.find((emp)=>{
        return emp.salary > 5000;
    })
    console.log(findEmp);
    

