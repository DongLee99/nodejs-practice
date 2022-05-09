const sopt = {
    season: 30,
    group: ['YB', 'OB'],
    part: ['서버', '기획', '디자인', '안드로이드', '웹', 'IOS'],
    president: '김규민',
    introduce: function() {
        this.part.map(name => {
            console.log(`솝트 내 파트는 ${name} 파트가 있어요!`)
        });
    }
}

//let arr = [1, 'item', true];
let arr2 = Array(4, null, {item: 'item'});

arr.map(item => console.log(item));
arr2.map(item => console.log(item));