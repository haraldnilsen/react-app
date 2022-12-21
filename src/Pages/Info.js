import React from "react";

export const Info = () => {
    return (
        <div className="Info">
            <div className="climb-gear">
            <h2>All the climbing gear:</h2>
                <ul>
                    <li>Fjellsport.no</li>
                    <li>Vpg.no</li>
                    <li>AddNature.no</li>
                    <li>xxl.no</li>
                    <li>hektapaatur.no</li>
                    <li>outnorth.no</li>
                </ul>
            </div>
            <h2>All the climbing news:</h2>
            <div className="climb-news">
                <ul>
                    <li>Norsk-klatring.no</li>
                    <li>Klatring.no</li>
                    <li>Friflyt.No</li>
                    <li>BergenKlatreKlubb.no</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Info;