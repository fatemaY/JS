// 1. Create a function that uses an if/else conditional
// expression.
function validatePasswordIfElse(password) {
    if (password.length > 7) {
      return 'Strong';
    } else {
      return 'Weak';
    }
  }
  
// 2. Create a function that uses a ternary conditional
// expression.
function validatePasswordTernary(password) {
    return password.length > 7 ? 'Strong' : 'Weak';
  }
  
// 3. Create a function that uses a && logical operator.
function validatePasswordLogicalOperator(password) {
    return password.length > 7 && 'Strong' || 'Weak';
  }

// 4. Create an “advanced” password validation function that
// takes a password string as an argument.
// If the password length is more than 7 characters long and
// has at least one capital letter return “Very Strong”. If the
// password length is only 7 characters long returns “Strong”.
// If the password length is less than 7 characters long return
// “Weak”
function validatePasswordAdvanced(password) {
    if (password.length > 7 && /[A-Z]/.test(password)) {
      return 'Very Strong';
    } else if (password.length === 7) {
      return 'Strong';
    } else {
      return 'Weak';
    }
  }
  

console.log(validatePasswordIfElse('password123')); 
console.log(validatePasswordTernary('securePW123')); 
console.log(validatePasswordLogicalOperator('123')); 
console.log(validatePasswordAdvanced('Password123')); 
console.log(validatePasswordAdvanced('SecurePW'));   
console.log(validatePasswordAdvanced('123456'));

