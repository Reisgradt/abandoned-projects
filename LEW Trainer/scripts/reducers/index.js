import * as types from '../constants/ActionTypes'

let initialState = {
    current_word: "",
    current_translate: "",
    isFetchingTranslate: false,
    isTranslateFailed: false,
    trainingWords: []
}

export default function (state = initialState, action) {
    switch(action.type) {
        case types.ENTER_WORD_REQUEST:
            return Object.assign({}, state, {
                        current_word: action.word,
                        isFetchingTranslate: true,
                        isTranslateFailed: false
                    })

        case types.ENTER_WORD_SUCCESS:
            return Object.assign({}, state, {
                        current_translate: action.text,
                        isFetchingTranslate: false
                    })

        case types.ENTER_WORD_FAIL:
            return Object.assign({}, state, {
                        current_translate: action.message,
                        isTranslateFailed: true,
                        isFetchingTranslate: false
                    })

        case types.ADD_NEW_WORD_REQUEST:
            return state

        default:
            return state
    }
}


/*
let store = {
    current_word: string,
    current_translate: string|array
}
*/
