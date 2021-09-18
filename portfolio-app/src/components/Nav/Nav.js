import React from 'react'

function Nav() {
    return (
        <nav className="nav">
            <ul className="nav__links">
                <li className="nav__links-li"><a className="anchor" href="#header">INTRO</a></li>
                <li className="nav__links-li"><a className="anchor" href="#project">PROJECTS</a></li>
                <li className="nav__links-li"><a className="anchor" href="#about">ABOUT ME</a></li>
                <li className="nav__links-li"><a className="anchor" href="#contact">CONTACT</a></li>
            </ul>
        </nav>
    )
}

export default Nav
