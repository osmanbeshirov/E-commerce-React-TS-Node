import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react'

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
                    <Link to={'/signin'}>
                        <Button colorScheme='blue'>Login</Button>
                    </Link>

                    <Link to={'/signup'}>
                        <Button colorScheme='pink'>Register</Button>
                    </Link>

                </div>


            </nav>
        </div>
    )
}

export default Navbar;