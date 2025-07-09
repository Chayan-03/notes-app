import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
    const getStyles = ({ isActive }) => {
        return isActive ?'bg-indigo-800 text-white flex align-center gap-1 px-2 py-2 rounded-tr-full rounded-br-full':'hover:bg-indigo-800 hover:text-white rounded-tr-full rounded-br-full flex align-center gap-1';
    }
    return (
        <aside className='flex flex-col gap-4 p-4 bg-gray-100 border-r-2 w-64 h-screen font-bold'>
            <NavLink className = {getStyles} to='/'>
            <span class="material-symbols-outlined">
                home
            </span>
            <span>Home</span>
            </NavLink>
            <NavLink className = {getStyles} to='/archived'>
            <span class="material-symbols-outlined">
                archive
            </span>
            <span>Archived</span>
            </NavLink>
            <NavLink  className = {getStyles} to='/important'>
            <span class="material-symbols-outlined">
                label_important
            </span>
            <span>Important</span>
            </NavLink>
            <NavLink className = {getStyles} to='/bin'>
            <span class="material-symbols-outlined">
                auto_delete
            </span>
            <span>Bin</span>
            </NavLink>
        </aside>
    )
}