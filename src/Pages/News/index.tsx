import React from "react";
import InfoElement from "../Gear/InfoElement";
import SubNavBar from "../../components/SubNavbar";
import "../Styles/Info.css";

const News: React.FC = () => {
  return (
    <div>
      <SubNavBar data={["/gear", "/news", "/spots"]} />
      <div className="text-center w-96 h-36 p-4 mx-auto my-4">
        <p className="">
          Want to stay updated on all the latest climbing news? Here's the most
          popular climbing-news websites.
        </p>
      </div>
      <div className="border-t-4 border-primary h-screen">
        <h2 className="info-headline">All the climbing news:</h2>
        <div className="info-container">
          <InfoElement
            link="https://www.norsk-klatring.no/"
            name="Klatring.no"
            img="data:image/png;base64,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"
          />
          <InfoElement
            link="https://klatring.no/"
            name="Norsk Klatreforbund"
            img="https://norskfriluftsliv.no/wp-content/uploads/2020/02/NORGES-KLATREFORBUND-LOGO.jpg"
          />
          <InfoElement
            link="https://www.friflyt.no/"
            name="Friflyt.no"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3uDKIF4i2ixoK6cD-e0vLhbk0d-0k6O6wWh7-sUDkMg&s"
          />
          <InfoElement
            link="https://bergenklatreklubb.no/"
            name="Bergen Klatreklubb"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsg2n_MmRRFx9mXFVBEwOf648uMBxpxytImpEusb4LtlN-PSQbWGZ5xWvtmXso2YEHiw&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
