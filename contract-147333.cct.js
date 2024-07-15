const arr = [0, 2, 4];

function minJumps(arr) {
    if (arr.length <= 1) return 0;
    if (arr[0] === 0) return 0;

    let jumps = 1;
    let currentEnd = arr[0];
    let furthest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (i > furthest) {
            return 0; // Impossible to reach the end
        }

        furthest = Math.max(furthest, i + arr[i]);
        
        if (i === currentEnd) {
            if (i === arr.length - 1) {
                return jumps;
            }
            jumps++;
            currentEnd = furthest;
        }
    }

    return jumps;
}

const result = minJumps(arr);
console.log(result); // Output the result
