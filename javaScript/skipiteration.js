// display odd numbers

for (let i = 1; i <= 5; i++) {
    // skip the iteration if i is even
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// Output:
// 1
// 3
// 5
