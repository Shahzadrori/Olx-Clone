import React from 'react'
import '../Style/nav.css'
import { Link } from 'react-router-dom'
import Form from './Form'

const Navbar=() => {
    const Allow = ()=>{
        
    }
    return (
        <>
            <div className='main'>
                <div className='top'>
                <img src='../olx.ico' id='image'/>
                    <div className='input-value'>
                        <i className='fa fa-search sear'/>
                        <input className='country-input' type='text' placeholder='Pakistan' id='search-country' />
                        <div>
                        {/* <i className="fas fa-chevron-down arrow"/> */}
                        </div>
                    </div>
                    <div className='search'>
                        <input type='text' placeholder='Find Cars,Mobile Phone and more...' id='search-things'/>
                        <i className='fa fa-search'/>
                    </div>
                    <div className='info'>
                        <Link className='link' to='/sign-in'>Login</Link>
                        <div className='but'>
                        <button><i className="fas fa-hand-holding-usd">Sell</i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
