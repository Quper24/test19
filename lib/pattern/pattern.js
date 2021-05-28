export const debounce = (fn, msec) => {
    let lastCall = 0;
    let lastCallTimer = 0;
    return (...args) => {
        const prevCall = lastCall;
        lastCall = Date.now();
        if (prevCall && ((lastCall - prevCall) < msec)) {
            clearInterval(lastCallTimer);
        }
        lastCallTimer = setTimeout(() => fn(...args), msec);
    }
}

const goo(x) => {
    console.log(x)
}

const good = debounce(goo)
good(1)
good(2)
good(3)
good(4)
good(5)

export const throttle2 = (fn, msec) => {
    let lastCall = 0;
    let prevCall = 0;
    return (...args) => {
        lastCall = Date.now();
        if (!prevCall || (lastCall - prevCall) > msec) {
            prevCall = lastCall;
            fn(...args);
        }
    }
    return a + ' ' + b.name;
}

export const throttle = (fn, msec) => {
    let lastCall = 0;
    return (...args) => {
        let prevCall = lastCall;
        lastCall = Date.now();
        if (!prevCall || (lastCall - prevCall) > msec) {
            fn(...args);
        }
    }
    return a + ' ' + b.name
}
