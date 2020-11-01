import React from "react";

const SidePanel = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem,
  } = props;

  if (!items) return null;
  console.log(" value is :: ", valueProperty);
  console.log(" text is :: ", textProperty);

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item[valueProperty])}
          className={
            item[valueProperty] === selectedItem
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

SidePanel.defaultProps = {
  textProperty: "genre",
  valueProperty: "_id",
};

export default SidePanel;
