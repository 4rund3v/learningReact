import React from "react";

// Input : liked: boolean True/False
//Output : onClick:

//stateless functional component
const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) {
    classes += "-o";
  }
  return (
    <i
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
    ></i>
  );
};
// no state & no helper methods: hence a controlled component
// class Like extends Component {
//   render() {
//     let classes = "fa fa-heart";
//     if (!this.props.liked) {
//       classes += "-o";
//     }
//     return (
//       <i
//         className={classes}
//         aria-hidden="true"
//         style={{ cursor: "pointer" }}
//         onClick={this.props.onClick}
//       ></i>
//     );
//   }
// }

export default Like;
