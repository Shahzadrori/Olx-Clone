import React from 'react'
import { Link } from 'react-router-dom'

const Navbar=() => {
    return (
        <>
            <div className='main'>
                <div className='top'>
                    <div className='input-value'>
                    <img src='../olx.ico' id='image'/>
                        <i className='fa fa-search'/>
                        <input type='text' placeholder='Pakistan' id='search-country' />
                        <i className="fas fa-chevron-down"/>
                    </div>
                    <div className='search'>
                        <input type='text' placeholder='Find Cars,Mobile Phone and more...' id='search-things'/>
                        <i className='fa fa-search'/>
                    </div>
                    <div className='info'>
                        <Link to='#'>Login</Link>
                        <div className='button'>
                        <i className="fas fa-hand-holding-usd">Sell</i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
