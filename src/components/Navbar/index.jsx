import logo from '../../assests/main.jpg';

export const Navbar = ()=>{
    return (
        <header className='flex px-5  py-3 gap-3 border-b-2 border-gray-100'>
            <div className='w-12 h-12'>
                <img className='w-full h-full' src = {logo} alt='logo'></img>
            </div>
            <h1 className='text-4xl text-indigo-800 font-bold'>Note It</h1>
        </header>

    )
}