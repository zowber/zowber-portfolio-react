import React from 'react'
import PortfolioDetailHeader from './PortfolioDetailHeader'
import PortfolioDetailIntro from './PortfolioDetailIntro'
import PortfolioDetailBody from './PortfolioDetailBody'
import Footer from './Footer'

import * as data from './data'

class PortfolioDetail extends React.Component {
    state = {
        item: {},
    }

    componentDidMount() {
        data.getPortfolioItem(this.props.match.params.itemId, item => {
            this.setState({ item: item })
        })
    }

    render() {
        return (
            <div className='page_portfolio-detail'>

                <PortfolioDetailHeader
                    item={this.state.item}
                />

                <PortfolioDetailIntro
                    item={this.state.item}
                />

                <PortfolioDetailBody
                    sections={this.state.item.sections}
                />

                <Footer />
            </div>
        )
    }
}

export default PortfolioDetail