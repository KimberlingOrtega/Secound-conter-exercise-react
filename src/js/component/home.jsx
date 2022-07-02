import React from "react";
import Counter from "./Counter.jsx";
import PropTypes from "prop-types";
//include images into your bundle

//create your first component
const Home = (props) => {
  return (
    <div className="text-center d-flex bg-danger align-items-center vh-100">
      <div className="col-2">
        <div className="card">
          <div className="card-body">
            <img
              src="https://cdn-icons-png.flaticon.com/512/109/109613.png"
              height="40px"
            ></img>
          </div>
        </div>
      </div>

      <div className="col-2">
        <Counter unidad={Math.floor((props.seconds/10000)%10)} />
      </div>

      <div className="col-2">
        <Counter unidad={Math.floor((props.seconds/1000)%10)} />
      </div>

      <div className="col-2">
        <Counter unidad={Math.floor((props.seconds/100)%10)} />
      </div>

      <div className="col-2">
        <Counter unidad={Math.floor((props.seconds/10)%10)} />
      </div>

      <div className="col-2">
        <Counter unidad={Math.floor((props.seconds/1)%10)} />
      </div>
    </div>
  );
};

Home.propTypes = {
  seconds: PropTypes.number,
};

export default Home;
