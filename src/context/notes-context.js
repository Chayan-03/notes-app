import React, {  useState } from 'react';
import{notesReducer} from '../reducers/notesReducers';
import{useContext,createContext, useReducer} from 'react';


const NotesContext = createContext();
const NotesProvider = ({ children }) => {
    const initialState = {
        archive: [],
        notes: [],
        title: '',
        text: ''
     }
    const [{ title, text, notes, archive}, notesDispatch] = useReducer(notesReducer, initialState)
    return (
        <NotesContext.Provider value={{ title, text, notes, archive, notesDispatch}}>
            {children}
        </NotesContext.Provider>
    )
}
const useNotes = () => useContext(NotesContext);
export { NotesProvider, useNotes };