import React from "react";

interface InfoElementProps {
  name: string;
  img: string;
  link: string;
}

const InfoElement: React.FC<InfoElementProps> = ({ name, img, link }) => {
  return (
    <div className="border bg-white w-32 my-2 mx-5 p-1 rounded-md shadow-md hover:shadow-lg">
      <a href={link} className="flex flex-col items-center">
        <img className="p-3 " src={img} />
        <p className="text-center font-bold">{name}</p>
      </a>
    </div>
  );
};

export default InfoElement;
