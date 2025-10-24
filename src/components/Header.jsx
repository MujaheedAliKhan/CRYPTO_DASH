import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='top-nav'>
        {/* <a href="/">Home</a>
        <a href="/about">About</a> */}
        {/* Instead of this <a></a> tags it refresh the pages but
        if we use the <Link></Link> tags without refresh it loads */}
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
    </div> 
  )
}

export default Header
