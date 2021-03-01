import React from 'react';
import '../Style/form.css';

const Form =()=>{
    return(
        <>
            <div className='outer'>
                    <div className='inner'>
                    <i className="fas fa-times"/>
                        <h1 className='top'>Login</h1>
                        <label className='fname'>First Name</label>
                        <input className='inp'  type='text' placeholder='Enter your first name'/>
                        <label className='lname'>Last Name</label>
                        <input className='inp'  type='text' placeholder='Enter your last name'/>
                        <label  className='email'>Email</label>
                        <input className='inp'  type='text' placeholder='Enter your email'/>
                        <label className='password'>Password</label>
                        <input className='inp'  type='password' placeholder='Enter the password' />
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