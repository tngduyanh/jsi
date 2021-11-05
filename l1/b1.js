const arrayNumber = [10,-3,5,-7,11,-20,23]

var arv = []
for (let i = 0; i <= arrayNumber.length; i++) {
    if (i % 2 == 0) {
        arv = arrayNumber[i]
    }
    console.log("num tại pos lẻ "+ arv);    

}
    let chn = []
    var sum = 0
    for (let i = 0; i < arrayNumber.length; i++) {       
    sum += parseInt( arrayNumber[i])
}
console.log("arv của các số là " + sum);



let min = arrayNumber[0]
let max = arrayNumber[0]

for (let j = 0; j < arrayNumber.length;j++) {
    if (arrayNumber[j]<min) {
        min = arrayNumber[j]
    }
    if (arrayNumber[j]>max) {
        max = arrayNumber[j]
    }
}
console.log("max = "+ max);
console.log("min = "+ min);


for (let j = 0; j < arrayNumber.length; j++) {
    if (arrayNumber[j] == min) {
        console.log("pos của min là " + j);
    }
}


 let scp = []   
for (let i = 0; i < arrayNumber.length; i++) {
    if (Math.sqrt(arrayNumber) % 1 == 0 ) {
        scp = arrayNumber
        console.log("có " + scp.length + " scp");
    }
    else{
        console.log("có " + scp.length + " scp");
    }
    
}

let khum = arrayNumber
for (let k = 0; k < arrayNumber.length; k++) {
    if (khum[k]< 0) {        
        khum[k] = 0       
    }
    console.log(khum);
}

let oo = arrayNumber
for (let p = 0; p < arrayNumber.length; p++) {
    if (oo[p] == 0) {
        oo[p] = []
    console.log(oo);
}
}