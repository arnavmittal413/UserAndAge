import { useEffect, useState } from "react";
import "./Card.css";
function Card(props) {
  return (
    <div className="card-outer">
      {props.DATA.map((users) => (
        <div key={users.id} className="card-inner">
          <p>{users.Name} ({users.age}) year old</p>
        </div>
      ))}
    </div>
  );
}
export default Card;
