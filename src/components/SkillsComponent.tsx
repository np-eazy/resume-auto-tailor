import React from "react";
import { Skills } from "../structure";
import { baseDebugStyle, h1Style } from "../styles";

const skillsStyle = {
    ...baseDebugStyle,
}

export const SkillsComponent = (props: {skills: Skills}) => {
    return (<div style={skillsStyle}>
        <div style={h1Style}> Skills </div>
    </div>);
}