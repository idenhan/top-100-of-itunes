import React from "react";

const LoadMoreBtn = ({ text = "Load more albums", callback }) => (
  <div className="text-center">
    <button
      type="button"
      style={{ borderRadius: "6px" }}
      className="button button-dark"
      onClick={callback}
    >
      {text} &#8595;
    </button>
  </div>
);

export default LoadMoreBtn;
