import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  const explore = async () => {
    navigate("/Pizza");
  };
  return (
    <div className="container-fluid backgroundContainer">
      <img className="homeBackground" />
      <div className="row buttonRow">
        <button
          type="button"
          className="btn btn-outline-danger menuButton"
          onClick={explore}
        >
          Browse Menu here
        </button>
      </div>
    </div>
  );
};

export default Home;
