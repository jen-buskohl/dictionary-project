import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  // console.log(props.meanings);
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      <div>
        <div className="definition">{props.meanings.definition}</div>
        <div className="example">{props.meanings.example}</div>

        <Synonyms synonyms={props.meanings.synonyms} />
      </div>
    </div>
  );
}
