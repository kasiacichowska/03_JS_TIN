//zadanie 1
console.log("Zadanie 1")
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

console.log(fibonacci(10));
console.log(fibonacci(12));

//zadanie 2
console.log('\n'+"Zadanie 2")
function isPalindrom(input) {
    for (let i = 0; i < input.length / 2; i++) {
        if (input[i] !== input[input.length - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log([1, 2, 2, 1]);
console.log(isPalindrom([1, 2, 2, 1]));
console.log([1, 2, 2]);
console.log(isPalindrom([1, 2, 2]));
console.log([2, 2, 2]);
console.log(isPalindrom([2, 2, 2]));
console.log([2, 2, 2, 1]);
console.log(isPalindrom([2, 2, 2, 1]));
console.log("KAMILSLIMAK");
console.log(isPalindrom("KAMILSLIMAK"));
console.log("Kasia");
console.log(isPalindrom("Kasia"))
console.log("AAAA");
console.log(isPalindrom("AAAA"));
console.log("AAAAA");
console.log(isPalindrom("AAAAA"));
console.log("(pusty)");
console.log(isPalindrom(""));

//zadanie 3
console.log('\n'+"Zadanie 3")
function whatType(input) {
    return typeof (input);
}

console.log(whatType(12));
console.log(whatType("Kasia"));
console.log(whatType(true));

//zadanie 4
console.log('\n'+"Zadanie 4")
function compareNr(a, b) {
    return b - a;
}

function rozmieniarka(wartosc, nominaly) {
    let suma = wartosc;
    let tab = [];
    if (!nominaly.includes(1)) {
        nominaly.push(1);
    }
    nominaly.sort(compareNr);

    for (let i = 0; i < nominaly.length; i++) {
        tab[i] = 0;
    }

    for (let i = 0; i < nominaly.length; i++) {
        while (suma - nominaly[i] >= 0) {
            suma = suma - nominaly[i];
            tab[i]++;
        }
    }
    console.log("Wartość " + wartosc + " można rozmienić w następujący sposób:");
    for (let i = 0; i < nominaly.length; i++) {
        console.log(nominaly[i] + " - " + tab[i] + " sztuk");
    }
}

rozmieniarka(5243, [250, 100, 500, 10]);
rozmieniarka(101, [10]);