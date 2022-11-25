import React from "react";
import { Link } from "react-router-dom";

const Subheading = () => {
  return (
    <div className="m-auto px-5 text-start py-12 font-red text-white">
      <div className="card bg-transparent px-10 py-10 text-center">
        <h1 className="text-4xl mb-5 font-extrabold" style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.8)" }}>
          GET THE BEST PRIVATE TUTOR IN SECOND
        </h1>
        <p className="mb-4">"We help you in Earning during practical Learning"</p>
        <div className="card-actions mx-auto">
          <Link className="px-5 py-2 rounded-xl bg-[#ffb701] ml-2 text-black hover:bg-yellow-300 border-none font-extrabold">Course</Link>
        </div>
      </div>
    </div>
  );
};

export default Subheading;
