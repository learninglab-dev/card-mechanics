import React from 'react'
import {NavLink} from 'react-router-dom'
import '../style.css'

const activeStyle = {
    color: 'rgb(0, 153, 0)'
}

export default function Nav(){
    return (

        <nav className = 'row space-between'>
            <h1 className={'header-lg justify-content-left'}> Sea Monsters </h1>
            <ul className = 'nav justify-content-right '>
                <li>
                    <NavLink
                        to={'/'}
                        exact
                        activeStyle = {activeStyle}
                        className = 'nav-link'>
                        Gallery
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/game'}
                        exact
                        activeStyle = {activeStyle}
                        className = 'nav-link'>
                        Game
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/about'}
                        exact
                        activeStyle = {activeStyle}
                        className = 'nav-link'>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/cardflip'}
                        exact
                        activeStyle = {activeStyle}
                        className = 'nav-link'>
                        Testing
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}