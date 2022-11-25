import React from "react";

const CardABout = (props) => {
  return (
    <div className="card lg:card-side w-full text-primary-content border-2 border-black rounded-3xl ">
      <figure className="md:px-2 py-2  mx-auto">
        <img src={props.gambar} alt="" className="h-15 w-15" />
      </figure>
      <div className="card-body  text-black py-2 m-auto">
        <h2 className="text-base text-start">{props.ket}</h2>
      </div>
    </div>
  );
};

export default CardABout;
