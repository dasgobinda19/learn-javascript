const accountId = 14453;
let accountEmail = "gobinda696@outlook.com"
var accountPassword = "15246"
accountCity = "kolkata"
let accountState;

// accountId = 2   //not allowed

accountEmail = "dasgobinda@gmail.com"
accountPassword = "558246"
accountCity = "Delhi"

/*
Prefer no to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])