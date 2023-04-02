document.write("insert element in array");
let data = [54,66,22,8,77,61,20];
let newEl = 'newelement';
console.log(data);
let position = 0;
console.log(data.indexOf(20));
for(var i=data.length-1; i>=position; i--){ // pelhe ulta loop chalaya 
    if(i >= position){ // fir i ki vlue or position same ki
         data[i+1] = data[i]; // ager i ki vlu pos se jyada ya = h to +1 kregaa 
         console.log(data[i+1]);

        if(i == position){  // i or position same h to data m new element add kr do 
             data[i] = newEl
         }
     }
}
console.log(data.indexOf(20));
console.log(data);