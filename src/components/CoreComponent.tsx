import React from "react";
import { Core } from "../structure";
import { baseDebugStyle, h1Style, parStyle } from "../styles";
import { concatenate } from "../concatenator";

const coreStyle = {
    ...baseDebugStyle,
}

export const CoreComponent = (props: {core: Core}) => {
    return (<div style={coreStyle}>
        <div>
            <div style={h1Style}>
                {props.core.contact.name}
            </div>
            <div style={parStyle}>
                {props.core.contact.number} | {props.core.contact.email} | {concatenate(props.core.location)} | {concatenate(props.core.location)} 
            </div>
        </div>
    </div>);
}