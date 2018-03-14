import axios from 'axios'
import { API_GET_TRANSLATE, API_ADD_WORD } from '../constants/AppConstants'

export function getTranslate(_text) {
    return axios.post(API_GET_TRANSLATE, {
        text: encodeURIComponent(_text),
        lang: 'en-ru'
    })
}


export function addNewWord(word, translate) {
    return axios.post(API_ADD_WORD, {
        word,
        translate
    })
}
