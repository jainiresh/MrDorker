import React from 'react'

const UserInput = (
    {label, placeholder, tagData, onChangeHandler, type='text', id, isTextArea=false}
) => {
    return (
        <div className='mb-5'>
        <label htmlFor="input2" className='form-label float-start'>{label}{tagData && <span style={{ fontStyle: 'italic', fontSize: '0.8rem' }}>{tagData}</span>}</label>
        { isTextArea ? <textarea type={type} onChange={onChangeHandler} className='form-control' id={id} required placeholder={placeholder} /> 
        :
         <input type={type} onChange={onChangeHandler} className='form-control' id={id} required placeholder={placeholder} />}
    </div>
    )
}

export default UserInput