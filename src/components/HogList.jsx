import React from "react"
import HogCard from "./HogCard"


function HogList({hogs}){
    const pig = hogs.map((hog)=>{
        return(
    <div className="ui three stackable cards">
    <HogCard key={pig.name} hog ={hog}/>
    </div>
        )})}
        export default HogList;