let myFun:(arg1: number, arg2: number) => number;
myFun = function(x,y){
    return x+y;
}
const sum2 = myFun(10,20);

function myFun2(x: number, y: number): number {
    return x+y
}
function myFun3(x: number, y: number): void {
    console.log(`두 숫자의 합은 ${x+y}이다.`)
}
let myFun4: () => void;
myFun4 = () => {
    console.log("hi")
}

//함수 옵셔널 매개변수
function printName(name?:string){
    console.log(`Hello`)
}
printName("abc")
printName()