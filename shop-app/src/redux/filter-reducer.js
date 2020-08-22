const ADD_FILTER = 'filter/ADD-FILTER'
const DELETE_FILTER = 'filter/DELETE_FILTER'
const SET_ADDIT_FILTER = 'filter/SET-ADDIT-FILTER'

let initialState = {
    additFilter: null,
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
                filters: (state.filters.indexOf(action.newFilter) !== -1)?state.filters:
                    [...state.filters, action.newFilter],
            }
        case DELETE_FILTER:
            return {
                ...state,
                filters: state.filters.filter((el)=>(el!==action.filter))
            }
        case SET_ADDIT_FILTER:
            return {
                ...state,
                additFilter: action.value,
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

const setAdditFilterAC = (value) => ({
    type: SET_ADDIT_FILTER,
    value,
})

export const addFilterTC = (newFilter) => {
    return async (dispatch) => {
        dispatch(newFilterAC(newFilter))
    }
}

export const delFilterTC = (filter) => {
    return async (dispatch) => {
        dispatch(delFilterAC(filter))
    }
}

export const setAdditFilterTC = (value) => {
    return async (dispatch) => {
        dispatch(setAdditFilterAC(value))
    }
}

export default filterReducer