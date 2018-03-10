import React from 'react'
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser'

const PortfolioDetailIntro = (props) => {

  const item = props.item

  return (
    <div className="container-fluid">

      {item.type === 'caseStudy' &&
        <div className="row" >
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="media-hero">
              {item.mp4Hero
                ? <video
                  src="http://zowber-portfolio-assets.s3.amazonaws.com/portfolio-items/4/hero.mp4"
                  className="img-fluid"
                  autoPlay
                  controls
                  loop
                />
                : <img
                  src={'http://zowber-portfolio-assets.s3.amazonaws.com/portfolio-items' + item.heroImgUrl}
                  alt={item.name}
                  className="img-fluid"
                />
              }
            </div>
          </div>
        </div>
      }

      <div className="row" >
        <div className="col-12 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <div className="text-hero">
            { ReactHtmlParser(item.lead) }
          </div>
        </div>
      </div>

    </div>
  )
}

PortfolioDetailIntro.propTypes = {
  item: PropTypes.object.isRequired
}

PortfolioDetailIntro.defaultProps = {
  item: {}
}

export default PortfolioDetailIntro