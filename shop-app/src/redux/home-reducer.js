

let initialState = {
    popularGoods: [
        {
            id: 1,
            img: ['https://my-hit.org/storage/1677983_1920x1080x500.jpg',
                '',
                ''
            ],
            name: 'Название_1',
            price: 'Цена',
            direction: '',
        },
        {
            id: 2,
            img: ['',
                '',
                ''
            ],
            name: 'Название_2',
            price: 'Цена',
            direction: '',
        },
        {
            id: 3,
            img: ['',
                '',
                ''
            ],
            name: 'Название_3',
            price: 'Цена',
            direction: '',
        },
    ],
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export default homeReducer