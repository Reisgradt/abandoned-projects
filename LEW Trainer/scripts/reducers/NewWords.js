import * as types from '../constants/ActionTypes'

let initialState = []

export default function new_words(state = initialState, action) {
    switch (action.type) {
        case types.ENTER_WORD:
            return [...state, action.word]

        default:
            return state
    }
}
