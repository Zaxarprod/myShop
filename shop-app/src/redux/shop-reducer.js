let initialState = {
    goods: [
        {
            id: 0,
            img:['https://st.kp.yandex.net/im/kadr/8/7/7/kinopoisk.ru-Lil_27-Wayne-877562.jpg',
                'https://www2.pictures.gi.zimbio.com/MUSIC+Tour+Lil+Wayne+Special+Guests+X0KoNif9z_Ox.jpg'],
            name: 'Название',
            price: 'Цена',
            colors: ['black','white','brown'],
            sizes: ['L', 'M', 'S'],
            direction: '',
        },
        {
            id: 1,
            img:['https://st.kp.yandex.net/im/kadr/8/7/7/kinopoisk.ru-Lil_27-Wayne-877562.jpg',
                'https://www2.pictures.gi.zimbio.com/MUSIC+Tour+Lil+Wayne+Special+Guests+X0KoNif9z_Ox.jpg'],
            name: 'Название',
            price: 'Цена',
            colors: ['black','white','brown'],
            sizes: ['L', 'M', 'S'],
            direction: '',
        },
        {
            id: 2,
            img:['https://st.kp.yandex.net/im/kadr/8/7/7/kinopoisk.ru-Lil_27-Wayne-877562.jpg',
                'https://www2.pictures.gi.zimbio.com/MUSIC+Tour+Lil+Wayne+Special+Guests+X0KoNif9z_Ox.jpg'],
            name: 'Название',
            price: 'Цена',
            colors: ['black','white','brown'],
            sizes: ['L', 'M', 'S'],
            direction: '',
        },
        {
            id: 3,
            img:['https://st.kp.yandex.net/im/kadr/8/7/7/kinopoisk.ru-Lil_27-Wayne-877562.jpg',
                'https://www2.pictures.gi.zimbio.com/MUSIC+Tour+Lil+Wayne+Special+Guests+X0KoNif9z_Ox.jpg'],
            name: 'Название',
            price: 'Цена',
            colors: ['black','white','brown'],
            sizes: ['L', 'M', 'S'],
            direction: '',
        },
        {
            id: 4,
            img:['https://st.kp.yandex.net/im/kadr/8/7/7/kinopoisk.ru-Lil_27-Wayne-877562.jpg',
                'https://www2.pictures.gi.zimbio.com/MUSIC+Tour+Lil+Wayne+Special+Guests+X0KoNif9z_Ox.jpg'],
            name: 'Название',
            price: 'Цена',
            colors: ['black','white','brown'],
            sizes: ['L', 'M', 'S'],
            direction: '',
        },
    ],
    selectedGood: {
        id: 3,
        img:['https://st.kp.yandex.net/im/kadr/8/7/7/kinopoisk.ru-Lil_27-Wayne-877562.jpg',
            'https://www2.pictures.gi.zimbio.com/MUSIC+Tour+Lil+Wayne+Special+Guests+X0KoNif9z_Ox.jpg'],
        name: 'Название',
        price: 'Цена',
        colors: ['black','white','brown'],
        sizes: ['L', 'M', 'S'],
        direction: '',
    },
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export default shopReducer