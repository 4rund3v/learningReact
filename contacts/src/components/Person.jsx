import React from "react";
import { staticApi } from "../utils/ContactsApi";

const Person = ({ className = "", person }) => {
  let avatarUrl = "";
  if (person.index_image) {
    avatarUrl = `${staticApi}/personalities/${person.personality_id}/media`;
  } else {
    avatarUrl = "https://picsum.photos/200";
  }
  //   console.log("[Person] Avatar url --> ", avatarUrl);
  return (
    <div className={className}>
      <div
        className="person-avatar"
        style={{ backgroundImage: `url(${avatarUrl})` }}
      />
      <span className="person-details">
        <p>{person.name}</p>
        <p>{person.total_images}</p>
      </span>
      <button className="person-remove">Remove</button>
    </div>
  );
};

export default Person;
