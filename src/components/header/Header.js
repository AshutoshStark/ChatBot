import React from 'react';
import Styles from './header.css'
import { Link } from 'react-router-dom';



const Easy_Peasy = () => {
  




  return (
    <>
      <header>
        <nav>
          <div id="logo">
            Acody<br /> GPT
          </div>
          <div id="utility">
            <span className="LOGIN">
              <Link to={'/login'} className='login'>
                LogIn
              </Link>
            </span>
          </div>
        </nav>
      </header>

    </>
  );
};

export default Easy_Peasy;
