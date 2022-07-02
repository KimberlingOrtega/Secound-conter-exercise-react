import React from "react";
import PropTypes from "prop-types"

const Counter = (props) => {
  return (
    <div className="card">
      <div className="card">
        <h1>{props.unidad}</h1>
      </div>
    </div>
  );
};

Counter.propTypes = {
	unidad: PropTypes.number,	
}





export default Counter;
