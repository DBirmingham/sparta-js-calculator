var initialise = prompt('Which Calculator would you like to use? (a)dvanced (b)asic (m)BMI (t)rip');

function basic () {
	var a = Number(prompt('What is your first number?'));
	var b = Number(prompt('What is your second number?'));
	var action = prompt('What action would you like to take? (+)addition (-)subtraction (*)multiplication (/)division');

	switch (action) {
		case '+':
		console.log(a+b);
		break;
		case '-':
		console.log(a-b);
		break;
		case '*':
		console.log(a*b);
		break;
		case '/':
		console.log(a/b);
		break;
	}
}

function advanced () {
	var a = Number(prompt('What is your first number?'));
	var b = Number(prompt('What is your second number?'));
	var action = prompt('What action would you like to take? (+)addition (-)subtraction (*)multiplication (/)division (**)power (sqrt())square root (square roots first number)');

	switch (action) {
		case '+':
		console.log(a+b);
		break;
		case '-':
		console.log(a-b);
		break;
		case '*':
		console.log(a*b);
		break;
		case '/':
		console.log(a/b);
		break;
		case '**':
		console.log(a**b);
		break;case 'sqrt()':
		console.log(sqrt(a));
		break;
	}
}


function BMI () {
	var pick = prompt('Which unit of measurement would you like to use? (m)etric (i)mperial');
	var height = 0;
	var weight = 0;
	if (pick == 'm' || pick == 'metric') {
		var height = height + Number(prompt('What is your height?'));
		var weight = weight + Number(prompt('What is your weight?'));
		console.log(weight/(height**2));
	} else if (pick == 'i' || pick == 'imperial') {
		var height = height + Number(prompt('What is your height?'));
		var weight = weight + Number(prompt('What is your weight?'));
		console.log(703*(weight/(height**2)));
	}
}

function calc (distance, speed, efficiency, cost) {
	if ((speed - 60)/2 >= efficiency) {
		console.log('You broke down')
	} else {
		console.log('Your trip will take ' + distance/speed + ' hours and cost £' + (distance/efficiency)*cost);
	}
}
 
 function trip () {
 	var distance = Number(prompt('How far are you travelling??'));
	var speed = Number(prompt('What is your speed?'));
	var efficiency = Number(prompt('What is the efficiency in MPG of your vehicle?'));
	var cost = Number(prompt('What is the cost of fuel?'));
	if (speed > 60) {
		var efficiency = efficiency - ((speed - 60)*2);
	}
	calc(distance, speed, efficiency, cost)


}

if (initialise == 'b' || initialise == 'basic') {
	basic();
} else if (initialise == 'a' || initialise == 'advanced') {
	advanced();
} else if (initialise == 'm' || initialise == 'BMI') {
	BMI();
} else if (initialise == 't' || initialise == 'trip') {
	trip();
}
