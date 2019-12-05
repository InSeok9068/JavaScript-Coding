class Date {
  // 생성자
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  // Getter, Setter는 변수 접근과 같은 방식으로 사용된다.
  // Getter 메소드
  get getYear() {
    return this.year;
  }

  // Setter 메소드
  set setYear(year) {
    this.year = year;
  }

  // 메소드
  getDate() {
    return `${this.year}-${this.month}-${this.day}`;
  }

  // Static 메소드
  static staticMethod() {
    return "Static Method";
  }
}

// 객체 생성
const date = new Date("2019", "12", "05");

// 메소드 호출
console.log(date.getDate()); // 2019-12-05

// Setter 호출
date.year = "2018";

// Getter 호출
console.log(date.year); // 2018

// 메소드 호출
console.log(date.getDate()); // 2018-12-05

// Static 메소드 호출
console.log(Date.staticMethod()); // Static Method
