

import { v4 as uuid } from 'uuid';

export const notesReducer = (state, {type,payload}) => {
    switch(type){
        case 'SET_TITLE':
            return {
                ...state,
                title: payload
            }
        case 'SET_TEXT':
            return {
                ...state,
                text: payload
            }
        case 'ADD_NOTE':
            return{
                notes:[...state.notes, {id: uuid(),title: state.title, text: state.text}]
            }
        case 'CLEAR_TEXT':
            return{
                ...state,
                title: '',
                text: ''
            }
        default:
            return ;
    }
    
}