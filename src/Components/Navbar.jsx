import React from 'react'
import '../Style/nav.css'
import { Link } from 'react-router-dom'

const Navbar=() => {
    return (
        <>
            <div className='main'>
                <div className='top'>
                <img src='../olx.ico' id='image'/>
                    <div className='input-value'>
                        <i className='fa fa-search sear'/>
                        <input type='text' placeholder='Pakistan' id='search-country' />
                        <i className="fas fa-chevron-down"/>
                    </div>
                    <div className='search'>
                        <input type='text' placeholder='Find Cars,Mobile Phone and more...' id='search-things'/>
                        <i className='fa fa-search'/>
                    </div>
                    <div className='info'>
                        <Link className='link' to='#'>Login</Link>
                        <div className='button'>
                        <button><i className="fas fa-hand-holding-usd">Sell</i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
