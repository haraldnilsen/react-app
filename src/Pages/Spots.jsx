import React, { useState, useEffect} from "react";

import SubNavBar from "../Components/SubNavBar";
import InfoElement from "../Components/Info/InfoElement";


const Spots = () => {
    
    const [gyms, setGyms] = useState(null);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        Promise.all([
            fetch("http://localhost:8040/gyms"),
        ])
        .then(([resGyms]) =>
            Promise.all([resGyms.json()])
        )
        .then(([dataGyms]) => {
            setGyms(dataGyms);
            setIsLoaded(true);
        }, (error) => {
            setError(error);
            setIsLoaded(true);
        });
    }, []);
    
    if (error) {
        return <div>Error: {error.message}</div>
      } else if (!isLoaded) { //hvis data laster ...
        return <div>Loading...</div>
      } else {
    return (
        <div>
            <SubNavBar data={["/gear", "/news", "/spots"]}/>
            <div className="text-center w-96 h-36 p-4 mx-auto my-4">
                <p className="">New to town and not sure where to climb? Just choose your city and we will show you all climbing-gyms near you!</p>
            </div>
            <div className="border-t-4 border-primary h-screen ">
                <div className="h-screen shadow w-60 absolute ">
                    <div className="mx-auto flex flex-col p-3">
                        <label >Choose city</label>
                        <input name="city" className="shadow-lg border p-2"></input>
                    </div>
                </div>
                <div className="ml-60 h-screen">
                    {gyms.map(gym => 
                        <React.Fragment key={gym.name}>
                            <SpotElement gym={gym} />
                        </React.Fragment>)}
                        {/* <SpotElement gym={gyms[0]} /> */}
                </div>
            </div>
            
        </div>
    )
    }
}

const SpotElement = (props) => {
    return (
        <div className=" h-64 my-5 flex ">
            <div className="w-full px-4 py-2 flex-col">
                <h2 className="p-4 bg-primary rounded text-white font-bold shadow text-center">{props.gym.name}</h2>
                <div className="flex-col p-2">
                    <p>{props.gym.about}</p>
                    <p>Kilterboard: {props.gym.kilterboard}</p>
                    <p>Moonboard: {props.gym.moonboard}</p>
                    <p className="mt:auto">Homepage: {props.gym.homepage}</p>
                </div>
            </div>
            <img className="w-60 my-7 ml-auto object-cover" src={props.gym.picture} />
        </div>
    )
}

export default Spots;