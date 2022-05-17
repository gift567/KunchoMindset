import React from 'react';
import './Sidebar.css'

const Sidebar = ({ open }) => {

        const sidebarLinks = [{
            name: 'Home'
        },
        {
            name: 'Music'
        },
        {
            name: 'Videos'
        },
        {
            name: 'About'
        }
    ]
    return(
        <div className={`sidebar ${ open ? 'nav__links-open' : 'nav__links-close'}`}>
            {sidebarLinks.map((link) => (
                <div className='sidebar__links'>
                    <span>{link.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Sidebar
