import React from "react";

const CardCourseHome = (props) => {
  return (
    <div className="card w-full bg-[#002e74] text-white shadow-xl cursor-pointer lg:rounded-lg">
      <figure className="py-6 mx-auto">
        <img src={props.gambar} alt={props.ket} className="md:w-44 md:h-44 w-24 h-24" />
      </figure>
      <div className="card-body bg-transparent py-4 rounded-xl">
        <h2 className="card-title mx-auto">{props.title}</h2>
        <p className="text-center mb-2">{props.ket}</p>
      </div>
    </div>
  );
};

export default CardCourseHome;
