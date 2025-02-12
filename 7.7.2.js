function calculate(a, b, operator) {
    if (operator === "+"){
        return a + b;
    }else if (operator === "-"){
        return a - b;
    }else if (operator === "*"){
        return a * b;
    }else if (operator === "/"){
        return a / b;
    }
    else {
        return "что-то пошло не так";
    }
}
const obj = {
  a: 2,
  b: 3,
  operator: "+",
};
const arr = Object.values(obj);
console.log(calculate.apply(null, arr));
