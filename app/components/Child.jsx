import React from "react";
import Image from "next/image";
import "./BubbleUI.css";

const Child = (data) => {
  return (
    <div className="childdiv w-3/5 h-3/5 sm:w-full sm:h-full bg-white rounded-full">
      <Image
        src={data.data.image}
        alt={data.data.name}
        width={50}
        height={50}
        sizes="(max-width: 650px) 25px"
        className="child rounded-full w-1/2 h-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 absolute"
      />
    </div>
  );
};

export default Child;
