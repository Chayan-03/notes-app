import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { useState } from 'react';
import { useReducer } from 'react';
import { notesReducer } from '../../reducers/notesReducers';
import { v4 as uuid } from 'uuid';


export const Home = () => {
    const initialState = {
        notes: [],
        title: '',
        text: ''
    }
    const [{ title, text, notes }, notesDispatch] = useReducer(notesReducer, initialState)

    const onTitleChange = (e) => {
        notesDispatch({ type: 'SET_TITLE', payload: e.target.value });
    }
    const onTextChange = (e) => {
        notesDispatch({ type: 'SET_TEXT', payload: e.target.value });
    }
    const onAddClick = () => {
        notesDispatch({
            type: 'ADD_NOTE'
        })
        notesDispatch({
            type: 'CLEAR_TEXT'
        })
    }
    console.log(notes);

    return (
        <>
            <Navbar />
            <main className='flex gap-3'>
                <Sidebar />
                <div>
                    <div className='flex flex-col gap-1 w-[300px] relative'>
                        <input value={title} onChange={onTitleChange} className='border-indigo-800 rounded-sm' type='text' placeholder='Enter the topic here'></input>
                        <textarea value={text} onChange={onTextChange} className='border-indigo-800 rounded-sm' placeholder='Enter the content here'></textarea>
                        <button disabled={title.length == 0} onClick={onAddClick} className='absolute right-0 bottom-0'>
                            <span class="material-symbols-outlined">
                                add
                            </span>
                        </button>
                    </div>
                    <div className='flex flex-wrap gap-4 mt-14'>
                        {
                            notes?.length > 0 && notes.map(({ id, title, text }) => (
                                <div  className='w-56 border border-neutral=800 rounded-xl'key={id}>
                                    <div className='flex justify-between items-center mt-4 p-2'>
                                        <p>{title}</p>
                                        <button>
                                            <span class="material-symbols-outlined">
                                                bookmark
                                            </span>
                                        </button>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p>{text}</p>
                                        <div className='ml-auto'>
                                            <button>
                                                <span class="material-symbols-outlined">
                                                    archive
                                                </span>
                                            </button>
                                            <button>
                                                <span class="material-symbols-outlined">
                                                    delete
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                            )
                        }
                    </div>
                </div>
            </main>
        </>
    )
}