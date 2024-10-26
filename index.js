function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    let x = 0;
    let y = 1;
    let suma;

    for (let i = 1; i < n; i++) {
        suma = x + y;
        x = y;
        y = suma;
    }

    return suma;
}

console.log(fibonacci(20));
