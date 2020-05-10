// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;

function upperCaseCustomerName() {
	customerName = customerName.toUpperCase();
}

function setBestCustomer() {
	bestCustomer = 'not bob';
}

function overwriteBestCustomer(name) {
	bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'some value';

function changeLeastFavoriteCustomer() {
	leastFavoriteCustomer = 'asdfsdf';
}
