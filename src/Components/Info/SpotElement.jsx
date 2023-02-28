import React from "react";
import Unchecked from "../../img/icons8-close-48.png"
import Checked from "../../img/icons8-done-48.png"

export const SpotElement = (props) => {
    return (
        <div className="h-64 my-5 flex ">
            <div className="w-full px-4 py-2">
                <h2 className="p-4 bg-primary rounded text-white font-bold shadow text-center">{props.gym.name}</h2>
                <div className="flex-col p-2 ">
                    <p className="inline-block w-full py-3 border-b-2 border-secondary ">{props.gym.about}</p>
                    <div className="flex justify-between">
                        <div className="mt-2 pt-2">
                            <div className="flex h-6">
                                <p>Kilterboard:</p>
                                {props.gym.kilterboard == "true"
                                    ? <img src={Checked}/>
                                    : <img src={Unchecked}/>
                                }
                            </div>
                            <div className="flex h-6">
                                <p>Moonboard:</p>
                                {props.gym.moonboard == "true"
                                    ? <img src={Checked}/>
                                    : <img src={Unchecked}/>
                                }
                            </div>
                            <p className="">City: {props.gym.city.charAt(0).toUpperCase()}{props.gym.city.slice(1)}</p>
                        </div>
                        <a target="_blank" href={props.gym.homepage}>
                            <div className="flex border-2 border-secondary rounded w-max p-2 mt-4">
                                <p className="px-2">Homepage</p>
                                <img className="h-5 my-auto" src={"https://static.thenounproject.com/png/1598671-200.png"}/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <img className="w-60 my-7 ml-auto object-cover" src={props.gym.picture} />
        </div>
    )
}

export default SpotElement;