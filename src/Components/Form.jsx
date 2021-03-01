import React from 'react';
import '../Style/form.css';

const Form =()=>{
    return(
        <>
            <div className='outer'>
                    <div className='inner'>
                    <i className="fas fa-times"/>
                        <h2 className='top'>Login</h2>
                        <label className='fname'>First Name</label>
                        <input type='text' placeholder='Enter your first name'/>
                        <label className='lname'>Last Name</label>
                        <input type='text' placeholder='Enter your last name'/>
                        <label  className='email'>Email</label>
                        <input type='text' placeholder='Enter your email'/>
                        <label className='password'>Password</label>
                        <input type='password' placeholder='Enter the password' />
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