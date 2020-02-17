function function1() {
  console.log(this.name);
  return {
    name: "홍길동",
    getName: function() {
      // 여기서의 this는 자신의 Object내에 this를 가르킴
      console.log(this.name);
    }
  };
}

function1.call({ name: "손흥민" }).getName();
// 손흥민
// 홍길동

// Arrow Function 사용
function function2() {
  console.log(this.name);
  return {
    name: "홍길동",
    //* arrow function은 자신을 포함하는 외부 scope에서 this를 계승받는다.
    //즉, arrow function은 자신만의 this를 생성하지 않는다. (Lexical this)
    getName: () => {
      console.log(this.name);
    }
  };
}

function2.call({ name: "손흥민" }).getName();
// 손흥민
// 손흥민
