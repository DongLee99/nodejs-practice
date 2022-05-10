const promise = new Promise((resolve, reject) => {
    if (false) {
        resolve('성공');
    } else {
        reject(new Error('에러 발생! : false'));
    }
});

promise.then((resolveData): void =>{ 
        console.log(resolveData)})
    .catch(err => console.log(err));
    
const restaurant = (callback: () => void, time: number) => {
    setTimeout(callback, time);
}

const order = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        restaurant(() => {
            console.log('[레스토랑 진행 상황 - 음식 주문');
            resolve('음식 주문 시작');
        }, 1000);
    });
}

const cook = (progress: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        console.log('[레스토랑 진행 상황 - 음식 조리]');
        restaurant(() => {
            resolve(`${progress} -> 음식 조리 중`);
        }, 2000);
    });
}

const serving = (progress: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        console.log( `[레스토랑 진행 상황 - 음식 서빙]`);
        restaurant(() => {
            resolve(`${progress} -> 음식 서빙 중`);
        }, 3000);
    });
}

const eat = (progress: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        console.log('[레스토랑 진행 상황 - 음식 먹는중]');
        restaurant(() => {
            resolve(`${progress} -> 음식 먹는중`);
        }, 3000);
    });
}

order().then(progress => cook(progress))
    .then(progress => serving(progress))
    .then(progress => eat(progress))
    .then(progress => console.log(progress));


const racingCar = (callback: () => void, time: number) => {
    setTimeout(callback, time);
};

const factory = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        console.log("차 제조중");
        racingCar(() => {
            resolve("기아 자동차")
        }, 1000);
    });
} 

const race = (progress: string): Promise<string> => {
        return new Promise((resolve, reject) => {
            console.log("차 달린다.");
            racingCar(() => {
                resolve(`${progress} 가 달린다.`);
            }, 1000);
        });
}

factory().then(progress => race(progress))
.then(progress => console.log(progress));