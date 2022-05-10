console.log('Hello Server');

setTimeout((): void => {
    console.log('Hello Server 2');
}, 3000); // setTimeOut의 두가지 파라미터에 하나를 함수, 하나는 시간

console.log('Hello Server 3');