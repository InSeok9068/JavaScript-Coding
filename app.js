const setTime = (number,time) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(number * 2);
        }, time);
    });
}

setTime(10,500)
setTime(20,200)
setTime(30,100)

