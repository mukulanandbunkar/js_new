// Fibonacci Function (Recursive)
// This function calculates the nth number in the Fibonacci sequence.
// The Fibonacci sequence is defined as:
// F(n) = F(n-1) + F(n-2), with F(0) = 0 and F(1) = 1.

const fibonacci = (num) => {
  // Base cases: return the number if it's 0 or 1 (F(0) = 0, F(1) = 1).
  if ([0, 1].includes(num)) {
    return num;
  } else {
    // Recursive call: F(n) = F(n-1) + F(n-2)
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

// Example Usage of Fibonacci
console.log(fibonacci(6)); 
// Output: 8 (because the Fibonacci sequence up to 6 is [0, 1, 1, 2, 3, 5, 8])

// Factorial Function (Recursive)
// This function calculates the factorial of a number.
// The factorial of a number n is defined as:
// n! = n * (n-1) * (n-2) * ... * 1, with 0! = 1 and 1! = 1.

const factorial = (num) => {
  // Base case: if the number is less than 2, return 1 (0! = 1 and 1! = 1).
  if (num < 2) {
    return 1;
  } else {
    // Recursive call: n! = n * (n-1)!
    return num * factorial(num - 1);
  }
};

// Example Usage of Factorial
console.log(factorial(5));
// Output: 120 (because 5! = 5 * 4 * 3 * 2 * 1 = 120)
