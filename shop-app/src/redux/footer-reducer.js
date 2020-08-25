

let initialState = {
    shop:['Футболки','Шорты','Брюки'],
    info:['Карта клиента','Скидки','Размеры'],
    contacts:[
        {
            name: 'vk',
            src:'',
        },
        {
            name: 'facebook',
            src:'',
        },
        {
            name: 'twitter',
            src:'',
        },
        {
            name: 'mail',
            src:'',
        },
        {
            name: 'gmail',
            src:'',
        },
    ]
}

const footerReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export default footerReducer