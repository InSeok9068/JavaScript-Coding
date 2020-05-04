const asyncFunction1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  });
};

const asyncFunction2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
};

async function excuteJob() {
  const result1 = await asyncFunction1();
  const result2 = await asyncFunction2();

  console.log(result1 + result2); // 3
}

excuteJob();
