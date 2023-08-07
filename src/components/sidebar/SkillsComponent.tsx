import React from "react";
import { Skills } from "../../structure";
import { baseDebugStyle, h1Style } from "../../styles";

const skillsStyle = {
    ...baseDebugStyle,
}

export const SkillsEntry = (props: {name: string, children: any}) => {
    return (<div style={baseDebugStyle}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div style={baseDebugStyle}>
                {props.name}
            </div>
            <div style={baseDebugStyle}>
                {props.children}
            </div>
        </div>
    </div>);
}



export const SkillsComponent = (props: {skills: Skills}) => {
    const vals = Object.values(props.skills.skillObj);
    return (<div style={skillsStyle}>
        <div style={h1Style}> Skills </div>
        {Object.keys(props.skills.skillObj)
        .filter((key: string, val: number) => vals[val] != 0)
        .map((key: string, val: number) => 
        <SkillsEntry name={key}>
            {Object.values(props.skills.skillObj)[val].toString() + " years"}
        </SkillsEntry>
        )}
        
        <div style={baseDebugStyle}>
            {Object.keys(props.skills.skillObj)
            .filter((key: string, val: number) => vals[val] == 0)
            .map((key: string, val: number) => key + ", ")}
        </div>
    </div>);
}