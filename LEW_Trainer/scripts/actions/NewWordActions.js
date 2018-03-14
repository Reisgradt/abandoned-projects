import * as types from '../constants/ActionTypes'
import { getTranslate, addNewWord } from '../utils/helper'
import { API_RES_CODES } from '../constants/AppConstants'


export function enterWord(word) {
    return dispatch => {
        dispatch({
            type: types.ENTER_WORD_REQUEST,
            word
        })

        getTranslate(word)
            .then(res => {
                if (res.data.success)
                    dispatch({
                        type: types.ENTER_WORD_SUCCESS,
                        text: res.data.text[0]
                    })
                else
                    dispatch({
                        type: types.ENTER_WORD_FAIL,
                        code: res.data.code,
                        message: API_RES_CODES[res.data.code]
                    })
            }).catch(err => {
                dispatch({
                    type: types.ENTER_WORD_FAIL,
                    message: "Unknown error"
                })
            })
    }
}

export function addWord() {
    return (dispatch, getState) => {
        dispatch({
            type: types.ADD_NEW_WORD_REQUEST
        })

        const { current_word, current_translate } = getState()

        addNewWord(current_word, current_translate)
            .then(res => {
                if (res.data.success)
                    dispatch({
                        type: types.ADD_NEW_WORD_SUCCESS
                    })
                else
                    dispatch({
                        type: types.ADD_NEW_WORD_FAIL,
                        message: res.data.message
                    })
            }).catch(err => {
                dispatch({
                    type: types.ADD_NEW_WORD_FAIL,
                    message: "Unknown error"
                })
            })


    }
}
