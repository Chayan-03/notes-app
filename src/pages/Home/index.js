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
                            <span className="material-symbols-outlined">
                                add
                            </span>
                        </button>
                    </div>
                    <div className='flex flex-wrap gap-4 mt-14'>
                        {
                            notes?.length > 0 && notes.map(({ id, title, text,isPinned }) => (
                                <NotesCard key = {id} id = {id} text = {text} title= {title} isPinned={isPinned} />
                            )
                            )
                        }
                    </div>
                </div>
            </main>
        </>
    )
}