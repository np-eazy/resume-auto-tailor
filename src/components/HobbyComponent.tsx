import React from "react";
import { Hobby } from "../structure";
import { baseDebugStyle, h1Style, parStyle } from "../styles";

export const HobbyComponent = (props: {hobbies: Hobby[]}) => {
    return (<div>
        <div style={h1Style}> Hobbies </div>
        <ul>
            {props.hobbies.map((entry: Hobby) => <li style={{width: "90%"}}>
                <div style={parStyle}> {entry.description} </div>
            </li> )}
        </ul>
    </div>);
}