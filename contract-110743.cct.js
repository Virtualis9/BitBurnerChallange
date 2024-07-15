//n00dles coding contract 

// Total Ways to Sum II

// You are attempting to solve a Coding Contract. 

// You have 10 tries remaining, after which the contract will self-destruct.

// How many different distinct ways can the number 81 be written as a sum of integers contained in the set:
// [2,3,4,5,6,7,8,10,11]?

// You may use each integer in the set zero or more times.

// If your solution is an empty string, you must leave the text box empty. 

// Do not use "", '', or ``.

const arr = [2,3,4,5,6,7,8,10,11];

const target = 81;

// Create a DP array and initialize with 0
let dp = Array(target + 1).fill(0);

// There's one way to create the sum 0 (by choosing nothing)
dp[0] = 1;

// Update the DP array for each number in the set
for (let num of arr) {
    console.log(num)
    console.log(arr)
    for (let i = num; i <= target; i++) {
        dp[i] += dp[i - num];
    }
}

// The answer is the number of ways to create the sum equal to the target
let answer = dp[target];

console.log(answer);
