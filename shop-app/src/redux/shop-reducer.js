let initialState = {
    goods: [
        {
            id: 0,
            img:['https://st.kp.yandex.net/im/kadr/8/7/7/kinopoisk.ru-Lil_27-Wayne-877562.jpg',''],
            name: 'Название',
            price: 'Цена',
            colors: ['black','white','brown'],
        },
        {
            id: 1,
            img:['https://st.kp.yandex.net/im/kadr/8/7/7/kinopoisk.ru-Lil_27-Wayne-877562.jpg',''],
            name: 'Название',
            price: 'Цена',
            colors: ['black','white','brown'],
        },
        {
            id: 2,
            img:['https://st.kp.yandex.net/im/kadr/8/7/7/kinopoisk.ru-Lil_27-Wayne-877562.jpg',''],
            name: 'Название',
            price: 'Цена',
            colors: ['black','white','brown'],
        },
        {
            id: 3,
            img:['https://st.kp.yandex.net/im/kadr/8/7/7/kinopoisk.ru-Lil_27-Wayne-877562.jpg',''],
            name: 'Название',
            price: 'Цена',
            colors: ['black','white','brown'],
        },
        {
            id: 4,
            img:['https://st.kp.yandex.net/im/kadr/8/7/7/kinopoisk.ru-Lil_27-Wayne-877562.jpg',''],
            name: 'Название',
            price: 'Цена',
            colors: ['black','white','brown'],
        },
    ],
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export default shopReducer