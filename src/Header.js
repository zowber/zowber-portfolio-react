import React from 'react';
import Brand from './Brand';

import SocialLinks from './SocialLinks'

const Header = (props) => {

  return (
    <div className='header'>
      <div className='container header'>
        <div className="row">
          <div className="col-6 col-sm-7">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                <Brand />
              </a>
            </div>
          </div>
          <div className="col-5 offset-1 col-sm-5 offset-sm-0">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  )

}

export default Header