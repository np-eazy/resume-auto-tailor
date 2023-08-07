import React from "react";
import { Skills } from "../../structure";
import { baseDebugStyle, h1Style, infoContainer, infoKeyStyle, infoValStyle, parStyle } from "../../styles";
import { reStringify } from "../../concatenator";


export const SkillsEntry = (props: {name: string, children: any}) => {
    return (<div style={infoContainer}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div style={infoKeyStyle}>
                {props.name}
            </div>
            <div style={infoValStyle}>
                {props.children}
            </div>
        </div>
    </div>);
}



export const SkillsComponent = (props: {skills: Skills}) => {
    const vals = Object.values(props.skills.skillObj);
    return (<div>
        <div style={h1Style}> Skills </div>
        {Object.keys(props.skills.skillObj)
        .filter((key: string, val: number) => vals[val] != 0)
        .map((key: string, val: number) => 
        <SkillsEntry name={reStringify(key)}>
            {Object.values(props.skills.skillObj)[val].toString() + " years"}
        </SkillsEntry>
        )}
        
        <div style={infoContainer}>
            <div style={{padding: 5}}>
                <div style={parStyle}>
                    {Object.keys(props.skills.skillObj)
                    .filter((key: string, val: number) => vals[val] == 0)
                    .map((key: string, val: number) => reStringify(key) + ", ")}
                </div>        
            </div>
        </div>
    </div>);
}