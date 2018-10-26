import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='nav'>
      <img className='twatter-logo' width="50" src="https://icon2.kisspng.com/20180203/wze/kisspng-bird-logo-euclidean-vector-icon-twitter-transparent-background-5a75930155d476.5647598015176547853516.jpg" alt="Twatter Logo" />
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            New Twat
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}