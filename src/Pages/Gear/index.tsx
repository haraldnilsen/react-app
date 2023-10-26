import React from "react";
import InfoElement from "./InfoElement";
import SubNavBar from "../../components/SubNavbar";
import "../../styles/Info.css";

const Gear: React.FC = () => {
  return (
    <div className="">
      <SubNavBar data={["/gear", "/news", "/spots"]} />
      <div className="text-center h-36 w-96 p-4 mx-auto my-4 ">
        <p>
          Every good climber needs good gear. Here you find the best and most
          popular websites to buy your climbing gear, so that you can keep
          sending hard!
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="border-t-4 border-primary info-headline ">
          All the climbing gear:
        </h2>
        <div className="info-container ">
          <InfoElement
            link="https://www.fjellsport.no/"
            name="Fjellsport"
            img="https://www.vg.no/rabattkode/sites/vgno/files/partner_logo/fjellsport-200x200.png"
          />
          <InfoElement
            link="https://www.vpg.no/"
            name="Vertical playground"
            img="https://www.vg.no/rabattkode/sites/vgno/files/styles/partner_logo/public/partner_logo/vpg-200x200.png?itok=62gmD2TZ"
          />
          <InfoElement
            link="https://www.addnature.no/"
            name="AddNature"
            img="https://s3-eu-west-1.amazonaws.com/tpd/logos/5c69a502a28497000165a901/0x0.png"
          />
        </div>
        <div className="info-container">
          <InfoElement
            link="https://www.hektapatur.no/"
            name="Hekta På Tur"
            img="https://www.hektapatur.no/pub_images/original/logo_hpt_rod_4877.png"
          />
          <InfoElement
            link="https://www.outnorth.no/"
            name="OutNorth"
            img="https://www.vg.no/rabattkode/sites/vgno/files/partner_logo/outnorth-200x200_0.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Gear;
