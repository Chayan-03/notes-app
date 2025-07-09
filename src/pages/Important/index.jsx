import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { NotesCard } from '../../components/NotesCard';
import { useNotes } from '../../context/notes-context';


export const Important = () => {
    return(
        <>
            <Navbar/>
            <Sidebar/>
            
            <h2>Important page </h2>
        </>
    )
}