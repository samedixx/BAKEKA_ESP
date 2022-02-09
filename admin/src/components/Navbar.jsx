import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillFileAdd, AiOutlineHome } from 'react-icons/ai'

const NavItem = ({to, value, closed, Icon}) => {

    const commonClasses = 'flex items-center space-x-2 w-full p-2 block'
    const activeClass = commonClasses + 'border-blue-400 bg-orange-500 text-white'
    const inActiveClass = commonClasses + 'text-gray-500'

    return (
        <NavLink className={({isActive}) => isActive ? activeClass : inActiveClass} to={to}>
            {Icon} <span className=
            {closed 
            ? 'w-0 transition-width ease-linear whitespace-nowrap overflow-hidden' 
            : 'w-full transition-width ease-linear whitespace-nowrap overflow-hidden'
            }>
            {value}</span>
        </NavLink>
    )
}
export const Navbar = ({closed}) => {
    return (
        <nav>
            <div className='flex justify-center p-3'>
                <img className='w-14' src="https://area.test.media.termsandcondition.xyz/bitcoin.png" />
            </div>
            <ul>
                <li>
                    <NavItem 
                        closed={closed} 
                        to='/'
                        value='Home' 
                        Icon={<AiOutlineHome size={24} />}
                    />
                </li>
                
                <li>
                    <NavItem 
                        closed={closed}  
                        to='/create-post' 
                        value='Create Post' 
                        Icon={<AiFillFileAdd size={24} />} 
                    />
                </li>
                
            </ul>
        </nav>
    )
}
