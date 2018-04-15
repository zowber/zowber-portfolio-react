import React from 'react'

const SocialLinks = () => {

    return (
        <div className='social-links'>
            <ul className="list-unstyled">
                <li>
                    <a href="mailto:andy+portfolio@zowber.com">
                        <i className="fa fa-envelope"></i>
                        <span className="sr-only">Email me!</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/zowber/">
                        <i className="fab fa-github"></i>
                        <span className="sr-only">Github Profile</span>
                    </a>
                </li>
            </ul>
        </div>
    )

}

export default SocialLinks