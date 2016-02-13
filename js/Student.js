function Student(name, age, isMale, score) {
	Person.call(this, name, age, isMale);
	var _score;

	this.setScore = function (score) {
		_score = score;
	}

	this.validateScore(score);

	this.getScore = function () {
		return _score;
	}
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.validateScore = function (score) {
	if (score >= 2 && score <= 6) {
		this.setScore(score);
	} else {
		this.setScore(2);
	}
}

Student.prototype.showStudentInfo = function () {
	var personInfo = Person.prototype.showPersonInfo.call(this);
	return personInfo + 'and my score is ' + this.getScore();
}