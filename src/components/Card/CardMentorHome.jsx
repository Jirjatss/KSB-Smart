import React from "react";
import checklist from "../../assets/checklist.png";

const CardMentorHome = (props) => {
  return (
    <div className="card w-full bg-transparent text-black  cursor-pointer">
      <figure>
        <img src={props.gambar} alt={props.nama} className="md:w-56 md:h-56 w-72 h-72" />
      </figure>
      <div className="card-body bg-[#ffb701] py-4 rounded-xl">
        <p className="card-title text-xl mx-auto">{props.nama}</p>
        <p className="text-lg border-b-2 border-black w-full text-center font-semibold mb-3">{props.study}</p>

        <div className="text-justify">
          <p className="text-center mb-2 flex">
            <span>
              <img src={checklist} alt="" className="w-5 h-5 mr-4 mt-1" />
            </span>
            {props.prestasi1}
          </p>
          <p className="text-center mb-2 flex">
            <span>
              <img src={checklist} alt="" className="w-5 h-5 mr-4 mt-1" />
            </span>
            {props.prestasi2}
          </p>
          <p className="text-center mb-2 flex">
            <span>
              <img src={checklist} alt="" className="w-5 h-5 mr-4 mt-1" />
            </span>
            {props.prestasi3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardMentorHome;
