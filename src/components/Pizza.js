import axios from "axios";
import React, { useEffect, useState } from "react";
import Pizzas from "./Pizzas";
function Pizza() {
  const [pizzas, setPizzas] = useState([]);
  console.log("pizza", pizzas);
  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
      .then((res) => {
        setPizzas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container my-3">
      <h1>Pizzas</h1>
      <div className="row">
        {pizzas.map((data) => (
          <div className="col-lg-4" key={data.id}>
            <Pizzas
              name={data.name}
              image={data.img_url}
              description={data.description}
              price={data.price}
              rating={data.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pizza;
