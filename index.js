// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = 'BOB';
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; // Attempt to change the constant
}

const leastFavoriteCustomer = 'someone'; // Declaring a constant in global scope
