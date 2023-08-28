import React from "react";

const ListItem = ({ index, content }) => {
  return (
    <div className="flex gap-3 items-center">
      <div
        className="bg-blue-200 px-4
      my-5 py-2 rounded-lg font-semibold">
        {index}
      </div>
      <p className="font-medium text-xl pl-3">{content}</p>
    </div>
  );
};

export default ListItem;
