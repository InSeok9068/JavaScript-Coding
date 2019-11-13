const moment = require("moment");

// 현재시간
console.log(moment());
// moment("2019-11-13T20:20:56.274")

// 원하는 날짜 Date타입 구하기
console.log(moment("2019-01-01"));
console.log(moment("20190101"));
// moment("2019-01-01T00:00:00.000")

// 포맷 설정 1
console.log(moment().format("YYYY-MM-DD"));
// 2019-11-13

// 포맷 설정 2
console.log(moment().format("YYYY년 MM월 DD일"));
// 2019년 11월 13일

// 년도
console.log(moment().year());
// 2019

// 월
console.log(moment().month());
// 10

// 일
console.log(moment().date());
// 13

// 요일
console.log(moment().day());
// 3

// 시간
console.log(moment().hours());
// 20

// 분
console.log(moment().minutes());
// 21

// 초
console.log(moment().milliseconds());
// 229

// 현재 날짜로 부터 2년뒤
console.log(moment().add(2, "year"));
// moment("2021-11-13T20:21:17.229")

// 현재 날짜로 부터 1달 뒤
console.log(moment().add(1, "month"));
// moment("2019-12-13T20:21:17.231")

// 달기준으로 몇달 차이나는지 위 두개의 날짜 값의 비교
console.log(
  moment()
    .add(2, "year")
    .diff(moment().add(1, "month"), "month")
);

// 23

// moment객체를 자바스크립트 날짜객체로 변환
console.log(moment().toDate());
