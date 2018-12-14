import React from "react";
import { Link } from "react-router-dom";
import Labels from "./Labels";
import "./Media.css";

const Media = props => {
  const item = props.item;

  return (
    <div className="media">
      <div className="row">
        <div className="col-8 offset-2 col-sm-5 offset-sm-0">
          <Link className="link" to={"/" + item.id}>
            <img
              className="img-fluid"
              src={
                "http://zowber-portfolio-assets.s3.amazonaws.com/portfolio-items" +
                item.heroImgUrl
              }
              alt={item.name}
            />
          </Link>
        </div>

        <div className="col-12 col-sm-7">
          <h3>{item.name}</h3>
          <Labels labels={item.labels} />
          <p>{item.description}</p>
          <Link to={"/" + item.id} className="btn btn-outline-primary">
            More details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Media;
