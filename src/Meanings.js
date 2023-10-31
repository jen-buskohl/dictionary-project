import React from "react";

export default function Meanings(props) {
  // console.log(props.meanings);
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definition.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong> {definition.definition}
              <br />
              <strong>Example: </strong> <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
