import React from "react";

const FooterListItem = ({ content }) => {
  return (
    <a href="#">
      <li className="flex pr-1">
        {content} <span className="pr-1 pl-1 font-light">|</span>
      </li>
    </a>
  );
};

export default FooterListItem;
