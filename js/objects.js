var person = { firstName : prompt("First Name: "),
    lastName : prompt("Last Name: "),
    age : parseInt(prompt("Age: ")),
    profession : 'Student',
    hobbies : ["Reading Books", "Coding", "Sports Acitivity"]
};
console.log("Name: ", person.firstName + " " + person.lastName, "\nAge:", person.age)
