// Fibonacci Sequence (Iterative)
// This function generates the Fibonacci sequence up to the nth number.
// The Fibonacci sequence is an array where each number is the sum of the two preceding ones.

const fibonacci = (num) => {
  const output = [0, 1]; // Initialize the first two numbers of the Fibonacci sequence.
  for (let i = 2; i < num; i++) {
    // Each subsequent number is the sum of the previous two.
    output[i] = output[i - 1] + output[i - 2];
  }
  return output; // Return the full Fibonacci sequence.
};

// Example Usage of Fibonacci
console.log(fibonacci(7)); 
// Output: [0, 1, 1, 2, 3, 5, 8] (Fibonacci sequence up to the 7th number)

// Factorial (Iterative)
// This function calculates the factorial of a number using an iterative approach.
// Factorial of n (n!) is the product of all integers from n down to 1.

const factorial = (num) => {
  let fact = 1; // Initialize the factorial result as 1.
  for (let i = num; i > 0; i--) {
    fact *= i; // Multiply fact by each number from num down to 1.
  }
  return fact; // Return the final factorial result.
};

// Example Usage of Factorial
console.log(factorial(5));
// Output: 120 (because 5! = 5 * 4 * 3 * 2 * 1 = 120)

// Prime Check (Basic Iterative)
// This function checks if a number is prime (a number greater than 1 that has no divisors other than 1 and itself).

const isPrime = (num) => {
  if (num === 2) {
    return true; // 2 is a prime number.
  }
  // Loop from 2 to the number itself and check if there's any divisor.
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      return false; // If divisible by any number other than 1 or itself, it's not prime.
    }
  }
  return true; // Otherwise, the number is prime.
};

// Example Usage of Prime Check
console.log(isPrime(11));
// Output: true (because 11 is a prime number)

// Optimized Prime Check (Using Square Root Optimization)
// A more efficient approach to check if a number is prime. 
// Instead of looping up to num, we can loop only up to √num.

const optimizePrime = (num) => {
  if (num === 2) {
    return true; // 2 is prime.
  }
  // Loop from 2 to √num to check for any divisors.
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If divisible, not a prime number.
    }
  }
  return true; // If no divisors found, it's a prime number.
};

// Example Usage of Optimized Prime Check
console.log(optimizePrime(11));
// Output: true (11 is a prime number)

// Power of 2 Check (Iterative)
// This function checks if a number is a power of 2 using an iterative approach.
// A number is a power of 2 if it can be continuously divided by 2 until it becomes 1.

const powOf2 = (num) => {
  while (num > 1) {
    if (num % 2 === 0) {
      num = num / 2; // Keep dividing by 2 if divisible.
    } else {
      return false; // If at any point it's not divisible by 2, it's not a power of 2.
    }
  }
  return true; // If the loop completes and num reaches 1, it's a power of 2.
};

// Example Usage of Power of 2 Check
console.log(powOf2(16));
// Output: true (because 16 = 2^4, which is a power of 2)

// Power of 2 Check (Bitwise Method)
// This function checks if a number is a power of 2 using a bitwise approach.
// In binary, powers of 2 have exactly one '1' bit, and the rest are '0' bits.
// The expression (n & (n-1)) checks if a number has only one '1' bit.

const powOf2Bitwise = (num) => {
  if (num < 1) {
    return false; // Numbers less than 1 are not powers of 2.
  }
  return (num & (num - 1)) === 0; // The bitwise AND operation checks the power of 2.
};

// Example Usage of Bitwise Power of 2 Check
console.log(powOf2Bitwise(16));
// Output: true (because 16 is a power of 2)
