import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { NotesCard } from '../../components/NotesCard';
import { useNotes } from '../../context/notes-context';


export const Home = () => {
    const { title, text, notes, notesDispatch } = useNotes();
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
    const pinnedNotes = notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
    const unPinnedNotes = notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);

    return (
        <>
            <Navbar />
            <main className='flex gap-3'>
                <Sidebar />
                <div>
                    <div className='flex flex-col gap-1 w-[500px] relative mt-2 mb-2 p-2 bg-indigo-400 rounded-xl'>
                        <input value={title} onChange={onTitleChange} className='p-2 border-indigo-800 rounded-sm ' type='text' placeholder='Enter the topic here'></input>
                        <textarea value={text} onChange={onTextChange} className='p-2 border-indigo-800 rounded-sm' placeholder='Enter the content here'></textarea>
                        <button disabled={title.length == 0} onClick={onAddClick} className='absolute right-0 bottom-0'>
                            <span className="material-symbols-outlined">
                                add
                            </span>
                        </button>
                    </div>
                    {/* pinned noes section */}
                    {
                        pinnedNotes?.length > 0 && (
                            <>
                                <h3 className=' mt-4 mb-2 font-bold'>Pinned Notes</h3>
                                <div className='flex flex-wrap gap-4 mt-4'>

                                    {
                                        pinnedNotes?.length > 0 && pinnedNotes.map(({ id, title, text, isPinned }) => (
                                            <NotesCard key={id} id={id} text={text} title={title} isPinned={isPinned} />
                                        ))
                                    }
                                </div>
                            </>
                        )
                    }
                    <div className=' gap-4 mt-4'>
                        {
                            unPinnedNotes?.length > 0 && <h3 className='mb-3 font-bold'>Unpinned Notes</h3>
                        }
                        <div className='flex flex-wrap gap-4 mt-4'>
                            {
                                unPinnedNotes?.length > 0 && unPinnedNotes.map(({ id, title, text, isPinned }) => (
                                    <NotesCard key={id} id={id} text={text} title={title} isPinned={isPinned} />
                                )
                                )
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}