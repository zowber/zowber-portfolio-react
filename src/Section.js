import React from 'react'
import ReactHtmlParser from 'react-html-parser'

const Section = (props) => {

  const section = props.section
  const subsections = section.sections.map((section, index) => {
    if (section.type === 'textOnly') {
      return (
        <div key={index} className='subsection'>
          <div className='row textOnly'>
            <div className='col-12 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
              <h4>{section.heading}</h4>
            </div>
            <div className='col-12 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
              {ReactHtmlParser(section.content)}
            </div>
          </div>
        </div>
      )
    }
    if (section.type === 'imagesAndText') {
      return (
        <div key={index} className='subsection'>
          <div className='row imagesAndText'>
            <div className='col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2'>
              <h4>{section.heading}</h4>
            </div>
            <div className='col-12 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2 '>
              {section.images.map((image, index) => {
                return (
                  <img
                    key={index}
                    className='img-fluid'
                    alt='Example'
                    src={'http://zowber-portfolio-assets.s3.amazonaws.com/portfolio-items' + image}
                  />
                )
              })
              }
            </div>
            <div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3'>
              <div>
                {ReactHtmlParser(section.content)}
              </div>
            </div>
          </div>
        </div>
      )
    }
    if (section.type === 'imageGrid') {
      return (
        <div key={index} className='subsection'>
          <div className='row imageGrid'>
            <div className='col-12'>
              <div className='row'>

                <div className='col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2'>
                  <h4>{section.heading}</h4>
                  <div>{ReactHtmlParser(section.content)}</div>
                </div>
              </div>

            </div>

            <div className='col-12 col-sm-10 offset-sm-1'>
              <div className='row'>
                {
                  section.images.map((image, index) => {
                    return (
                      <div key={index} className='col-12 col-lg-6'>
                        <img
                          alt='Example'
                          className='img-fluid'
                          src={'http://zowber-portfolio-assets.s3.amazonaws.com/portfolio-items' + image}
                        />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      )
    }
    return null
  })

  return (
    <div className='section'>
      {
        section.heading &&
        <div className='row'>
          <div className='col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2'>
            <h3>{section.heading}</h3>
          </div>
        </div>
      }
      {subsections}
    </div>
  )
}

export default Section