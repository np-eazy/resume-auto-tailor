import React from "react";
import { Hobby } from "../structure";
import { baseDebugStyle, h1Style, h3Style, parStyle } from "../styles";

const hobbyStyle = {
    ...baseDebugStyle,
}

export const HobbyComponent = (props: {hobbies: Hobby[]}) => {
    return (<div style={hobbyStyle}>
        <div style={h1Style}> Projects </div>
        {props.hobbies.map((entry: Hobby) => <div>
            <div style={h3Style}> {entry.name} </div>
            <div style={parStyle}> {entry.description} </div>
        </div>)}
    </div>);
}