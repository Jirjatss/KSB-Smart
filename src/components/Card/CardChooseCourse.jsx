import React from "react";

const CardChooseCourse = (props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure className="bg-[#ffb701]">
        <img src={props.gambar} alt={props.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{props.title}</h2>
        <p className="text-white">{props.ket}</p>
        <div className="card-actions justify-end">
          <button className="px-6 py-2 rounded-xl bg-[#ffb701] text-black">Detail</button>
        </div>
      </div>
    </div>
  );
};

export default CardChooseCourse;
