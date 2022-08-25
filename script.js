//coding challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips =[]
const totals=[]

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }

for (let i=0;i<bills.length;i++){
    tips.push(calcTip(bills[i]))
    totals.push(bills[i] + tips[i])
}  

// console.log(tips)
console.log(totals)

const calcAverage = function(arr){
    let sum = 0
    for(let j=0;j<arr.length;j++){
        sum += arr[j]
    }
    const average = sum/arr.length
    console.log(average)
}

calcAverage(totals)