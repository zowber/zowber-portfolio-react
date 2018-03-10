import React from 'react';
import Header from './Header'
import Hero from './Hero'
import CaseStudies from './CaseStudies'
import RecentWork from './RecentWork'
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

      <div className='page_portfolio'>
      
        <Header />

        <Hero />

        <div className="container">
            <CaseStudies
              portfolioItems={this.state.portfolioItems}
            />
        </div>

        <div className="container">
          <div className="row">
            <RecentWork
              portfolioItems={this.state.portfolioItems} />
          </div>
        </div>

        <Footer />
      </div>

    )
  };

}

export default Home