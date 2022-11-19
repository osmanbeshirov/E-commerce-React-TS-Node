import React from 'react'
import { Link } from 'react-router-dom'

import '../Navbar/styles.css'

const Navbar = () => {
    return (
        <div>
            <nav className='nav'>
                <div className='left'>
                    <div className="logo">
                        <Link to={'/'} >E-commerce</Link>
                    </div>

                    <ul className="menu">
                        <li><Link to={'products'}>Products</Link></li>
                    </ul>
                </div>

                <div className='right'>
                    right
                </div>


            </nav>
        </div>
    )
}

export default Navbar;