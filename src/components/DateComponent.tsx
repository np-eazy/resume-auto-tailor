import React from "react";
import { Date } from "../structure";
import { baseDebugStyle } from "../styles";
import { concatenate } from "../concatenator";

const dateStyle = {
    ...baseDebugStyle,
}

export const DateComponent = (props: {date: Date}) => {
    return (<div style={dateStyle}>
        {concatenate(props.date)}
    </div>);
}