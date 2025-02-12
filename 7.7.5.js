const arr = [1, 2, 3, 6, 10, 8, 4, 5, 2, 3, 4, 6, 7, 8, 6, 7];
let uniqueArr = []
arr.forEach(item =>{
    if (uniqueArr.includes(item)) {
        return
    }
    uniqueArr.push(item)
    uniqueArr.sort();
})
uniqueArr.sort((a,b) => a-b);
console.log(uniqueArr);
