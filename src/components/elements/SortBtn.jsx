import React from "react";

const SortBtn = ({ text, callback }) => (
  <button
    type="button"
    style={{ borderRadius: "6px" }}
    className="sort-btn button-dark"
    onClick={callback}
  >
    {text}
  </button>
);

export default SortBtn;
