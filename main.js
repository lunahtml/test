// - исходный код
// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//     setTimeout(function () {
//         console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`);
//     }, 3000);
// }

// - 1 вариант модификации кода
// const arrs = [10, 12, 15, 21];
// for (let i = 0; i < arrs.length; i++) {
//     const arr = arrs[i];
//     setTimeout(function () {
//         console.log(arr > 13 ? `Good: ${arr}` : `Bad: ${arr}`);
//     }, 3000);
// }

// - 1 вариант модификации кода
const arrs = [10, 12, 15, 21];
for (const arr of arrs) {
    setTimeout(function () {
        console.log(arr > 13 ? `Good: ${arr}` : `Bad: ${arr}`);
    }, 3000);
}
