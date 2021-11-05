let ms = []
let j = prompt('Điền vào đây một số')
let d = prompt('Điền vào đây một số')
let c = prompt('Điền vào đây một số')
let e = prompt('Điền vào đây một số')
let f = prompt('Điền vào đây một số')
let g = prompt('Điền vào đây một số')
let h = prompt('Điền vào đây một số')
let i = prompt('Điền vào đây một số')
let k = prompt('Điền vào đây một số')
let l = prompt('Điền vào đây một số')
let add = ms.push(j,d,c,e,f,g,h,i,k,l)

ms.sort(function(a, b){return a - b});
console.log("Chiều tăng dần: "+ ms);

ms.sort(function(a, b){return b - a});
console.log("Chiều giảm dần: "+ms);