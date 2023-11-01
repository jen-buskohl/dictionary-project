import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  // console.log(props.meanings);
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      <div>
        <strong>Definition: </strong> {props.meanings.definition}
        <br />
        <strong>Example: </strong> <em>{props.meanings.example}</em>
        <br />
        <Synonyms synonyms={props.meanings.synonyms} />
      </div>
    </div>
  );
}
