import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/form.css';
import {useState} from 'react';

const Form =()=>{
    const [data, setdata] = useState({
        fname:'',
        lname:'',
        email:'',
        password:''
    });
    const targetval=(event)=>{
        const value=event.target.value;
        const name
    }

    return(
        <>
            <div className='outer'>
                    <div className='inner'>
                   <Link to='/'><i className="fas fa-times"/></Link>
                        <h1 className='top'>Login</h1>
                        <label>First Name</label>
                        <input className='inp' name='fname' type='text' placeholder='Enter your first name'/>
                        <label>Last Name</label>
                        <input className='inp' name='lname' type='text' placeholder='Enter your last name'/>
                        <label>Email</label>
                        <input className='inp' name='email' type='text' placeholder='Enter your email'/>
                        <label>Password</label>
                        <input className='inp' name='password' type='password' placeholder='Enter the password' />
                        <div className='btns'>
                        <button className='sub-btn'>Submit</button>
                        <button className='res-btn'>Reset</button>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default Form