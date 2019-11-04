let applePrice = 100;

const process1 = isTrue => {
  return new Promise(function(reslove, reject) {
    if (isTrue) {
      setTimeout(function() {
        applePrice += 100;
        reslove(applePrice);
      }, 2000);
    } else {
      reject();
    }
  });
};

const process2 = () => console.log(applePrice * 2);

const errorCatch = () => console.log("Error");

// 작업이 성공
process1(true)
  .then(process2)
  .catch(errorCatch);

//400

// 작업이 실패
process1(false)
  .then(process2)
  .catch(errorCatch);
