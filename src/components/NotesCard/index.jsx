import React from 'react';
import { useNotes } from '../../context/notes-context';
import { v4 as uuid } from 'uuid';



export const NotesCard = ({ key, id, title, text,isPinned }) => {
    const { notesDispatch } = useNotes();

    const onPinClick = ({ id }) => {
            !isPinned &&
            notesDispatch({
                type: 'PIN_NOTE',
                isPinned: true,
                payload: {id}
            })
    }

    return (
        <>
            <div className='w-56 border border-neutral=800 rounded-xl' key={id}>
                <div className='flex justify-between items-center mt-4 p-2'>
                    <p>{title}</p>
                    <button onClick={() => onPinClick(id)}>
                        <span className={`material-symbols-outlined ${isPinned ? 'text-zinc-950' : ''}`}>
                            push_pin
                        </span>
                    </button>
                </div>
                <div className='flex flex-col'>
                    <p>{text}</p>
                    <div className='ml-auto'>
                        <button>
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