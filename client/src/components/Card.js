import React from "react";

export default function Card(props) {
  
  const {name,img,desc,option} = props
  const opt = Object.keys(option)
  
  return (
    <div className="container">   
    <div className="py-3">
      <div
        className="card border-success bg-dark text-light"
        style={{ width: "18rem" }}
      >
        <img
          src={img}
          className="card-img-top"
          alt="..."
          style={{ width: "286px", height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{desc}</p>
          <div className="container">
            <select className="m-2 p-0.5 h-100 bg-success text-light rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success text-light rounded">
              {opt.map((opts)=>{
                return(
                  <option keys={opts} value={opts}>{opts}</option>
                )
              })}
            </select>
            <h6 className="d-inline mx-3">Total Price</h6>
            <hr />
            <button className="btn btn-success btn-sm justify-center" type="submit">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
