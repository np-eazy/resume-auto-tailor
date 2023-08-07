import React from "react";
import { Date, Location } from "./structure";
import { concatenate } from "./concatenator";
import { baseDebugStyle, dateStyle, infoContainer, locationStyle } from "./styles";


export const PlaceComponent = (props: {startDate: Date, endDate: Date, location: Location}) => {
    return (<div style={{position: "relative", height: "100%", width: "100%", minWidth: 120}}>
        <div style={{textAlign: "right" as "right", width: "100%"}}>
                <div style={{width: "100%"}}>
                    <div style={dateStyle}>{concatenate(props.startDate)} - {props.endDate ? concatenate(props.endDate) : "Current"}</div>
                    <div style={{position: "absolute", bottom: "0", right: "0", width: "100%"}}>
                        <div style={locationStyle}>{concatenate(props.location)}</div>
                    </div>
                </div>
        </div>
    </div>);
};
