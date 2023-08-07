import React from "react";
import { Skills } from "../structure";
import { baseDebugStyle, h1Style } from "../styles";

const skillsStyle = {
    ...baseDebugStyle,
}

export const SkillsComponent = (props: {skills: Skills}) => {
    const vals = Object.values(props.skills.skillObj);
    return (<div style={skillsStyle}>
        <div style={h1Style}> Skills </div>
        {Object.keys(props.skills.skillObj)
        .filter((key: string, val: number) => vals[val] != 0)
        .map((key: string, val: number) => <div>
            {key + ": " + Object.values(props.skills.skillObj)[val].toString() + " years"}
        </div>)}
        {Object.keys(props.skills.skillObj)
        .filter((key: string, val: number) => vals[val] == 0)
        .map((key: string, val: number) => key + ", ")}
    </div>);
}