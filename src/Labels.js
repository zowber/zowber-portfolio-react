import React from "react";
import PropTypes from "prop-types";
import "./Labels.css";

const Labels = props => {
  const labels = props.labels.map((label, index) => {
    return (
      <li key={index} className="label">
        {label.name}
      </li>
    );
  });

  return <ul className="labels list-unstyled">{labels}</ul>;
};

Labels.propTypes = {
  labels: PropTypes.array.isRequired
};

Labels.defaultProps = {
  labels: []
};

export default Labels;
