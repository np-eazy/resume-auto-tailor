import React from "react";
import { Hobby } from "../structure";
import { baseDebugStyle, h1Style, parStyle } from "../styles";

export const HobbyComponent = (props: {hobbies: Hobby[]}) => {
    return (<div>
        <div style={h1Style}> Hobbies </div>
        
        {props.hobbies.map((entry: Hobby) => <div style={baseDebugStyle}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={parStyle}> {entry.name} </div>
                <div style={parStyle}> {entry.description} </div>
            </div> 
        </div>)}
    </div>);
}