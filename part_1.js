//zadanie 1
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

//zadanie 2
function isPalindrom(input){
    let result;
    for (let i = 0; i < input.length; i++) {
        if(input[i]===input[input.length-i-1]){
            result=true;
        }else{
            result = false;
        }
    }
    return result;
}
console.log(isPalindrom([1,2,2,1]));

//zadanie 3
function whatType(input){
    return typeof (input);
}
console.log(whatType());

//zadanie 4
function rozmieniarka(wartosc,nominaly){
    let suma = wartosc;
    let tab;
    if(nominaly.includes(1)){
        nominaly.add(1);
    }
    while(suma>0){
        for(let i = 0; i < nominaly.length; i++){
            if(suma-nominaly[i]>0){
                suma=-nominaly[i];
                tab[i]++;
            }
        }
        console.log(tab)
    }
}