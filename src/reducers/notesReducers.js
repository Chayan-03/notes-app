
import React, { createContext, useReducer } from 'react';
import { useNotes } from '../context/notes-context';
import { NotesProvider } from '../context/notes-context';
import { NotesCard } from '../components/NotesCard';
import { v4 as uuid } from 'uuid';

export const notesReducer = (state, { type, payload }) => {
    switch (type) {
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
            return {
                notes: [...state.notes, { id: uuid(), title: state.title, text: state.text, isPinned: false }]
            }
        case 'CLEAR_TEXT':
            return {
                ...state,
                title: '',
                text: ''
            }
        case 'PIN_NOTE':
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === payload.id ? { ...note, isPinned: !note.isPinned  } : note
                )
            }
        case 'UNPIN_NOTE':
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
                )
            }
        case 'ADD_ARCHIVE':
            return {
                ...state,
                archive: [ ...state.archive, state.notes.find(({id}) => id === payload.id)],
                notes: state.notes.filter(note => note.id !== payload.id)
            }
        default:
            return;
    }

}