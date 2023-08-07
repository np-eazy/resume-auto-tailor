import React from "react";
import { Skills } from "../../structure";
import { baseDebugStyle, h1Style, infoContainer, infoKeyStyle, infoValStyle, parStyle } from "../../styles";
import { reStringify } from "../../concatenator";


export const SkillsEntry = (props: {name: string, children: any}) => {
    return (<div style={{minWidth: 180}}>
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
    const keys = Object.keys(props.skills.skillObj)
    .filter((key: string, val: number) => vals[val] != 0).map((key: string, val: number) => 
        <div>
            <SkillsEntry name={reStringify(key)}>
                {vals[val].toString() + (vals[val] == 1 ? " year" : " years")}
            </SkillsEntry>
        </div>);
    const leftHalf = keys.slice(0, keys.length / 2);
    const rightHalf = keys.slice(keys.length / 2);

    
    return (<div>
        <div style={h1Style}> Skills </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>
                {keys.slice(0, keys.length / 2).map((element: any) => element)}
            </div>
            <div>
                {keys.slice(keys.length / 2).map((element: any) => element)}
            </div>
        </div>
        

        <div style={{minHeight: 16}}></div>
        <div>
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