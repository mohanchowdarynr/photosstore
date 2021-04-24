import React from 'react'

const Header = ({handleLogOut}) => {
    return (
        <div className="hero">
        <nav>
            <h1>PhotoStore</h1>
            <button onClick={handleLogOut}>Log out</button>
        </nav>
        </div>
    )
}

export default Header
