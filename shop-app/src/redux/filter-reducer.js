const ADD_FILTER = 'filter/ADD-FILTER'
const DELETE_FILTER = 'filter/DELETE_FILTER'

let initialState = {
    filters: [],
    categories: [
        {
            name: 'Пол',
            values: ['Мужчины','Женщины'],
        },
        {
            name: 'Категория',
            values: ['Одежда','Обувь'],
        },
        {
            name: 'Тип товара',
            values: ['Футболки','Брюки','Шорты'],
        }
    ]
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILTER:
            return {
                ...state,
                filters: [...state.filters, action.newFilter]
            }
        case DELETE_FILTER:
            return {
                ...state,
                filters: state.filters.filter((el)=>(el!==action.filter))
            }
        default:
            return state
    }
}

const newFilterAC = (newFilter) => ({
    type: ADD_FILTER,
    newFilter,
})

const delFilterAC = (filter) => ({
    type: DELETE_FILTER,
    filter,
})

export const addFilterTC = (newFilter) => {
    return (dispatch) => {
        dispatch(newFilterAC(newFilter))
    }
}

export const delFilterTC = (filter) => {
    return (dispatch) => {
        dispatch(delFilterAC(filter))
    }
}
export default filterReducer