import React from "react";

/*
Input : liked : boolean
 onClick : call onClick
*/
const style = {
  cursor: "pointer ",
};

const Like = (props) => {
  const { liked, onClick } = props;
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      className={classes}
      style={style}
      aria-hidden="true"
      onClick={onClick}
    ></i>
  );
};

export default Like;
