document.write("Remove element from array")

let arr = [ 34,40,52,87,56,91,26];
let pos = 4;
console.log(arr);
for(var i=0; i<arr.length; i++){
    arr[i] = arr[i+1]
}
arr.length = arr.length -1;

console.log(arr);