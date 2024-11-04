import React, { useState } from "react";
import HogDetails from "./HogDetails";

function HogCard({ hog }) {
    const [isHidden, setIsHidden] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    function handleDetailsClick() {
        setShowDetails((prevShowDetails) => !prevShowDetails);
    }

    // Hide the hog
    if (isHidden) return null;

    // Show the hog
    const { name, speciality, image } = hog;

    return (
        <div className="ui card eight wide column piTile">
            <div className="image">
                <img src={image} alt="hogpic" />
            </div>
            <div className="content">
                <h3 className="header">{name}</h3>
                <div className="description">Speciality: {speciality}</div>
            </div>
            <div className="extra content">
                {showDetails && <HogDetails hog={hog} />}
                <button className="ui button" onClick={handleDetailsClick}>
                    {showDetails ? "Less Info" : "More Info"}
                </button>
                <button className="ui button" onClick={() => setIsHidden(true)}>
                    Hide Me{" "}
                    <span role="img" aria-label="snout">
                        🐖
                    </span>
                </button>
            </div>
        </div>
    );
}

export default HogCard;

