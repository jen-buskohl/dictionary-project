import React from "react";

export default function Meanings(props) {
  // console.log(props.meanings);
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      <div>
        <p>
          <strong>Definition: </strong> {props.meanings.definition}
          <br />
          <strong>Example: </strong> <em>{props.meanings.example}</em>
        </p>
      </div>
    </div>
  );
}
