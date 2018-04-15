import React from 'react';
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'

import * as data from './data'

class Home extends React.Component {

  state = {
    portfolioItems: [],
  }

  componentDidMount() {
    data.getPortfolioItems(res =>
      this.setState({ portfolioItems: res })
    )
  }

  render() {

    return (

      <div className='d-flex flex-column'>

        <Header />

        <Hero
          portfolioItems={this.state.portfolioItems}
        />

        <Footer />
      </div>

    )
  };

}

export default Home