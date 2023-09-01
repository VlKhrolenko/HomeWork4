// Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі:
//     Число N є простим числом, якщо число N просте, та Число N не є простим числом, якщо число N складене.

let numToCheck = prompt("Введите число для проверки:")

if (numToCheck <= 1) {
    console.log(`Число ${numToCheck} не є простим числом.`)
}else {
    let check = true
    for (let i = 2; i < numToCheck; i++) {
        if (numToCheck % i === 0) {
            check = false;
            break;
        }
    }
    if(check){
        console.log(`Число ${numToCheck} є простим числом.`)
    } else {
        console.log(`Число ${numToCheck} не є простим числом.`)
    }
}


//Вам необхідно написати програму, яка приймає на вхід число N і знаходить усі числа в діапазоні від 1 до N,
// які є досконалими числами.

let numToCheck2 = +prompt("Введите число для проверки:")

console.log(`Досконалі числа в діапазоні від 1 до ${numToCheck2}:`);
for(let i = 1 ;i<=numToCheck2;i++) {
    let sum = 0
    for(let l = 1 ;l <i; l++) {
        if (i % l === 0) {
            sum +=l
        }
    }
    if (sum === i ){
        console.log(i)
    }
}


 