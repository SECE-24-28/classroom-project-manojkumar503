import React from "react";
import PropsNew from "./PropsNew.jsx";

function Props() {
  let name = "Alexa";
  let age = 7;

  return <PropsNew message={name} age={age} />;
}
export default Props;
