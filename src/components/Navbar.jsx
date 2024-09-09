import React, { useEffect } from 'react'
import { ReactComponent as LinkedinIcon } from '../icons/linkedin-svgrepo-com.svg'
import { ReactComponent as InfoIcon } from '../icons/pacman-game-gaming-svgrepo-com.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
  const LinkClasses = "nav-link text-capitalize px-3"
  const LinkStyles = {
    textDecoration: 'none'
  }
  const isLoggedinData = useSelector(state => state)
  const dispatch = useDispatch();
  let searchParams = new URL(window.location.href).search;
  searchParams =  new URLSearchParams(searchParams);

  const logOut = () => {
    dispatch({type:'UESR_LOGIN_FAILED'})
    window.location.href = '/login'
  }

 

  const isLoggedin = searchParams.has('email') && searchParams.has('id') ? true : false

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/dorker">Mr.Dorker</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" style={{ display: 'flex', justifyContent: 'space-between' }} id="navbarSupportedContent">
            <div className='ml-auto' id='inital'>
              <ul className="navbar-nav ">
                <li className="nav-item" style={{ display: 'flex', flexDirection: 'row' }}>
                  {isLoggedin ? <Link style={LinkStyles} to={'/dorker'}><a className={LinkClasses} href="/">dorker</a></Link>
                  :
                  <Link style={LinkStyles} to={'/login'}><a className={LinkClasses} href="/login">login</a></Link>}
                  <Link style={LinkStyles} to={'/feedback'} className={LinkClasses}>feedback</Link>
                  <Link style={LinkStyles} to={'/about-me'} className={LinkClasses}>about</Link>
                  {isLoggedin && <Link style={LinkStyles} className={LinkClasses} onClick={()=> logOut()}>logout</Link>}
                  
                </li>
              </ul>
            </div>
            <div className='mr-auto' id='end'>
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.linkedin.com/in/jainireshj" target='_blank'>
                    <LinkedinIcon style={{ width: '24px', height: '24px', marginRight: '10px' }} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.topmate.io/jai_niresh_j" target='_blank'>
                    <InfoIcon style={{ width: '24px', height: '24px', marginRight: '10px', marginTop: '5px' }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className='container' style={{marginTop:'4rem'}}>
        <div className='row'><p className=' col-md-12 my-1 fst-italic'>Feel free to suggest a new tool / feature, that can upskill your bug bounty game ! in the Feedback tab.</p></div>
        <p className='col-md-12 my-1 fst-italic fw-bold'>Win a chance to be potrayed on the upcoming Honours , page ! </p>
      </div>
    </div>
  )
}

export default Navbar