import React from "react";
import Styles from "./Style1.module.css";

console.log(Styles); // object = {btn1: '_btn1_ltdt8_1'}

const Component1 = () => {
  return (
    <div>
      <h1 className={Styles.head1}>Component1</h1>
      <button className={Styles.btn1}>Button-1</button>
    </div>
  );
};

export default Component1;
