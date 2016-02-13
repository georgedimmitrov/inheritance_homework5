function Person(name, age, isMale) {
	var _name = name;
	var _age = age;
	var _isMale = isMale;

	this.setName = function (name) {
		_name = name;
	}

	this.getName = function () {
		return _name;
	}

	this.setAge = function (age) {
		_age = age;
	}
	
	this.getAge = function () {
		return _age;
	}

	this.setIsMale = function (isMale) {
		_isMale = isMale;
	}

	this.getIsMale = function () {
		return _isMale;
	}
}

Person.prototype.getGender = function () {
	var gender;
	if (this.getIsMale() === true) {
		gender = 'male';
	} else if (this.getIsMale() === false) {
		gender = 'female';
	}

	return gender;
}

Person.prototype.showPersonInfo = function () {
	return 'Hi, my name is ' + this.getName() + ' and I am a ' + this.getAge() + ' year old ' + this.getGender();
}