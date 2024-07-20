import React from 'react'
import {ReactComponent as LinkedinIcon} from '../icons/linkedin-svgrepo-com.svg'
import {ReactComponent as InfoIcon} from '../icons/pacman-game-gaming-svgrepo-com.svg'

const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="/">Mr.Dorker</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" style={{display: 'flex', justifyContent: 'space-between'}} id="navbarSupportedContent">
        <div className='ml-auto' id='inital'>
        <ul className="navbar-nav "> {/* Use mr-auto to push items to the right */}
          <li className="nav-item" style={{display:'flex', flexDirection:'row'}}>
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/about-me">about</a>
            {/* <a className="nav-link" href="/contact">contact</a> */}
          </li>
        </ul>
        </div>
        <div className='mr-auto'  id='end'>
        <ul className="navbar-nav ">
          {/* LinkedIn Icon */}
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
  </nav></div>
  )
}

export default Navbar