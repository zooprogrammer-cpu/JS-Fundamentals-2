
//Coding Challenge #3


let bmi 
const mark ={
    fullName : 'Mark Lawton',
    mass: 78,
    height: 1.69,
    calcBMI : function(){
        return this.mass / this.height **2
    } 

}

const john = {
    fullName: 'John Smith',
    mass : 92,
    height : 1.95,
    calcBMI : function(){
        return this.mass / this.height **2
    } 
}




if (mark.calcBMI() > john.calcBMI()){
    console.log(`${mark.fullName} has a higher BMI of ${(mark.calcBMI()).toFixed(2)}`)
} else{
    console.log(`John has a higher BMI of ${(john.calcBMI()).toFixed(2)}`)
}

