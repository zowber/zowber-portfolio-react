import React from 'react';
import Brand from './Brand';

import SocialLinks from './SocialLinks'

const Header = (props) => {

  return (
    <div className='header'>
      <div className='container header'>
        <div className="row">
          <div className="col-6">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                <Brand />
              </a>
            </div>
          </div>
          <div className="col-6">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  )

}

export default Header