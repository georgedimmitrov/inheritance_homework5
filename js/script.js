var people = [];

var person1 = new Person('Kiro', 45, true);
var person2 = new Person('Kristin', 23, false);
var student1 = new Student('Stamat', 15, true, 3.40);
var student2 = new Student('Stamatka', 12, false, 5.60);
var employee1 = new Employee('Pesho', 19, true, 20);
var employee2 = new Employee('Ginka', 16, false, 23);


people.push(person1, person2, student1, student2, employee1, employee2);


for (var key in people) {
	if (people[key].constructor.name === 'Person') {
		console.log(people[key].showPersonInfo());
	} else if (people[key].constructor.name === 'Student') {
		console.log(people[key].showStudentInfo());
	} else {
		console.log(people[key].showEmployeeInfo());
	}
}

for (var key in people) {
	if (people[key].constructor.name === 'Employee') {
		console.log(people[key].showEmployeeInfo() + ' and my overtime money is ' + people[key].calculateOvertime(2) + '$');
	}
}