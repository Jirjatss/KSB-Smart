import React from "react";

const CardMasthead = (props) => {
  return (
    <>
      <div className="card card-compact  bg-transparent mx-auto w-full text-black rounded-xl">
        <figure>
          <img src={props.gambar} alt={props.ket} />
        </figure>
      </div>
    </>
  );
};

export default CardMasthead;
