import React from "react";

const LoadMoreBtn = ({ text = "Load more albums", callback }) => (
  <div className="text-center">
    <button type="button" className="button button-dark" onClick={callback}>
      {text} &#8595;
    </button>
  </div>
);

export default LoadMoreBtn;
