import React, {useState, useEffect} from "react";

export default function ImageOfTheDay({imgOTD}) {
    console.log(imgOTD)
    return (
        <div className="image-container">
            <img src={imgOTD.url} alt="a random picto based on today's date"/>
        </div>
    )
}