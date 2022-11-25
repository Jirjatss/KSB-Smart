import React from "react";

const Title = (props) => {
  return (
    <div>
      <div className="text-4xl lg:ml-10 mb-8 lg:text-start text-center">
        <span className="font-bold border-b-4 border-[#002e74]">{props.title}</span>
      </div>
    </div>
  );
};

export default Title;
