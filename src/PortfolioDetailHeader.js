import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioDetailHeader = (props) => {
    const item = props.item
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-2">
                    <Link to='/' className="back-button mt-5">
                            <i className="fa fa-arrow-left"></i>
                            <span className="sr-only">Back to Portfolio</span>
                    </Link>
                </div>
                <div className="col-12 col-sm-10">
                    <h2 className='mt-5'>{item.name}</h2>
                </div>
            </div>
        </div>
    )
}

export default PortfolioDetailHeader