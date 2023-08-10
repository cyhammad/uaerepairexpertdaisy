import React from "react";

const Service = ({title, desc, img}) => {
  return (
    <div className="card w-72 glass">
      <figure>
        <img
          src={img}
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Call Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
