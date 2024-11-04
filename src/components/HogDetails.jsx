import React from "react";

function HogDetails({hog}){
    const {greased, weight, "highest medal achieved": medal} = hog
    return(

        <div className="description">
            <strong>{greased? 'Greased': 'Nongreased'}</strong>
            <p>highest medal achieved: <strong>{medal}</strong> </p>
            <p>
                Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator 
                with Thru-theDoor Ice and water:<strong>{weight}</strong>
            </p>
        </div>
    )
}

export default HogDetails
