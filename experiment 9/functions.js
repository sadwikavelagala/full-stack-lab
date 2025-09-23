function factorial(n) {
  if (n < 0) return -1;
  let fact = 1;
  for (let i = 2; i <= n; i++) fact *= i;
  return fact;
}

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n);
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function primesUpTo(n) {
  let primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}

function isPalindrome(num) {
  let str = num.toString();
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}
