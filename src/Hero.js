import React from 'react'
import PropTypes from 'prop-types'
import Labels from './Labels'
import './Hero.css'

class Hero extends React.Component {
  static propTypes = {
    portfolioItems: PropTypes.array.isRequired
  }
  static defaultProps = {
    portfolioItems: []
  }

  render() {
    const portfolioItems = this.props.portfolioItems
      .filter((item, index) => index === 0)
      .map((item, index) => {
        return (
          <div className="item" key={index}>

            <h1> Heading</h1>

            <Labels labels={[{name: 'Label'}]} />

            <div className='description'>

            </div>

            <button className='btn btn-primary'>Hi</button>

            <img src='http://placehold.it/500x500' />

          </div>
        )
      })

    return (
      <div className='hero' >

        {portfolioItems}

      </div>
    )
  }
}

export default Hero