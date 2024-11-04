import React from "react";
import HogCard from "./HogCard";

function HogList({ hogs }) {
    const pigCards = hogs.map((hog) => (
        <HogCard key={hog.name} hog={hog} />
    ));

    return (
        <div className="ui three stackable cards">
            {pigCards}
        </div>
    );
}

export default HogList;
