import React from "react";
import PropTypes from "prop-types";
import Media from "./Media";
import "./Hero.css";

class Hero extends React.Component {
  static propTypes = {
    portfolioItems: PropTypes.array.isRequired
  };
  static defaultProps = {
    portfolioItems: []
  };

  render() {
    const portfolioItems = this.props.portfolioItems
      //.filter((item, index) => index === 0)
      .map((item, index) => {
        return <Media item={item} />;
      });

    return <div className="container">{portfolioItems}</div>;
  }
}

export default Hero;
