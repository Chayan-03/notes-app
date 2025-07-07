import React, {  useState } from 'react';
import{notesReducer} from '../reducers/notesReducers';
import{useContext,createContext, useReducer} from 'react';


const NotesContext = createContext();
const NotesProvider = ({ children }) => {
    const initialState = {
        notes: [],
        title: '',
        text: ''
     }
    const [{ title, text, notes,isPinned}, notesDispatch] = useReducer(notesReducer, initialState)
    return (
        <NotesContext.Provider value={{ title, text, notes,notesDispatch,isPinned }}>
            {children}
        </NotesContext.Provider>
    )
}
const useNotes = () => useContext(NotesContext);
export { NotesProvider, useNotes };