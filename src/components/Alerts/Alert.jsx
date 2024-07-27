import React from 'react'

const Alert = ({message='Default message', success=true}) => {
    let alertStyleClasses = success ? 'offset-3 col-6 alert alert-success' : 'offset-3 col-6 alert alert-danger';
  return (
    <div id='alert-box' className={alertStyleClasses}>{message}</div>
  )
}

export default Alert