import React from "react";
import LocIcon from "../Assets/images/loc.png";

export default function Card(props)
{
    console.log(props)
    return (
        <div className="card">
            <img src={props.data.imageUrl} />
            <div className="card--detail">
                <div className="card--detail-location">
                    <img src={LocIcon} />
                    <p>{props.data.location.toUpperCase()}</p>
                    <a href={props.data.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h3>{props.data.title}</h3>
                <p className="card--detail-date">{`${props.data.startDate} - ${props.data.endDate}`}</p>
                <p className="card--detail-desc">{props.data.description}</p>
            </div>
        </div>
    );
}