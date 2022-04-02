import React from "react";

const Comment = ({comment}) => {
    const {body,name} = comment;
  return (
    <div className="border-2 border-purple-700 rounded-lg p-4 w-2/4 m-7 space-y-3">
      <h3 className="text-xl font-semibold text-blue-600">{name}</h3>
      <p className="text-sm">{body}</p>
    </div>
  );
};

export default Comment;
