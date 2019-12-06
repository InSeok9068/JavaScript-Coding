// 변수를 동적으로 생성하여 출력
for (let i = 1; i <= 5; i++) {
  eval("var variable" + i + "=" + i);

  console.log(eval("variable" + i));
}

// 1
// 2
// 3
// 4
// 5
