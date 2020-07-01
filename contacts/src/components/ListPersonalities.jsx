import React from "react";
import Person from "./Person";

const ListPersonalities = ({ personalities }) => {
  return (
    <div className="personalityList">
      List Contacts {personalities.length}
      <ol className="list-personalities">
        {personalities.map((person) => (
          <li key={person._id}>
            <Person className="personalities-list-item" person={person} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ListPersonalities;
