export const SET_TRANSLATE = 'app/SET-TRANSLATE'

let initialState = {
    translate: 1,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TRANSLATE:
            return {
                ...state,
                translate: action.translate,
            }
        default:
            return state
    }
}

export let setTranslateAC = (translate) => ({
    type: SET_TRANSLATE,
    translate,
})

export const setTranslateTC = (translate) => {
    return (dispatch) => {
        dispatch(setTranslateAC(translate))
    }
}


export default appReducer