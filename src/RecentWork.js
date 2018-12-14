import React from "react";
import Media from "./Media";

const RecentWork = props => {
  const recentWorkItems = props.portfolioItems
    .filter(item => item.type === "work")
    .map(item => {
      return <Media key={item.id} item={item} />;
    });

  return (
    <div className="recent-work col-12">
      <h2>Recent Work</h2>
      {recentWorkItems}
    </div>
  );
};

export default RecentWork;
