import React from "react";

const CardAboutUs = (props) => {
  return (
    <div className="card w-full bg-[#ffb701] text-black shadow-xl">
      <figure>
        <img src={props.gambar} alt={props.ket} className="md:w-96 md:h-56 w-44 h-32" />
      </figure>
      <div className="card-body bg-white py-4 rounded-xl">
        <h2 className="card-title mx-auto">{props.title}</h2>
        <p className="text-center mb-2">{props.ket}</p>
      </div>
    </div>
  );
};

export default CardAboutUs;
