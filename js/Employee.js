function Employee(name, age, isMale, daySalary) {
	Person.call(this, name, age, isMale);
	var _daySalary = daySalary;

	this.setDaySalary = function (daySalary) {
		_daySalary = daySalary;
	}

	this.getDaySalary = function () {
		return _daySalary;
	}
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.calculateOvertime = function (hours) {
	var overtimeBonus;
	if (this.getAge() >= 18) {
		overtimeBonus = (((this.getDaySalary() / 8) * 1.5) * hours);
	} else {
		overtimeBonus = 0;
	}

	return overtimeBonus;
}

Employee.prototype.showEmployeeInfo = function () {
	var personInfo = Person.prototype.showPersonInfo.call(this);
	return personInfo + ' and my day salary is ' + this.getDaySalary() + '$';
}