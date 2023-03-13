//타입지정
//일반 변수, 매개변수, 객체속성 등에 : TYPE과 같은 형태로 타입을 지정
//일반 변수 타입지정
let number : number = 10
let str1 : string = "abc"
let boolean1 : boolean = true
//함수의 매개변수 타입지정
function add(num1: number, num2: number){
    return num1 + num2
}
const sum = add(1,2)
//배열 타입 지정
let arr1: string[] = []
let arr2: Array<string> = []
//유니언 타입
let arr3: (number | string) [] = []
//배열 항목의 타입을 단언할 수 없을 때 any를 사용
let arr4: any [] = []
//interface나 커스텀타입을 사용한 배열
interface User {
    name: string;
    age: number;
}
let arr5: User [] = []
arr5 = [ {name: "A", age: 20}, {name: "b", age: 35} ]

let arr6: 20 [] = [];
// arr6 = [20,10,20,20,20,20] 10에 오류발생

//읽기전용 배열
let arrA: readonly number [] = [1,2,3,4,5,6]
let arrB: number [] = [1,2,3,4,5,6]
let arrC: ReadonlyArray<number> = [9,8,7,6,5]

// arrA[0] = 10 오류발생
arrB[0] = 10

arr1 = ["aa", "c"]
// arr2 = [1,2,3,4,5,6,"a"] 오류발생
arr2 = ["1","2","3","4","5"]
arr3 = [1,2,3,"a","b"]
arr4 = ["Aa", 1, true, [], {}]
//타입추론
//타입스크립트는 타입표기가 없는 경우 코드를 읽고 분석하여 타입을 유추할 수 있다.

//튜플 - 배열과 유사하며 차이점은 정해진 타입의 고정된 길이 배열을 표현
let tuple : [string, number];
tuple = ['a',1]
// tuple = ['a',1,2]  tuple에 오류발생
// tuple = [1,"A"] 값에 오류발생

let userId:number = 1234;
let userName:string = "green"
let isVaild: boolean = true;

//튜플
let user: [number, string, boolean] = [1234,"green",true]
console.log(user[0])
console.log(userId)

console.log(user[1])
console.log(userName)

console.log(user[2])
console.log(isVaild)

let tuple2: [string, number];
tuple2 = ['a', 1]
tuple2 = ['B', 2]
tuple.push(3)
console.log(tuple2)

let tuple3: readonly [string, number] = ["green", 111]
tuple3 = ["aa",222]
// tuple3[0] = "a"; 오류발생

//열거형 Enum 타입
enum Week {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
  }
  console.log(Week["Sun"]);
  console.log(Week[0]);

  enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
  }
  console.log(Color.Red); // red
  console.log(Color['Green']); // green

  //객체타입 object - 반복적인 객체타입사용시 interface나 type으로 지정
  //interface 선언적 확장(새로운 속성 추가하기위해 같은 이름으로 선언)이 가능
  interface IUser {
    name: string,
    age: number
  }
  interface IUser {
    hobby: string
  }
  type IUser2 = {
    name: string,
    age: number,
    isJob: boolean
  }
//   let user1: {name: string, age: number} ={
//     name: "green",
//     age: 26,
//   }
  let user1: IUser ={
    name: "green",
    age: 26,
    hobby: "축구"
  }
 
//   let user2: {name: string, age: number} = {
//     name: "blue",
//     age: 24
//   }
let user2: IUser = {
    name: "blue",
    age: 24,
    hobby: "농구"
  }