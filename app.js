const age = parseInt(prompt("How old are you?"));

//isNaN() : 하나의 argument를 주면 number인지 아닌지 판별해줌.
//isNaN은 boolean값을 반환함.
// age는 number이기때문에 NaN이 아님. 그래서 false가 반환됨. 만약 number가 아니라면 true
console.log(isNaN(age));

// 조건은 boolean값으로 판별함. true or false
if (isNaN(age) || age < 0) {
  // isNaN이 true( age가 number가 아니라면 )
  console.log("Please write a real positive number");
} else if (age < 18) {
  //age가 18보다 작다면
  console.log("You are too young");
} else if (age >= 18 && age <= 50) {
  // age가 18이상이고 50이하 일 경우
  // AND : && 둘다 true 일 경우
  // OR : || 둘 중에 하나라도 true 일 경우
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age === 100) {
  // === : js에서만 사용하는 연산자
  // age가 100 일 경우
  console.log("wow you are wise");
} else if (age > 80) {
  console.log("You can do wahtever you want");
}
