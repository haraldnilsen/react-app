// React imports
import React, { useState, useEffect } from "react";

export default function Profile ()  {

    return (
        <div>
            <div className= "w-4/5 md:w-2/5 my-20 mx-auto shadow-2xl rounded-xl border-black">
                <div className="h-28 bg-green-400 rounded-t-xl" ></div>
                <h2 className="absolute -mt-5 text-black text-4xl font-bold pl-10">Harald Nilsen</h2>
                <div className="h-80 relative">
                    <div className="p-14">
                        <p>Email: harald_998@hotmail.com</p>
                    </div>
                    <button className="absolute bottom-0 left-52 border hover:bg-green-100 border-black rounded-xl p-2 my-3">Sign out</button>
                </div>
            </div>
        </div>
    )
}

