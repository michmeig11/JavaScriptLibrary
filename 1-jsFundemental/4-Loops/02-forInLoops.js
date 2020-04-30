let student = {
    name: "Peter",
    awesome: true,
    degree: "Javascript",
    week: 1
}

for (let item in student){
    console.log(item);
    console.log(student[item])
}

