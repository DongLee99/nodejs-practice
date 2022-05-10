let asyncFunction1 = (msg: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`asyncFunc1 - ${msg}`);
        }, 1000);
    });
};

let asyncFunction2 = (msg: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`asyncFunc2 - ${msg}`);
        }, 1500);
    });
};

const promiseMain1 = (): void => {
    asyncFunction1('hi').then((result: string) => {
        console.log(result);
        return asyncFunction2('hello');
    }).then((result: string) => {
        console.log(result);
    });
}

promiseMain1()

const asyncMain = async (): Promise<void> => {
    let result = await asyncFunction1('hi');
    console.log(result);
    result = await asyncFunction2('hello');
    console.log(result);
};

asyncMain();