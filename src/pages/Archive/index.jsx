import React from 'react';
import { NotesCard } from '../../components/NotesCard';
import { useNotes } from '../../context/notes-context';
import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
export const Archive = () => {
    const { archive }  = useNotes();
    
    return (
        <>
            <Navbar />
            <main>
                <Sidebar />
                <div className="flex justify-center items-center h-screen">
                    {
                        archive?.length > 0 && archive.map(({ id, title, text, isPinned }) => (
                            <NotesCard key={id} id={id} text={text} title={title} isPinned={isPinned} />
                        ))
                    }

                </div>
            </main>
        </>
    );
}