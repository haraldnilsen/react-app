import React, { useState, useEffect } from "react";

import SubNavbar from "../../components/SubNavbar";
import SpotElement from "./SpotElement";
import "../../styles/App.css";
import { GymElement } from "../../types/response";
import { fetchGyms } from "../../api/getGyms";
import supabase from "../../clients/supabaseClient";

const Spots: React.FC = () => {
  //all gyms in norway
  const [gyms, setGyms] = useState<GymElement[]>(null);
  //all cities with a registered gym
  const [cities, setCities] = useState<string[]>(null);
  //city to filter list with
  const [city, setCity] = useState("");
  //show kilterboard
  const [kilterChecked, setKilterChecked] = useState(false);
  //show moonboard
  const [moonChecked, setMoonChecked] = useState(false);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleFetchGyms = async () => {
      const data = await fetchGyms();
      if (data) {
        setGyms(data);
        setCities([...new Set(data.map((x) => x.city))]);
        setIsLoaded(true);
      } else {
        setError("Error");
        setIsLoaded(true);
      }
    };

    handleFetchGyms();
  }, []);

  const handleKilterChecked = () => {
    setKilterChecked(!kilterChecked);
  };

  const handleMoonChecked = () => {
    setMoonChecked(!moonChecked);
  };

  /*
        Takes a string as input and filters the gym-list
        according to which cities starts with the string
    */
  function filterCities(
    cityOption: string,
    kilterboardOption: boolean,
    moonboardOption: boolean
  ) {
    let resultat = gyms;

    if (kilterboardOption == true) {
      resultat = resultat.filter((gym) => gym.kilterboard == "true");
    }
    if (moonboardOption == true) {
      resultat = resultat.filter((gym) => gym.moonboard == "true");
    }
    if (cityOption != "") {
      resultat = resultat.filter((gym) =>
        gym.city.startsWith(cityOption.toLowerCase())
      );
    }

    return resultat;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    //hvis data laster ...
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <SubNavbar data={["/gear", "/news", "/spots"]} />
        <div className="text-center w-96 h-36 p-4 mx-auto mt-4">
          <p className="">
            New to town and not sure where to climb? Just choose your city and
            we will show you all climbing-gyms near you!
          </p>
        </div>
        <div className="border-t-4 border-primary h-screen">
          {/* Form in desktop-view */}
          <div className="md:h-screen p-5 md:p-0 shadow-lg md:w-60 md:absolute ">
            <div className="mx-auto flex flex-col p-3">
              <label className="spotform--label">City</label>
              <select
                className="formelement--select"
                onChange={(e) => setCity(e.target.value)}
              >
                <option></option>
                {cities.sort().map((city) => (
                  <option value={city}>
                    {city.charAt(0).toUpperCase()}
                    {city.slice(1)}
                  </option>
                ))}
              </select>
              <div className="px-2 pt-6">
                <input
                  id="kilterboard"
                  type="checkbox"
                  value={kilterChecked.toString()}
                  onChange={handleKilterChecked}
                />
                <label className="spotform--label">Kilterboard</label>
              </div>
              <div className="px-2">
                <input
                  id="moonboard"
                  type="checkbox"
                  value={moonChecked.toString()}
                  onChange={handleMoonChecked}
                />
                <label className="spotform--label">Moonboard</label>
              </div>
            </div>
          </div>
          <div className="md:ml-60 h-screen">
            {filterCities(city, kilterChecked, moonChecked).map((gym) => (
              <React.Fragment key={gym.name}>
                <SpotElement gym={gym} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Spots;
