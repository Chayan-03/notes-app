import React from 'react';
import { useNotes } from '../../context/notes-context';
import { v4 as uuid } from 'uuid';

export const NotesCard = ({ id, title, text,isPinned }) => {
    const { notesDispatch } = useNotes();
    const onPinClick = ( id ) => {
            !isPinned ? notesDispatch({
                type: 'PIN_NOTE',
                payload: {id}
            }): notesDispatch({
                type: 'UNPIN_NOTE',
                payload: {id}
            })
    };
    const addArchive = (id) => {
        notesDispatch({
            type: 'ADD_ARCHIVE',
            payload: {id}
        })
    }
    return (
        <>
            <div className='w-56 border border-neutral=800 rounded-xl' key={id}>
                <div className='flex justify-between items-center mt-4 p-2'>
                    <p>{title}</p>
                    <button onClick={() => onPinClick(id)}>
                        <span className={isPinned ? 'material-icons' : 'material-symbols-outlined'}>
                            push_pin
                        </span>
                    </button>
                </div>
                <div className='flex flex-col '>
                    <p>{text}</p>
                    <div className='ml-auto'>
                        <button onClick={() => addArchive(id)}>
                            <span className="material-symbols-outlined">
                                archive
                            </span>
                        </button>
                        <button>
                            <span className="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}