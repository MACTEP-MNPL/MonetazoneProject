export type CountryType = {
    name: string,
    flagSVG: string,
    cities: string [],
    currencies: string [],
    issue: boolean,
    intake: boolean
}

export const countries: CountryType [] = [
    {
        name: 'Австрия',
        flagSVG: 'austria',
        cities: ['Вена'],
        currencies: ['Евро'],
        issue: true,
        intake: true
    },
    {
        name: 'Азербайджан',
        flagSVG: 'azerbaijan',
        cities: ['Баку'],
        currencies: ['Доллар', 'Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'Армения',
        flagSVG: 'armenia',
        cities: ['Ереван'],
        currencies: ['Доллар', 'Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'Бельгия',
        flagSVG: 'belgium',
        cities: ['Брюссель', 'Антверпен'],
        currencies: ['Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'Болгария',
        flagSVG: 'bulgaria',
        cities: ['София', 'Пловдив', 'Варна', 'Бургас'],
        currencies: ['Доллар', 'Евро'],
        issue: true,
        intake: true
    },
    {
        name: 'Великобритания',
        flagSVG: 'uk',
        cities: ['Лондон', 'Манчестер', 'Ливерпуль'],
        currencies: ['Фунты'],
        issue: true,
        intake: false
    },
    {
        name: 'Венгрия',
        flagSVG: 'hungary',
        cities: ['Будапешт'],
        currencies: ['Доллар', 'Евро'],
        issue: true,
        intake: true
    },
    {
        name: 'Германия',
        flagSVG: 'germany',
        cities: ['Берлин', 'Франкфурт-на-Майне', 'Дюссельдорф', 'Мюнхен', 'Бонн', 'Лейпциг', 'Кёльн', 'Дрезден', 'Дортмунд', 'Эссен', 'Штутгарт'],
        currencies: ['Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'Греция',
        flagSVG: 'greece',
        cities: ['Афины', 'Солоники'],
        currencies: ['Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'Грузия',
        flagSVG: 'georgia',
        cities: ['Батуми', 'Тбилиси'],
        currencies: ['Доллар', 'Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'Израиль',
        flagSVG: 'israel',
        cities: ['Тель-Авив'],
        currencies: ['Доллар', 'Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'Исландия',
        flagSVG: 'iceland',
        cities: ['Рейкьявик'],
        currencies: ['Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'Испания',
        flagSVG: 'spain',
        cities: ['Барселона', 'Мадрид', 'Малага', 'Валенсия', 'Аликанте', 'Севилья', 'Марбелья'],
        currencies: ['Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'Италия',
        flagSVG: 'italy',
        cities: ['Рим', 'Милан', 'Флоренция'],
        currencies: ['Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'Казахстан',
        flagSVG: 'kazakhstan',
        cities: ['Алма-Ата'],
        currencies: ['Доллар'],
        issue: true,
        intake: true
    },
    {
        name: 'Киргизия',
        flagSVG: 'kyrgyzstan',
        cities: ['Бишкек', 'Ош'],
        currencies: ['Доллар'],
        issue: true,
        intake: true
    },
    {
        name: 'Канада',
        flagSVG: 'canada',
        cities: ['Торонто', 'Ванкувер', 'Монреаль'],
        currencies: ['Доллар', 'Канадский доллар'],
        issue: true,
        intake: false
    },
    {
        name: 'Кипр Юг',
        flagSVG: 'cyprus',
        cities: ['Лимассол', 'Ларнака'],
        currencies: ['Доллар', 'Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'Кипр Север',
        flagSVG: 'north_cyprus',
        cities: ['Никосия'],
        currencies: ['Доллар', 'Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'Китай',
        flagSVG: 'china',
        cities: ['AlyPay карты'],
        currencies: ['Юань'],
        issue: false,
        intake: true
    },
    {
        name: 'Латвия',
        flagSVG: 'latvia',
        cities: ['Рига'],
        currencies: ['Доллар', 'Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'Литва',
        flagSVG: 'lithuania',
        cities: ['Вильнюс'],
        currencies: ['Доллар', 'Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'Молдова',
        flagSVG: 'moldova',
        cities: ['Кишинёв'],
        currencies: ['Доллар', 'Евро'],
        issue: true,
        intake: true
    },
    {
        name: 'Нидерланды',
        flagSVG: 'netherlands',
        cities: ['Амстердам', 'Роттердам'],
        currencies: ['Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'Норвегия',
        flagSVG: 'norway',
        cities: ['Осло'],
        currencies: ['Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'ОАЭ',
        flagSVG: 'uae',
        cities: ['Абу-Даби', 'Дубай'],
        currencies: ['Дирхам', 'Доллар'],
        issue: true,
        intake: true
    },
    {
        name: 'Польша',
        flagSVG: 'poland',
        cities: ['Варшава'],
        currencies: ['Доллар', 'Евро'],
        issue: true,
        intake: true
    },
    {
        name: 'Португалия',
        flagSVG: 'portugal',
        cities: ['Лиссабон', 'Порту'],
        currencies: ['Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'Словакия',
        flagSVG: 'slovakia',
        cities: ['Братислава'],
        currencies: ['Евро'],
        issue: true,
        intake: true
    },
    {
        name: 'Сербия',
        flagSVG: 'serbia',
        cities: ['Белград'],
        currencies: ['Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'Словения',
        flagSVG: 'slovenia',
        cities: ['Любляна'],
        currencies: ['Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'США',
        flagSVG: 'usa',
        cities: ['Лос-Анджелес', 'Маями', 'Нью-Йорк', 'Чикаго', 'Бостон'],
        currencies: ['Доллар'],
        issue: true,
        intake: false
    },
    {
        name: 'Турция',
        flagSVG: 'turkey',
        cities: ['Стамбул', 'Аланья', 'Анталия', 'Бодрум', 'Анкара', 'Измир', 'Мерсин'],
        currencies: ['Доллар', 'Евро'],
        issue: true,
        intake: true
    },
    {
        name: 'Узбекистан',
        flagSVG: 'uzbekistan',
        cities: ['Ташкент'],
        currencies: ['Доллар'],
        issue: true,
        intake: false
    },
    {
        name: 'Франция',
        flagSVG: 'france',
        cities: ['Париж', 'Ницца'],
        currencies: ['Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'Черногория',
        flagSVG: 'montenegro',
        cities: ['Будва', 'Подгорица'],
        currencies: ['Евро', 'Доллар'],
        issue: true,
        intake: false
    },
    {
        name: 'Чехия',
        flagSVG: 'czech',
        cities: ['Прага'],
        currencies: ['Евро', 'Доллар'],
        issue: true,
        intake: true
    },
    {
        name: 'Швейцария',
        flagSVG: 'switzerland',
        cities: ['Цюрих', 'Женева', 'Лугано'],
        currencies: ['Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'Швеция',
        flagSVG: 'sweden',
        cities: ['Стокгольм'],
        currencies: ['Евро'],
        issue: true,
        intake: false
    },
    {
        name: 'Эстония',
        flagSVG: 'estonia',
        cities: ['Таллин'],
        currencies: ['Евро', 'Доллар'],
        issue: true,
        intake: false
    },
    {
        name: 'Южная Корея',
        flagSVG: 'south_korea',
        cities: ['Сеул', 'Пусан'],
        currencies: ['Воны'],
        issue: true,
        intake: false
    }
]