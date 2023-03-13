let number = 10;
let str1 = "abc";
let boolean1 = true;
function add(num1, num2) {
    return num1 + num2;
}
const sum = add(1, 2);
let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
arr5 = [{ name: "A", age: 20 }, { name: "b", age: 35 }];
let arr6 = [];
let arrA = [1, 2, 3, 4, 5, 6];
let arrB = [1, 2, 3, 4, 5, 6];
let arrC = [9, 8, 7, 6, 5];
arrB[0] = 10;
arr1 = ["aa", "c"];
arr2 = ["1", "2", "3", "4", "5"];
arr3 = [1, 2, 3, "a", "b"];
arr4 = ["Aa", 1, true, [], {}];
let tuple;
tuple = ['a', 1];
let userId = 1234;
let userName = "green";
let isVaild = true;
let user = [1234, "green", true];
console.log(user[0]);
console.log(userId);
console.log(user[1]);
console.log(userName);
console.log(user[2]);
console.log(isVaild);
let tuple2;
tuple2 = ['a', 1];
tuple2 = ['B', 2];
tuple.push(3);
console.log(tuple2);
let tuple3 = ["green", 111];
tuple3 = ["aa", 222];
var Week;
(function (Week) {
    Week[Week["Sun"] = 0] = "Sun";
    Week[Week["Mon"] = 1] = "Mon";
    Week[Week["Tue"] = 2] = "Tue";
    Week[Week["Wed"] = 3] = "Wed";
    Week[Week["Thu"] = 4] = "Thu";
    Week[Week["Fri"] = 5] = "Fri";
    Week[Week["Sat"] = 6] = "Sat";
})(Week || (Week = {}));
console.log(Week["Sun"]);
console.log(Week[0]);
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
console.log(Color.Red);
console.log(Color['Green']);
let user1 = {
    name: "green",
    age: 26,
    hobby: "축구"
};
let user2 = {
    name: "blue",
    age: 24,
    hobby: "농구"
};
//# sourceMappingURL=type01.js.map