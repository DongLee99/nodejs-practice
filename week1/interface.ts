interface Sopt {
    name: string;
    age: number;
    organization: string;
    completion: number[];
}

const sopt_interface: Sopt = {
    name: '이동현',
    age: 24,
    organization: 'SOPT',
    completion: [1, 2, 3]
};

const sopts: Sopt[] = [
    {
        name: '이동현',
        age: 24,
        organization: 'SOPT',
        completion: [28, 29]
    },
    {
        name: '이동현',
        age: 24,
        organization: 'SOPT',
        completion: [28, 29]
    },
    {
        name: '이동현',
        age: 24,
        organization: 'SOPT',
        completion: [28, 29]
    }
];

interface Closet {
    name: string;
    shirt: number;
    pants: number;
    sunglass?: number;
    hat?: number;
}

const ohmygirl: Array<Closet> = [
    {
        name: '효정',
        shirt: 5,
        pants: 5,
        sunglass: 3,
        hat: 4
    },
    {
        name: '효정',
        shirt: 5,
        pants: 5,
    }
]